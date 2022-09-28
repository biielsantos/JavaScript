function contar() {
  var comeco = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var pular = document.getElementById("pulo");
  var res = document.getElementById("res");

  if (
    comeco.value.length == 0 ||
    fim.value.length == 0 ||
    pular.value.length == 0
  ) {
    window.alert("dando erro");
  } else {
    res.innerHTML = "Contando: ";
    var c = Number(comeco.value);
    var f = Number(fim.value);
    var p = Number(pular.value);

    if (c < f) {
        //Contagem crescente
      for (let i = c; i <= f; i += p) {
        res.innerHTML += `${i} \u{1F449}`;
      }
    } else {
        //Contagem regressiva
      for (let i = c; i >= f; i -= p) {
        res.innerHTML += `${i} \u{1F449}`;
      }
      
    }
    res.innerHTML += `\u{1F92F}`;
  }
}
