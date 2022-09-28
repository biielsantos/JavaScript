function carregar() {  

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('idfoto')

var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
var milisegundo = data.getMilliseconds()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos ${segundo} segundos ${milisegundo} milisegundos`

if (hora >= 6 && hora < 12){
    // Bom dia
    img.src = 'img/manha.png'
    document.body.style.background = "#A460ED"
    window.setTimeout(10)
} else if (hora >= 12 && hora < 18){
    // Boa tarde
    img.src = 'img/tarde.png'
    document.body.style.background = "#FEB139"
}else {
    // Boa noite
    img.src = 'img/noite.png'
    document.body.style.background = "#16213E"
}
}