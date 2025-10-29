const yup = require('yup')

// Esquema de validação
const schemaNovoLivro = yup.object().shape(
  {
    titulo: yup.string().required("O campo titulo é obrigatório"),
    autor: yup.string().required("O campo autor é obrigatório"),
    editora: yup.string().required("O campo editora é obrigatório"),
    ano: yup.number().integer().positive().required("O campo Data é obrigatório"),
    preco: yup.number().positive().required("O campo preço é obrigatório"),
  }
)

// Middlewares de validação
async function validarNovoLivro
(req, res, next) {
  try {
    await schemaNovoLivro
    .validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// exportar os middlewares
module.exports = {
  validarNovoLivro

}