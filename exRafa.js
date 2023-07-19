//escreva uma funcao que recebe um numero como argumento que retorna verdadeiro se for par e falso se for impar.

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

//3-Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes
//nessa string

//4 - Escreva uma função que recebe uma matriz de números e retorna outra matriz contendo apenas os números pares da matriz original.

//5. Escreva uma função que recebe uma string como argumento e retorna a mesma string invertida.

function invertida(teste) {
  let newArray = teste.split("");
  let newReverse = newArray.reverse();
  let newJoin = newReverse.join("");

  return newJoin;
}
console.log(invertida("iloveu"));

//6- Escreva uma função que recebe um número como argumento e retorna verdadeiro se o número for um número primo e
//falso caso contrario

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





// 8- Escreva uma função que recebe uma matriz de objetos com propriedades nome e idade e retorna à pessoa mais velha presente

let objetos = [
  {
    nome: "andressa",
    idade: "18",
  },

  {
    nome: "maria",
    idade: "20",
  },

  {
    nome: "vanessa",
    idade: "25",
  },
];

//
// 9 - Escreva uma função que recebe um número como argumento e retorna o fatorial desse número.

// ex de fatorial 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1

function fatorial(num) {
}
    var result = fatorial
    for (var i = 1; i < fatorial; i++) {
    result = num * i;
}
  return result 
console.log(fatorial(5));
fatorial(5);



// n = n*(n-1) * (n-2)

// var fatorial = 5;

// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);








// 10 -Escreva uma função que recebe uma matriz de números e retorna a media dos valores presentes na matriz.
