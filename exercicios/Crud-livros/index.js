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

const LivroModel = mongoose.model('livros', new mongoose.Schema(
    {
      nome: String,
      autor: String,
      editora: String,
      ano: Number,
      preco: Number
    }
  ))

   // Create
   app.post('/livros', async (req, res, next) => {
    const livro = req.body
    if (!livro.nome) {
      return res.status(400).json({ erro: "O campo nome é obrigatório!!!" })
    }
    const livroCriado = await LivroModel.create(livro)
    res.status(201).json(livroCriado)
  })
  
  // read
  app.get('/livros', async (req, res, next) => {
    const livros = await LivroModel.find()
    res.json(livros)
  })
  
  // UPDATE
  app.put('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    const livro = req.body
    if (!livro.nome) {
      return res.status(400).json({ erro: "O campo nome é obrigatório!!!" })
    }
  
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, { new: true })
  
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "livro não encontrado!!!" })
    }
    res.json(livroAtualizado)
  })
  
  // DELETE
  app.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.json({ mensagem: "livro excluido!!!" })
  })
  
app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})