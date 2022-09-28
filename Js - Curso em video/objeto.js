let amigo = {nome: 'Gabriel',
 sexo: 'M',
 peso:98.1,
 engordar(p=0){
    this.peso += p
    console.log('Engordou')
 }
}



console.log(`${amigo.nome} tem o peso ${amigo.peso}kg`)