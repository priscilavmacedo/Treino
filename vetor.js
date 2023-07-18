const vetor = [ 1,2,3,4]

const soma = vetor .reduce((estado, item) => estado + item)

//vetor de objetos

let vetorx = [

{ nome: 'nome1', 'nota1': 5, nota2 : 4},
{nome: 'nome2', 'nota1': 4, nota2 : 3},

];

const estadoInicial = {
    somaNota1 : 0,
    somaNota2 : 0,
    qtNota1 : 0,
    qtNota2 : 0,
}

const result = vetor. reduce((estado, valor) => {
    return {
 

     somaNota1 : estado.somaNota1 + valor.nota1,
     somaNota2 : estado.somaNota2 + valor.nota2,
     qtNota1 : estado.qtNota1 + 1,
     qtNota2 : estado.qtNota2 + 1,
    }
}, estadoInicial)

// LAÇOS DE REPETIÇAO

/*var c=1
do { 
console.log(`passo${c}`)
c++
}while (c<=6)
*/


for (var c=1; c<=6; c++){
    console.log(c);
    }
    
    //while(condiçao){
    
    //}
    
    
    
    //do {
    
    //}while(condiçao)