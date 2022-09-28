let idnumber = document.getElementById("idnumber");
let idlista = document.getElementById("idlista")
let res = document.getElementById("res");
let lista = []

function eNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false //Retorna -1
    }

}

function tanaLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function addlista() {
    if(eNumero(idnumber.value) && !tanaLista(idnumber.value, lista)){
        lista.push(Number(idnumber.value))
        let item = document.createElement('option')
        item.text = `Valor ${idnumber.value} adicionado`
        idlista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor invalido ou esta dentro da lista')
    }
    idnumber.value = ''
    idnumber.focus()
}


function finalizar() { 
    if (lista == 0){
        window.alert('Adicione valores primeiro')
    } else{
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        
        for(let posicao in lista) {
            soma += lista[posicao]
            if(lista[posicao] > maior){
                maior = lista[posicao]
            }
            else if(lista[posicao] < menor) {
                menor = lista[posicao]
            }
        }
        media = soma / total
        res.innerHTML += (`<p>Numero total de componentes: ${total}</p>`)
        res.innerHTML += (`<p>Maior numero informado: ${maior}</p>`)
        res.innerHTML += (`<p>Menor numero informado: ${menor}</p>`)
        res.innerHTML += (`<p>A soma dos valores: ${soma}</p>`)
        res.innerHTML += (`<p>A media dos valores: ${media}</p>`)
    }
 }