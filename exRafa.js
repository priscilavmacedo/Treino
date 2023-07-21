//1- escreva uma funcao que recebe um numero como argumento que retorna verdadeiro se for par e falso se for impar.

function parouimpar(x) {
  if (x % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

let res = parouimpar(9877);
console.log(res);

//2 -Escreva uma função que recebe uma array de números e retorna a soma de todos os elémentos.

const matriz = [211, 223, 321, 432];

function soma(somando) {
  for (let i = 0; i < somando.length; i++) {
    console.log(somando[i]);
  }
}

console.log(soma(matriz));



//4 - Escreva uma função que recebe um array de números e retorna 
//outro array contendo apenas os números pares da matriz original.

let number = [0,1,2,3,4]
let number1 = []

function numerosPares (array){
     for(let index = 0; index <= array.length; index++){
          if( array[index] % 2 == 0){
              number1.push(array[index])
      }
    }
    return number1
 
}
console.log(numerosPares(number));


//Escreva uma função que recebe um array de números e retorna 
//outro array contendo apenas os números pares da matriz original.
// questao 4 - com filter

let pares = [8,9,10,11,12]

function filtro(array){
  let numeros = pares.filter(par => par % 2 == 0)
  console.log(numeros);
}
 filtro(pares)







//5. Escreva uma função que recebe uma string como argumento e retorna a mesma string invertida.

function invertida(teste) {
  let newArray = teste.split("");
  let newReverse = newArray.reverse();
  let newJoin = newReverse.join("");

  return newJoin;
  // EXEMPLO return teste.split("").reverse().join("")
}
console.log(invertida("yag o"));

//6- Escreva uma função que recebe um número como argumento e retorna 
//verdadeiro se o número for um número primo efalso caso contrario

function primo(numero) {
  let divisores = 0;
  for (let index = 0; index <= numero; index++) {
    if (numero % index == 0) {
      divisores++;
    }
  }
  if (divisores == 2) {
    return "numero é primo";
  } else {
    return "numero não é primo";
  }
}

console.log(primo(1));

// 7 -Escreva uma função que recebe uma array de strings e retorna a string mais longa presente na matriz

let arrayNames = ["priscila", "maria", "sonia", "isabelasss", "as"];
let newArray = [];

function Person(stringNames) {
  for (let index = 0; index < stringNames.length; index++) {
    newArray.push(stringNames[index].length);
  }

  let orderByNumber = newArray.sort((a, b) => a - b)
  let endNumber = orderByNumber.pop()


  for(let index = 0; index < arrayNames.length; index++) {
    if(arrayNames[index].length == endNumber) {
        return arrayNames[index]
    }
  }
}

console.log(Person(arrayNames));


// 8- Escreva uma função que recebe uma array de objetos com propriedades nome e idade e retorna à pessoa mais velha presente

let objetos = [

  {
    nome: "Andressa",
    idade: "18",
  },

  {
    nome: "Maria",
    idade: "20",
  },

  {
    nome: "Vanessa",
    idade: "25",
  },

  
  {
    nome: 'Bruna',
    idade: '80'
  }


 ]

 console.log(objetos.find(index => index.idade == "25"));
 
 function pessoax (propriedades){
  let novoObjeto = []
  for (let index = 0;index < propriedades.length ; index ++ ){
      novoObjeto.push(propriedades[index].idade)
     }

  let novaOrdem = novoObjeto.sort((a, b) => a - b)
  let OutraOrdem = novaOrdem.pop()

  let ordemSeg = propriedades.find(nome => nome.idade == OutraOrdem )
    return ordemSeg
         
    }
    
   
    console.log(pessoax(objetos));



// 9 - Escreva uma função que recebe um número como argumento e retorna o fatorial desse número.

//function(numero) 1 etapa construtiva
//return fatorial(numero) 2 etapa logica
let fun = 3
function retorna(number){ //3
  let result = 1
  for (let multiply = 1; multiply <= number ;multiply++){ // 1º=1 /2º=2 /3º=3 /4º=4 /5º=5
    result = result * multiply // 1º=1 /2º=2 /3º=6 /4º=24 /5º=120
  }
return result

}

console.log(retorna(8))

// ex de fatorial 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1


// n! = (n * (n-1) * (n-2)) // 3! = 3 * 2 * 1




// var fatorial = 5;

// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado = resultado * i;
// }
// console.log(resultado);



// 10 -Escreva uma função que recebe um array de números e retorna a media dos valores presentes no array. (soma dos elementos do array / tamanho do array)

let exemplo = [9,8,7,5,24,13]
let exemplo2 = [5,95,15,25]

function mediaDeValoresArray(array){
  let mediaValores = array.reduce((valor1,valor2) => valor1 + valor2) / array.length
     return mediaValores 
}

console.log(mediaDeValoresArray(exemplo));


//3-Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes
//nessa string


function word (string){
   return string.split('')
  } 

console.log(word('qualquer')); 



//escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes
//nessa string

function word (string){
  return string.length
 } 

console.log(word('love')); 

