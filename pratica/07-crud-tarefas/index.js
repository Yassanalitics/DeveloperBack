const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://Yas_Db123:Yas_3456Db@cluster0.n9daxyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log("conectado ao mongo db")
})
.catch(err =>{
    console.log("erro ao conectar no banco MongoDB", err)
})



app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})