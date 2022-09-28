function verificar() {  
    var data = new Date()
    var ano = data.getFullYear()
    var anousuario = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anousuario.value.length == 0 || anousuario.value > ano){
        alert('[ERRO MY FRIEND] COLOCA UMA DATA AI POXA')
    }else{
        var sexousuario = document.getElementsByName('radsexo')
        var idade = ano - Number(anousuario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexousuario[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src', 'img/m-crianca.jpg')
            }else if(idade >= 13 && idade <= 18){
                // Jovem
                img.setAttribute('src', 'img/m-jovem.jpg')
            }else if (idade >= 19 && idade <= 60){
                // Adulto
                img.setAttribute('src', 'img/m-adulto.jpg')
            }else {
                // Velho
                img.setAttribute('src', 'img/m-velho.jpg')
            }
        } else if(sexousuario[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src', 'img/f-crianca.jpg')
            }else if(idade < 18){
                // Jovem
                img.setAttribute('src', 'img/f-jovem.jpg')
            }else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'img/f-adulto.jpg')
            }else {
                // Velho
                img.setAttribute('src', 'img/f-velho.jpg')
            }
        }else if(sexousuario[2].checked){
            genero = 'Um Estranho'
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src', 'img/e-crianca.jpg')
            }else if(idade <= 18){
                // Jovem
                img.setAttribute('src', 'img/e-jovem.webp')
            }else if (idade <= 60){
                // Adulto
                img.setAttribute('src', 'img/e-adulto.jpg')
            }else {
                // Velho
                img.setAttribute('src', 'img/e-velho.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}