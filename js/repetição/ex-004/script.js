let resposta = document.getElementsByClassName('resposta')[0]
let num = 1
function contar() {
    resposta.innerHTML += ('<p>Contagem: </p>')
    for(let i = 10; i >= num; i--){
        resposta.innerHTML += (` ${i} \u{1F449}`)
    }
    resposta.innerHTML += (`\u{1F44A}`)
}