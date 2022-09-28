


function somar() { 
    
    let resposta = document.getElementsByClassName('resposta')[0]
    let num1 = window.prompt('Digite um numero: ')
    let num2 = window.prompt('Digite outro numero: ')
    if(num1.length == 0){
        window.alert('Por favor digite um numero')
    }else{
        if(num2.length == 0){
            window.alert('Por favor digite um numero')
        }else{
            let numero1 = Number(num1)
            let numero2 = Number(num2)
            let soma = numero1+numero2
            resposta.innerHTML = (`<p>A soma de ${numero1} + ${numero2} foi ${soma}!</p>`)
        } 
    }
 }