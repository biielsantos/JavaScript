let resposta = document.getElementsByClassName('resposta')[0]
let aleatorio = Math.floor(Math.random() * (100 + 1))

function adivinha() {
    
    let usuario = window.prompt('Tente um numero de 1 a 100: ')


    if(usuario > aleatorio){
        resposta.innerHTML += (`<p>Você falou ${usuario}, meu numero é <strong>MENOR</strong></p>`)
    }else if(usuario < aleatorio) {
        resposta.innerHTML += (`<p>Você falou ${usuario}, meu numero é <strong>MAIOR</strong></p>`)
    }else{
        resposta.innerHTML += (`<p>PARABENS O VALOR SORTEADO É ${usuario}</p>`)
    }
}