let resposta = document.getElementsByClassName('resposta')[0]

function entrar() { 
    let button = document.getElementsByClassName('btncalculo')[0]
    button.style.background = '#d17777'
 }

function calculo() { 
   let num = window.prompt('Digite aqui o numero: ')
   let numero = Number(num)

      var absoluto = Math.abs(numero)
      var inteiro = parseInt(numero)
      var inteiroprox = Math.round(numero)
      var raizquadrada = Math.sqrt(numero)
      var raizcubica = Math.cbrt(numero)
      var quadrado = numero ** 2
      var cubo = numero ** 3

      resposta.innerHTML = (`<hr><p>O numero a ser analisado aqui será ${numero}</p> <hr>`)
      resposta.innerHTML +=(`<p>O seu valor Absoluto é ${absoluto}</p>`)
      resposta.innerHTML +=(`<p>A sua parte Inteira é ${inteiro}</p>`)
      resposta.innerHTML +=(`<p>O valor inteiro mais proximo é ${inteiroprox}</p>`)
      resposta.innerHTML +=(`<p>A sua raiz quadrada é ${raizquadrada}</p>`)
      resposta.innerHTML +=(`<p>A sua raiz cubica é ${raizcubica}</p>`)
      resposta.innerHTML +=(`<p>O valor de ${numero}ao quadrado é ${quadrado}</p>`)
      resposta.innerHTML +=(`<p>O valor de ${numero} ao cubo é ${cubo}</p>`)

   
 }