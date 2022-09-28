function clicar() { 
    let nome = window.prompt('Qual seu nome? ')

 while(nome.length == 0){                       //Verifica se o prompt vem com valor
        window.alert('Por favor digite um nome')
        nome = window.prompt('Qual seu nome? ')
    }
        window.alert(`Olá ${nome} seja muito bem vindo`)
    
 }