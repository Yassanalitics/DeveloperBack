const { default: mongoose } = require('mongoose');
const yup = require('yup');

const funcionarioSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O CPF é obrigatório'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  telefone: yup.string().required('O telefone é obrigatório'),
  dataContratacao: yup.date().required('A data de contratação é obrigatória'),
  dataNascimento: yup.date().required('A data de nascimento é obrigatória'),
  genero: yup.string().required('O gênero é obrigatório'),
  endereco: yup.object().shape({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string(),
  }),
  cargo: yup.string()
    .required('O cargo é obrigatório')
    .test(
      'idValidator',
      'ID de cargo inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
  departamento: yup.string()
    .required('O departamento é obrigatório')
    .test(
      'idValidator',
      'ID de departamento inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarFuncionario(req, res, next) {
  try {
    await funcionarioSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const funcionarioSchemaAtualizacao = yup.object().shape({
  nome: yup.string(),
  cpf: yup.string(),
  email: yup.string().email('Email inválido'),
  telefone: yup.string(),
  dataContratacao: yup.date(),
  dataNascimento: yup.date(),
  genero: yup.string(),
  endereco: yup.object().shape({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string(),
  }),
  cargo: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de cargo inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
  departamento: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de departamento inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoFuncionario(req, res, next) {
  try {
    await funcionarioSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarFuncionario,
  validarAtualizacaoFuncionario,
};
