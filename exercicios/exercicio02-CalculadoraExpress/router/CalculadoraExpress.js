const express = require('express')
const router = express.Router()

//Implementando a lógica
//Adição
router.get('/adicao', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)

    //Validação
if (isNaN(numero1)|| isNaN(numero2)){
    return res.status(400).json({erro:"Números inválidos"})
}    
const adicao = numero1 + numero2

res.json({adicao})
})
//Subtração
router.get('/subtracao', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)

    //Validação
if (isNaN(numero1)|| isNaN(numero2)){
    return res.status(400).json({erro:"Números inválidos"})
}    
const subtracao = numero1 - numero2

res.json({subtracao})
})
//Multiplicação
router.get('/multiplicacao', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)

    //Validação
if (isNaN(numero1)|| isNaN(numero2)){
    return res.status(400).json({erro:"Números inválidos"})
}    
const multiplicacao = numero1 * numero2

res.json({multiplicacao})
})
//Divisão
router.get('/divisao', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)

    //Validação
if (isNaN(numero1)|| isNaN(numero2)){
    return res.status(400).json({erro:"Números inválidos"})
}   
if( numero2 === 0){
    return res.status(400).json({erro:"Divisão por zero não é permitida"})
}
  
const divisao = numero1 / numero2

res.json({divisao})
})
//aoQuadrado
router.get('/aoQuadrado', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)
//Validação
if (isNaN(numero1)){
    return res.status(400).json({erro:"Número inválido"})
}    
const aoQuadrado = numero1 * numero1

res.json({aoQuadrado})
})
//raizQuadrada
router.get('/raizQuadrada', (req, res) =>{
    const numero1 = parseFloat(req.query.numero1)

    //Validação
if (isNaN(numero1)){
    return res.status(400).json({erro:"Número inválido"})
}    
if (numero1 < 0){
    return res.status(400).json({erro:"Número negativo"})
}   
const raizQuadrada = Math.sqrt(numero1)

res.json({raizQuadrada})
})
module.exports = router