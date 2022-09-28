let resposta = document.getElementsByClassName('resposta')[0]
let primavera = ["janeiro", "fevereiro", "março"]
let verão = ["abril", "maio", "junho"]
let outono = ["julho", "agosto", "setembro"]
let inverno = ["outubro", "novembro", "dezembro"]

let lista = {primavera:["janeiro", "fevereiro", "março"], verão:["abril", "maio", "junho"], outono:["julho", "agosto", "setembro"], inverno:["outubro", "novembro", "dezembro"]}

function leitor() {

let mesusuario = window.prompt('Digite aqui o NOME do mês: ')

mesusuario.toLowerCase
let objeto = Object.keys(lista)

for (let estacao in lista) {
    for(let mes in lista[estacao]){
        if(mesusuario == lista[estacao] [mes]) {
            resposta.innerHTML = (`No mes de ${mesusuario}, É estação de ${estacao}`)
        }
    }
}

}