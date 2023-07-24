


// 1- Crie uma variavel, atribua valor a ela e depois verifique se o valor dela é maior do que 6.


    let a = 6
    let b = 10

    if ( a > b ){
        console.log('se a é maior que b');
    } else {
        console.log('é menor');
    }



// 2- Crie duas variaveis, atribua valores para elas e em seguida faça uma função que pegue o valor dessas variaveis e retorne o valor da divisão das duas.

var c = 10
var d = 2 

function dividir (){
    return console.log(10/2);

}

    dividir(5,7)



// 3- Crie uma variavel que receba os valores de um array, em seguida crie um for que retorne todos os elementos desse array.

    var array = [1,2,3,4]

        console.log(array)
        for(let index = 0; index < array; index++){
            console.log(`${index}`);
            }
          
        
    
// 4- Crie uma variavel que receba os valores de um array, em seguida crie um for que multiplique cada elemento do array por 2.

    const valores = [ 3,5,6,8]

    function multiplique (){
        for (let index = 0; index < valores.length; index ++){
        }
        return multiplique * 2 
    }
    
    console.log(multiplique([3,5,6,8]));  
    

// 5- Crie uma variavel que receba o valor de uma string, em seguida crie um for que retorne cada elemento dessa string.


// 6- Crie uma variavel, em seguida compare o valor dela utilizando o while (valor a ser comparado 20). Se o valor for menor ou igual a 20, retorne todos os valores.

// 7- Crie uma variavel, em seguida compare o valor dela utilizando o while (valor a ser comparado 20). Se o valor for menor ou igual a 20, retorne o triplo de todos os valores.

// 8- Imprima os numeros pares de 1 a 20 utilizando o while.

// 9- Crie uma função chamada maiorNumero que recebe dois números como parâmetros e retorna o maior entre eles.

// 10- Crie uma função chamada Par que recebe um número como parâmetro e retorna true se ele for par, ou false caso contrário.

// 11- Crie uma função chamada verificarIdade que recebe um parâmetro chamado idade e verifica se a pessoa é maior de idade. Se a idade for maior ou igual a 18, a função deve retornar a mensagem "Maior de idade". Caso contrário, deve retornar a mensagem "Menor de idade".

// 12- Crie uma função chamada calcularMaior que recebe dois parâmetros numéricos, num1 e num2, e retorna o maior entre eles. 
//Utilize uma estrutura condicional para realizar a comparação.

var num1 = 25
var num2 = 55

// function calcularMaior (num1 < num2 ){
//     if ( se num1 é menor que num2){

//     }else {

//     }
// }






// 13- Crie uma função de flecha chamada dobro que recebe um número como parâmetro e retorna o dobro desse número.


var x = 5
let dobro = (x) => {
    return x *2
}
console.log(dobro(5));




// 14- Crie uma função de flecha chamada soma que recebe dois números como parâmetros e retorna a soma desses números.

    var pa = 10
    var pi = 15
    
    const soma = (pa,pi) => {
        return pa + pi
    }
    
    console.log(soma(10,15));
