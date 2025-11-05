const yup = require('yup');

const departamentoSchema = yup.object().shape({
  nome: yup.string().required('O nome do departamento é obrigatório').min(3, 'O nome do departamento deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição do departamento é obrigatória').min(5, 'A descrição do departamento deve ter pelo menos 5 caracteres'),
});

async function validarDepartamento(req, res, next) {
  try {
    await departamentoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const departamentoAtualizarSchema = yup.object().shape({
  nome: yup.string().min(3, 'O nome do departamento deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(5, 'A descrição do departamento deve ter pelo menos 5 caracteres'),
});

async function validarDepartamentoAtualizacao(req, res, next) {
  try {
    await departamentoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarDepartamento, validarDepartamentoAtualizacao };