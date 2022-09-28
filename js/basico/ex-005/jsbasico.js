
let res = document.getElementsByClassName('res')[0]


function calcular() {  
    let num = window.prompt('Digite o numero: ')
    if(num.length == 0){
       window.alert('Por favor digite um numero')
    }else {
        let numero = Number(num)
    res.innerHTML = (`<p>O dobro de ${numero} é ${numero*2} e a metade é ${numero/2}</p>`)
    }
    
    
}