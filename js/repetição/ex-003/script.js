let resposta = document.getElementsByClassName('resposta')[0]

let num = 10
function mostrar() {
    resposta.innerHTML += (`<p>Contando...</p>`)
    for(let i = 1; i <= num; i++){
        if(i % 2 == 0) {
            resposta.innerHTML += (` ${i} \u{1F449}`)
        }
        
    }
    resposta.innerHTML += (`\u{1F44A}`)
}