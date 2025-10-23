const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())


const DB_HOST=process.env.DB_HOST
const DB_USER=process.env.DB_USER
const DB_PASS=process.env.DB_PASS
const DB_NAME=process.env.DB_NAME 
const url =`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
.then(() =>{
    console.log("conectado ao mongo db")
})
.catch(err =>{
    console.log("erro ao conectar no banco MongoDB", err)
})
//controladores e rotas 
const PessoaController = require('./controllers/PessoaController')
app.use(PessoaController)

app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})