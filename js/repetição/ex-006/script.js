let resposta = document.getElementsByClassName('resposta')[0]
let btn = document.getElementsByClassName('btn')[0]
let inicial = document.getElementById('valorinicial')
let final = document.getElementById('valorfinal')

btn.addEventListener('click', conta)

function conta() {
    let inicialnum = Number(inicial.value)
    let finalnum = Number(final.value)
    resposta.innerHTML += (`<p>Contando de ${inicialnum} até ${finalnum}</p>`)
    for(let i = inicialnum; i <= finalnum; i++) {
        resposta.innerHTML += (` ${i} \u{1F449}`)
    }   
    resposta.innerHTML += (`\u{1F44A}`)
}

