let resposta = document.getElementsByClassName('resposta')[0]

function idade() { 
    const data = new Date
    let nascimento = window.prompt('Digite aqui o seu ano de nascimento')
    const anoatual = data.getFullYear()

    let idade =  anoatual - nascimento 

    resposta.innerHTML = (`voce vai fazer ${idade} anos no ano de ${anoatual}`)
}