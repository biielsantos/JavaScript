let resposta = document.getElementsByClassName('resposta')[0]

function gerar() {
    let aleatorio = Math.floor(Math.random() * (100 + 1))

    resposta.innerHTML += (`<p>Numero gerado ${aleatorio}</p>`)

}

function limpar() {
    resposta.innerHTML = ('')
}