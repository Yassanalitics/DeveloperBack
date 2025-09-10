//inicia o express
const express = require('express')
//cria uma instancia
const app = express()

//importar o lib cors
const cors = require('cors')
//desabilita a configuração de cors 
app.use(cors())
//habilita o browser para mandar requisição para o seu backend local

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
   const SobreNome =  req.query.SegundoNome
    res.send("Funcionou!!")
    res.send("Olá " + PrimeiroNome + " " + SobreNome + "!!!") 
})

// Importando o router calculadora de nota
const calculadoraNotaRouter = require('./routes/calculadoraNota')
// Toda requisição que chegar na rota /calculadora vai para o router
app.use('/calculadora', calculadoraNotaRouter)


//executa a aplicação 
app.listen(3000, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})