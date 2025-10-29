const yup = require('yup')

// Esquema de validação
const schemaNovaPessoa = yup.object().shape(
  {
    nome: yup.string().required("O campo nome é obrigatório"),
    cpf: yup.string().required("O campo cpf é obrigatório"),
    email: yup.string().email("E-mail inválido").required("O campo email é obrigatório"),
    dataNascimento: yup.date().required("O campo dataNascimento é obrigatório"),
    genero: yup.string().required("O campo genero é obrigatório"),
  }
)

// Middlewares de validação
async function validarNovaPessoa(req, res, next) {
  try {
    await schemaNovaPessoa.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// exportar os middlewares
module.exports = {
  validarNovaPessoa
}