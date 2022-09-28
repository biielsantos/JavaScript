let resposta = document.getElementsByClassName('resposta')[0]
let btn = document.getElementsByClassName('btn')[0]
let numero = document.getElementById('inputnumber')
btn.addEventListener('click', contar)

function contar() {
    let num = Number(numero.value)
    resposta.innerHTML += (`<p>Contando de 0 até ${num}</p>`)
    for(let i = 0; i <= num; i++){
        resposta.innerHTML += (` ${i} \u{1F449}`)
    }
    resposta.innerHTML += (`\u{1F44A}`)
}

