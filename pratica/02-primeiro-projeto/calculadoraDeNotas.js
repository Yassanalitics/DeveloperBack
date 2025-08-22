//40% da nota
function calcularNotaA1(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
}

//60% da nota 
function calcularNotaA2(exercicios, trabalho, prova ){
    return exercicios + trabalho + prova
}

// nota final notaa1 * 0,4 + notaa2 * 0,6
function calculodaNotaFinal (notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6)
}

//exportar essas funções para srem utilizdas no index
module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    calculodaNotaFinal
}