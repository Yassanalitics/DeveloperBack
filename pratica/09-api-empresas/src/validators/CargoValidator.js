const yup = require('yup');

const cargoSchema = yup.object().shape({
  nome: yup.string().required('O nome do cargo é obrigatório').min(3, 'O nome do cargo deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição do cargo é obrigatória').min(10, 'A descrição do cargo deve ter pelo menos 10 caracteres'),
  salario: yup.number().required('O salário do cargo é obrigatório').min(1518.00, 'O salário deve ser no mínimo R$ 1.518,00'),
})

async function validarCargo(req, res, next) {
  try {
    await cargoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const cargoAtualizarSchema = yup.object().shape({
  nome: yup.string().min(3, 'O nome do cargo deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(10, 'A descrição do cargo deve ter pelo menos 10 caracteres'),
  salario: yup.number().min(1518.00, 'O salário deve ser no mínimo R$ 1.518,00'),
})

async function validarCargoAtualizacao(req, res, next) {
  try {
    await cargoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarCargo, validarCargoAtualizacao };