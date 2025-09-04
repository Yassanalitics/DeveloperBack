//importar o express
const express = require('express')

// criar uma instância (express) da minha aplicação
const app = express()
// variavel que guarda o numero da porta de alocação da aplicação
const porta = 3000

//(Intermediários) Middlewares 
app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
  })
  
  // metodo e a rota
  // req -> dados da requisição
  // res -> manipulador da resposta
  // next -> chamador do proximo middleware
  app.get('/teste', (req, res, next) => {
    res.send("TESTE TESTANDO 123!!!")
  })
  
  app.get('/pessoas', (req, res, next) => {
    const pessoas = [
      {
        id: 1,
        nome: "João",
        idade: "20"
      },
      {
        id: 2,
        nome: "Pedro",
        idade: "22"
      },
    ]
    res.json(pessoas)
  })
  
  // Executa a aplicação escolhendo a porta
  app.listen(porta, () => {
    // imprimo uma mensagem pra confirmar que a aplicação está funcionando (rodando na porta escolhida)
    console.log("Aplicação rodando em http://localhost:3000")
  })