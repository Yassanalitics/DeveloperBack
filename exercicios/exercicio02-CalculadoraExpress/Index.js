//iniciamos 
const express = require('express')
const app = express()
//importa o router da calculadora 
const CalculadoraRouter = require('./router/CalculadoraExpress')
app.use('/calculadora', CalculadoraRouter)


//executa a aplicação 
app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})