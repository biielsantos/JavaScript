let resposta = document.getElementsByClassName('resposta')[0]
let num = 0

function clique() { 
    atualizar(num++)
 }

 function reset() {
    num = 0
    resposta.innerHTML = (`O contador está com ${num} cliques`)
  }

  function atualizar() { 
    resposta.innerHTML = (`O contador está com ${num} cliques`)
   }