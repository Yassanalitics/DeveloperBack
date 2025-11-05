const express = require('express');
const router = express.Router();

const DepartamentoModel = require('../models/DepartamentoModel');
const { validarId } = require('../validators/IDValidator');
const { validarDepartamento, validarDepartamentoAtualizacao } = require('../validators/DepartamentoValidator');

router.get('/departamentos', async (req, res) => {
  const departamentos = await DepartamentoModel.find();
  res.json(departamentos);
});

router.get('/departamentos/:id', validarId, async (req, res) => {
  const departamento = await DepartamentoModel.findById(req.params.id);
  if (!departamento) {
    return res.status(404).json({ message: 'Departamento não econtrado!' });
  }
  res.json(departamento);
});

router.post('/departamentos', validarDepartamento, async (req, res) => {
  const novoDepartamento = await DepartamentoModel.create(req.body);
  res.status(201).json(novoDepartamento);
});

router.put('/departamentos/:id', validarId, validarDepartamentoAtualizacao, async (req, res) => {
  const updatedDepartamento = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedDepartamento) {
    return res.status(404).json({ message: 'Departamento não econtrado!' });
  }
  res.json(updatedDepartamento);
});

router.delete('/departamentos/:id', validarId, async (req, res) => {
  const deletedDepartamento = await DepartamentoModel.findByIdAndDelete(req.params.id);
  if (!deletedDepartamento) {
    return res.status(404).json({ message: 'Departamento não econtrado!' });
  }
  res.status(204).send();
});

module.exports = router;