let resposta = document.getElementsByClassName('resposta')[0]
let numero = document.getElementById('numero')
let btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', fatorial)

function fatorial() {
    let num = Number(numero.value)
    
    if(num <= 21){
        resposta.innerHTML = (`<p>Calculando ${num}!</p>`)
        var resultado = num;
        var primeiroMultipicador = num;
        for (var i = primeiroMultipicador; i > 0; i--) {
            resultado *= i;
            resposta.innerHTML+=(` ${i} x`)
        }
        resposta.innerHTML+=(` = ${resultado}`)
    }else {
        window.alert('SOMENTE NUMEROS MENORES OU IGUAIS A 21')
    }
    
}
