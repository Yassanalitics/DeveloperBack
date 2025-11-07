const express = require('express');
const router = express.Router();

const ProjetoModel = require('../models/ProjetoModel');
const { validarId } = require('../validators/IDValidator');
const { validarProjeto, validarProjetoAtualizacao } = require('../validators/ProjetoValidator');

router.get('/projetos', async (req, res) => {
  const projetos = await ProjetoModel.find();
  res.json(projetos);
});

router.get('/projetos/:id', validarId, async (req, res) => {
  const projeto = await ProjetoModel.findById(req.params.id);
  if (!projeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.json(projeto);
});

router.post('/projetos', validarProjeto, async (req, res) => {
  const novoProjeto = await ProjetoModel.create(req.body);
  res.status(201).json(novoProjeto);
});

router.put('/projetos/:id', validarId, validarProjetoAtualizacao, async (req, res) => {
  const updatedProjeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedProjeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.json(updatedProjeto);
});

router.delete('/projetos/:id', validarId, async (req, res) => {
  const deletedProjeto = await ProjetoModel.findByIdAndDelete(req.params.id);
  if (!deletedProjeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;