//inicia o express
const express = require('express')
//cria uma instancia
const app = express()

//middlewares
app.use((req, res, next)=> {
    console.log("--------------#######------------")
    console.log("tempo: ", new Date().toLocaleString())
    console.log("Método: ", req.method)
    console.log("Rota: ", req.url)
    next()
})
//mapeando a rota 
app.get('/nome', (req, res, next ) => {
    //capturar informação do usuario 
    //vao vir atravez dos parametros da requisição (query params)
   const PrimeiroNome =  req.query.PrimeiroNome
   const SegundoNome =  req.query.SegundoNome
    res.send("Funcionou!!")
    res.send("Olá " + primeiroNome + " " + sobreNome + "!!!") 
})

// Importando o router calculadora de nota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
// Toda requisição que chegar na rota /calculadora vai para o router
app.use('/calculadora', calculadoraNotaRouter)


//executa a aplicação 
app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})