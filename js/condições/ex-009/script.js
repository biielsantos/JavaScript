let resposta = document.getElementsByClassName('resposta')[0]


function calculo() {
    let numero1 = window.prompt('Digite aqui um numero')
    let numero2 = window.prompt('Digite aqui outro numero')
    let num1 = Number(numero1)
    let num2 = Number(numero2)

    let calcular = window.prompt(`Valores informados: ${num1} e ${num2}.\n O que vamos fazer?\n [1] Somar \n [2] Subtrair\n [3] Multiplicar\n [4] Dividir`)

    if(calcular == 1){
        let conta = num1 + num2
        resposta.innerHTML = (`${num1} + ${num2} = ${conta}`)
    }else if (calcular == 2){
        let conta = num1 - num2
        resposta.innerHTML = (`${num1} - ${num2} = ${conta}`)
    }else if (calcular == 3){
        let conta = num1 * num2
        resposta.innerHTML = (`${num1} X ${num2} = ${conta}`)
    }else if (calcular == 4){
        let conta = num1 / num2
        resposta.innerHTML = (`${num1} / ${num2} = ${conta}`)
    }else {
        resposta.innerHTML = (`OPÇÃO INVALIDA, NÃO SEI O QUE FAZER COM ESSES NUMEROS (${num1}, ${num2})`)
    }
}