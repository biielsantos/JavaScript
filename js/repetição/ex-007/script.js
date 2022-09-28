let resposta = document.getElementsByClassName('resposta')[0]
let numero = document.getElementById('numero')
let btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click', tabuada)



function tabuada() {
    let num = Number(numero.value)

    resposta.innerHTML = (`<p>Tabuada do ${num}</p>`)
    for(let i = 1; i <= 10; i++){
        let resultado = i*num
        resposta.innerHTML += (`<p>${num} x ${i} = <strong>${resultado}</strong></p>`)
    }
}
