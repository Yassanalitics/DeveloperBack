//Inicializar
const express = require("express")
const app = express()

//configurar e mapear intermediarios
const cors = require('cors')
app.use(cors()) //Habilita no cors no browser
app.use(express.json()) //receber JSON no body da requisição

//Mapeando routes 
const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)



//executar aplicação
app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})