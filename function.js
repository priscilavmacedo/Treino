// | Exercício 01: ||

// Escreva a função multiplicar que receba dois parâmetros, multiplique-os e retorne o resultado da multiplicação.
    function multiplicar(a,b){
        return a*b
    }  
console.log(multiplicar(2,5));

// Exercício 02: ||
// Agora pedimos que você declare uma função chamada triploDaSoma() que recebe dois parâmetros. Então você tem que adicionar ambos e retornar 
// três vezes o valor do resultado da soma dos dois parâmetros . Será preciso declarar a função triplo, 
// que recebe um parâmetro e retorna o valor dele multiplicado por três.

function triploDaSoma(c,d){
    return 3*(c+d)
}

console.log(triploDaSoma(2,3));


// Exercício 03: ||
// Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro.
// Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. 
// Lembre-se de usar o valor de 3.14 no lugar do π . perimetro = π * raio * 2; area = π * raio * raio; 

//C = 2 * π * r, onde:

function perimetro (raio){
    let π = 3.14
        return 2*π*raio
    
}
console.log(perimetro(3));


// | Exercício 04: ||
// Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e retorna uma única string como resultado.

function escreverCartao(titulo,nome,sobrenome){
    let resultado = titulo+ "," +nome+ "," +sobrenome
        return resultado

    }

console.log(escreverCartao('museu','carla','sandes'));


// | Exercício 05: ||

// Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente usando Math.random ().

function gerarProbabilidade(){
    return Math.floor(Math.random()*100) + "%"

}

console.log(gerarProbabilidade());