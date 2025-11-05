const express = require('express');
const router = express.Router();

const CargoModel = require('../models/CargoModel');
const { validarId } = require('../validators/IDValidator');
const { validarCargo, validarCargoAtualizacao } = require('../validators/CargoValidator');

router.get('/cargos', async (req, res) => {
  const cargos = await CargoModel.find();
  res.json(cargos);
});

router.get('/cargos/:id', validarId, async (req, res) => {
  const cargo = await CargoModel.findById(req.params.id);
  if (!cargo) {
    return res.status(404).json({ message: 'Cargo não encontrado!' });
  }
  res.json(cargo);
});

router.post('/cargos', validarCargo, async (req, res) => {
  const novoCargo = await CargoModel.create(req.body);
  res.status(201).json(novoCargo);
});

router.put('/cargos/:id', validarId, validarCargoAtualizacao, async (req, res) => {
  const updatedCargo = await CargoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedCargo) {
    return res.status(404).json({ message: 'Cargo não encontrado!' });
  }
  res.json(updatedCargo);
});

router.delete('/cargos/:id', validarId, async (req, res) => {
  const deletedCargo = await CargoModel.findByIdAndDelete(req.params.id);
  if (!deletedCargo) {
    return res.status(404).json({ message: 'Cargo não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;