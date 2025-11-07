const express = require('express');
const router = express.Router();

const TarefaModel = require('../models/TarefaModel');
const { validarId } = require('../validators/IDValidator');
const { validarTarefa, validarTarefaAtualizacao } = require('../validators/TarefaValidator');

router.get('/Tarefas', async (req, res) => {
  const Tarefas = await TarefaModel.find();
  res.json(Tarefas);
});

router.get('/Tarefas/:id', validarId, async (req, res) => {
  const Tarefa = await TarefaModel.findById(req.params.id);
  if (!Tarefa) {
    return res.status(404).json({ message: 'Tarefa não encontrada!' });
  }
  res.json(Tarefa.populate(['projeto', 'funcionario']));
});

router.post('/Tarefas', validarTarefa, async (req, res) => {
  const novaTarefa = await TarefaModel.create(req.body);
  res.status(201).json(novaTarefa);
});

router.put('/Tarefas/:id', validarId, validarTarefaAtualizacao, async (req, res) => {
  const updatedTarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedTarefa) {
    return res.status(404).json({ message: 'Tarefa não encontrada!' });
  }
  res.json(updatedTarefa);
});

router.delete('/Tarefas/:id', validarId, async (req, res) => {
  const deletedTarefa = await TarefaModel.findByIdAndDelete(req.params.id);
  if (!deletedTarefa) {
    return res.status(404).json({ message: 'Tarefa não encontrada!' });
  }
  res.status(204).send();
});

module.exports = router;