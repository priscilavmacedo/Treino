//Exercicio 1: complete a função quantidaDeMesesComLucro:

let investimento = [200, 100, 800, 50, 30, 100, 100, 200, 300, 100, 110, 120];
let rendimento = [300, 100, 800, 50, 30, 100, 100, 200, 300, 100, 110, 120];

function quantidaDeMesesComLucro(investimento, rendimento) {
  let resultado = [];
  for (mes = 0; mes < investimento.length; mes++) {
    let lucro = rendimento[mes] - investimento[mes];
    resultado.push(lucro);
  }
  return resultado
}

console.log(quantidaDeMesesComLucro(investimento,rendimento));


// Exercício 01: 

// Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.

let i = "azul"
function imprimirAzul4(mostrar){
  
  for (index = 0; index < 4; index++) {
  console.log(mostrar);
    

  }
}

imprimirAzul4(i);

// Exercício 02: ||

// Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.

function imprimir5vezes5(){
  for(i = 0;i <= 4;i++){
    console.log("piu");
  }
}
imprimir5vezes5()

// || Exercício 03: ||

// Escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i.

function passoAPasso(imprime){
  for(i = 0;i <= 4; i++){
console.log(i);
  }
}

passoAPasso(i)

// | Exercício 04: ||

// Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.

function passandoPelosPares(){
  
  for(i = 0 ;i <= 6 ;i++){
    let x = 2
    if(x % 2 == 0)
    console.log(i*x);

  }
}

passandoPelosPares()


// Exercício 05: ||

// Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.
let resultado = 0
function somar5MoedasDe25Centavos(){
for ( i = 0 ;i < 5 ;i++ ){
  resultado = resultado +0.25
  
}
return resultado
}
console.log(somar5MoedasDe25Centavos());



// | Exercício 06: ||

// Escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.


function somarMoedasDe25(quantidadeDeMoedas){
  let soma = 0
  quantidadeDeMoedas = quantidadeDeMoedas + soma
  for(i=0; i < 4 ;i++){
    

  }
return quantidadeDeMoedas

}
console.log (somarMoedasDe25(0.25+4))

//qual a diferença do return dentro e fora do for?


// | Exercício 07: ||

// Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. 

// Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X

//criar uma variavel fora


function somaDosPares(X){
  let soma = 0
  for (let index = 0; index < X.length ; index++) {
      if ( x [index] % 2 == 0){
        soma = soma + index
      }
      return soma
     }
}
console.log(somaDosPares(2));



// Exercício 08: ||

// Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele.


// Exercício 09: ||

// Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne 
// a quantidade de calorias que será consumida.













