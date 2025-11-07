const yup = require('yup');

const TarefaSchema = yup.object().shape({
  nome: yup.string().required('O nome da Tarefa é obrigatório').min(3, 'O nome da Tarefa deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição da Tarefa é obrigatória').min(10, 'A descrição da Tarefa deve ter pelo menos 10 caracteres'),
  dataInicio: yup.date().required('A data de incio da Tarefa é obrigatória'),
  dataFim: yup.date().required('A data de final da Tarefa é obrigatória')
})

async function validarTarefa(req, res, next) {
  try {
    await TarefaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const TarefaAtualizarSchema = yup.object().shape({
  nome: yup.string().min(3, 'O nome da Tarefa deve ter pelo menos 3 caracteres'),
  descricao: yup.string().min(10, 'A descrição da Tarefa deve ter pelo menos 10 caracteres'),
  dataIncio: yup.date().required('A data de incio da Tarefa é obrigatória'),
  dataFim: yup.date().required('A data de final da Tarefa é obrigatória')
  
})

async function validarTarefaAtualizacao(req, res, next) {
  try {
    await TarefaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarTarefa, validarTarefaAtualizacao };