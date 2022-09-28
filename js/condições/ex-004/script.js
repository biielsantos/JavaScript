let resposta = document.getElementsByClassName('resposta')[0]

function show() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    
   
    resposta.innerHTML = (`o que eu recebi do sistema foi ${today}`)
}