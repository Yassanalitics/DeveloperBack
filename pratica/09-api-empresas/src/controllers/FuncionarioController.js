const express = require('express');
const router = express.Router();

const FuncionarioModel = require('../models/FuncionarioModel');
const { validarFuncionario, validarAtualizacaoFuncionario } = require('../validators/FuncionarioValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/funcionarios', async (req, res) => {
  const funcionarios = await FuncionarioModel.find().populate(['cargo', 'departamento']);
  res.json(funcionarios);
});

router.get('/funcionarios/:id', validarId, async (req, res) => {
  const funcionario = await FuncionarioModel.findById(req.params.id).populate(['cargo', 'departamento']);
  if (!funcionario) {
    return res.status(404).json({ error: 'Funcionário não encontrado' });
  }
  res.json(funcionario);
});

router.post('/funcionarios', validarFuncionario, async (req, res) => {
  const novoFuncionario = await FuncionarioModel.create(req.body);
  res.status(201).json(novoFuncionario);
});

router.put('/funcionarios/:id', validarId, validarAtualizacaoFuncionario, async (req, res) => {
  const funcionarioAtualizado = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!funcionarioAtualizado) {
    return res.status(404).json({ error: 'Funcionário não encontrado' });
  }
  res.json(funcionarioAtualizado);
});

router.delete('/funcionarios/:id', validarId, async (req, res) => {
  const funcionarioDeletado = await FuncionarioModel.findByIdAndDelete(req.params.id);
  if (!funcionarioDeletado) {
    return res.status(404).json({ error: 'Funcionário não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;