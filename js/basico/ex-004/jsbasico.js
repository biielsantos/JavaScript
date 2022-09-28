


function inicio() {
    let res = document.getElementsByClassName('res')[0]
    let nome = window.prompt('Qual seu nome? ')

    res.innerHTML = (`<p>Olá <strong>${nome}</strong>! É um prazer te conhecer 🖖</p>`)

}