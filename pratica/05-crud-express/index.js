
// importa o express e cors
const express = require('express')
const cors = require('cors')

// crio uma instância da aplicação
const app = express()

// intermediários
// habilita o cors nas requisições
app.use(cors()) 
// habilita receber json no corpo da requisição
app.use(express.json())

// roteadores (intermediário do tipo Router)
const contatosRouter = require('./routes/Contatos')
app.use(contatosRouter)

// executar a aplicação
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})
