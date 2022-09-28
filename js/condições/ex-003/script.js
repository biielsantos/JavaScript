let resposta = document.getElementsByClassName('resposta')[0]

function maior() {
    let num1 = window.prompt('Digite aqui um valor: ')
    let num2 = window.prompt('Digite aqui um valor: ')
    let valor1 = Number(num1)
    let valor2 = Number(num2)

    let lista = [valor1, valor2]
    let maior = 0

    for(let index = 0; index < lista.length; index++){
        if(lista[index] > maior){
            maior = lista[index]
        }
    }

    resposta.innerHTML = (`O maior valor entre ${valor1} e ${valor2} é ${maior}`)
}