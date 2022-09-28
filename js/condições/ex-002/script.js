let resposta = document.getElementsByClassName('resposta')[0]

function iniciar() {
    let valor = window.prompt('Digite um valor aqui: ')
    let num = Number(valor)

    if(num%2 == 0){            //Por que o resto da divisao por dois mostra numeros impares
        resposta.innerHTML = (`O numero digitado ${num} é <strong>PAR</strong>`)
    }else{
        resposta.innerHTML = (`O numero digitado ${num} é <strong>Impar</strong>`)
    }
}