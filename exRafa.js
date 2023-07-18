
//escreva uma funcao que recebe um numero como argumento que retorna verdadeiro se for par e falso se for impar.

function parouimpar (x){
    if (x%2 == 0){
        return 'par'
    }else{
        return 'impar'
}
}

let res = parouimpar(9877)
console.log(res);


//2 -Escreva uma função que recebe uma array de números e retorna a soma de todos os elémentos.

     const matriz = [211,223,321,432 ];

     function soma  (somando){
        for (let i = 0; i < somando.length ; i++ ){
            console.log(somando[i]);

        }
    }
    
    console.log(soma(matriz));
    
      
//3-Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes
 //nessa string
    
//4 - Escreva uma função que recebe uma matriz de números e retorna outra matriz contendo apenas os números pares da matriz original.



//5. Escreva uma função que recebe uma string como argumento e retorna a mesma string invertida.

    function invertida (teste){
        let newArray = teste.split('')
        let newReverse = newArray.reverse()
        let newJoin = newReverse.join('')

        return newJoin

    }
      console.log(invertida('iloveu'))

      
//6- Escreva uma função que recebe um número como argumento e retorna verdadeiro se o número for um número primo e
//falso caso contrario


    function primo (numero){
        let divisores = 0
        for (let index = 0; index <= numero ; index++){
            if(numero % index==0) {
                divisores++
            }
        }
        if(divisores == 2){
            return "numero é primo"
        }
        else{
            return "numero não é primo"
        }
    }

    console.log(primo(1));
    


// 7 -Escreva uma função que recebe uma array de strings e retorna a string mais longa presente na matriz

    let nomes = [ 'priscila', 'maria', 'sonia', 'isabela']

    function pessoas (muitaStg){
        let grandeStg = muitaStg.sort.length()
        

        return grandeStg
    }

    console.log(pessoas(nomes))




// 8- Escreva uma função que recebe uma matriz de objetos com propriedades nome e idade e retorna à pessoa mais velha presente 
//
// 9 - Escreva uma função que recebe um número como argumento e retorna o fatonal desse número.
// 10 -Escreva uma função que recebe uma matriz de números e retorna a media dos valores presentes na matriz.

