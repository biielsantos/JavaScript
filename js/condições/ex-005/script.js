let resposta = document.getElementsByClassName('resposta')[0]
let arrsemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

function data() { 
    const data = new Date();
    const dia = String(data.getDate())
    const mes = String(data.getMonth() + 1)
    const ano = String(data.getFullYear())
    const semana = arrsemana[data.getDay()]
    const hora = String(data.getHours())
    const minutos = String(data.getMinutes())
    const segundos = String(data.getSeconds())


    resposta.innerHTML = (`<p>Dia: ${dia}</p>`)
    resposta.innerHTML += (`<p>Mês: ${mes}</p>`)
    resposta.innerHTML += (`<p>Ano: ${ano}</p>`)
    resposta.innerHTML += (`<p>Dia da semana: ${semana}</p>`)
    resposta.innerHTML += (`<p>Hora: ${hora}</p>`)
    resposta.innerHTML += (`<p>Minutos: ${minutos}</p>`)
    resposta.innerHTML += (`<p>Segundos: ${segundos}</p>`)

}