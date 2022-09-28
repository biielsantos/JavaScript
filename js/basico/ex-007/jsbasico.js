let resposta = document.getElementsByClassName('resposta')[0]
function media() { 
    let nome = window.prompt('Digite o nome do aluno: ')
    let nota1 = window.prompt(`Digite a primeira nota do aluno ${nome}: `)
    let nota2 = window.prompt(`Digite a segunda nota do aluno ${nome} alem da nota ${nota1}: `)
    let resultado1 = Number(nota1)
    let resultado2 = Number(nota2)
    let media = (resultado1+resultado2)/2

    resposta.innerHTML = (`<p>Calculando a média final de ${nome}</p>`)
    resposta.innerHTML += (`<p>As notas obtidas foram ${resultado1} e ${resultado2}</p>`)
    resposta.innerHTML += (`<p>a média final sera ${media}</p>`)
 }