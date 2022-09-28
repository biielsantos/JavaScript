function tabuada() {
var inputnum = document.getElementById('idnumber')
var res = document.getElementById('res')

  if(inputnum.value.length == 0){
    window.alert('Por favor, coloque um numero !')
  } else {
    var num = Number(inputnum.value)
    
    for( var multi = 1; multi <= 10; multi++){
      var resposta = num * multi
      res.options[res.options.length] = new Option (`${num} X ${multi} = ${resposta}`)
    }

  }
}
