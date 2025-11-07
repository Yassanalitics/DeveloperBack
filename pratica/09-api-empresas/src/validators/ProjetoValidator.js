const yup = require('yup');

const ProjetoSchema = yup.object().shape({
  titulo: yup.string().required('O titulo do Projeto é obrigatório').min(3, 'O titulo do Projeto deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição do Projeto é obrigatória').min(10, 'A descrição do Projeto deve ter pelo menos 10 caracteres'),
  dataInicio: yup.date().required('A data de incio do Projeto é obrigatória'),
  dataFim: yup.date().required('A data de final do Projeto é obrigatória')
})

async function validarProjeto(req, res, next) {
  try {
    await ProjetoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const ProjetoAtualizarSchema = yup.object().shape({
  titulo: yup.string().min(3, 'O titulo do Projeto deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(10, 'A descrição do Projeto deve ter pelo menos 10 caracteres'),
  dataIncio: yup.date().required('A data de incio do Projeto é obrigatória'),
  dataFim: yup.date().required('A data de final do Projeto é obrigatória')
  
})

async function validarProjetoAtualizacao(req, res, next) {
  try {
    await ProjetoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarProjeto, validarProjetoAtualizacao };