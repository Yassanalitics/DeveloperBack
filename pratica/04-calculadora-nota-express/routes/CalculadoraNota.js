// importar o express
const express = require('express')
// criar um router(Roteador)
const router = express.Router()

// Mapeamento das rotas e implemento a lógica
// Calcula a nota do A1
router.get('/notaA1', (req, res, next) => {
  const exercicio = parseFloat(req.query.exercicio)
  const trabalho = parseFloat(req.query.trabalho)
  const prova = parseFloat(req.query.prova)

  // validar se os parametros existem
  if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
    return res.status(400).json({ erro: "Notas inválidas!!!" })
  }

  // validar se as notas estão no intervalo correto
  if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6) {
    return res.status(400).json({ erro: "Notas fora do intervalo" })
  }

  const notaA1 = exercicio + trabalho + prova

  res.json({ notaA1 })
})

// Calcula a nota do A2


// Calcula a média final (A1 40% - A2 60%)
