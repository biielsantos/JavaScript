let resposta = document.getElementsByClassName('resposta')[0]

function media() {
    let nome = window.prompt('Digite aqui o nome do aluno: ')
    let valor1 = window.prompt(`Digite aqui a primeira nota de ${nome}`)
    let valor2 = window.prompt(`Digite aqui a segunda nota de ${nome}, alem de ${valor1}`)

    nota1 = Number(valor1)
    nota2 = Number(valor2)

    let media = (nota1+nota2)/2

    
    resposta.innerHTML = (`<p>Calculando a média final de ${nome}</p>`)
    resposta.innerHTML += (`<p>As notas obtidas foram de ${nota1} e ${nota2}</p>`)
    resposta.innerHTML += (`<p>A média final será ${media}</p>`)
    if(media >= 60){
        resposta.innerHTML += (`<p>A mensagem que temos é: <strong>Parabéns! vc passou</strong></p>`)
    }else{
        resposta.innerHTML += (`<p>A mensagem que temos é: <strong>Precisa estudar mais jovem gafanhoto! Reprovado</strong></p>`)
    }
    
}