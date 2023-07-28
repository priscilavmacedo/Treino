// Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se 
// diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".

let diaDaSemana = 'domingo'

 if( diaDaSemana == 'sabado' ){
    console.log('hoje é dia de futebol');
 } else {
    console.log('se não retorne falso');
 }


//  Exercício 02: ||

//  Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. 
// Esta função deve retornar "Hoje é dia de futebol" se o parâmetro for "domingo".
// Caso contrário, deve retornar "Hoje não é dia de futebol :(".
 
   
 function hojeSeJoga (string){
    if (string == 'domingo'){
        return 'Hoje é dia de futebol'
    } else {
        return 'Hoje não é dia de futebol'
    }

 }

 console.log(hojeSeJoga());


//  || Exercício 03: ||

// Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

function eMaior (x,y){
    if(x == undefined || y == undefined){
     return 'necessario colocar os valores de x e de y'   
    }
    else{
        if (x > y ){
            return x
        } else {
            return y
        }
    }
}
console.log(eMaior(9));

// Exercício 04: ||

// Podemos dizer que é um número da sorte se o número: 1-é positivo
//  2-é um múltiplo de 2 ou 3
//  3-não é 15

// Escreva a função eNumeroDaSorte que, recebendo um número, diz se é um número da sorte (true). Lembre-se de que o número deve 

// obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

function eNumeroDaSorte (numeral){
    let numeroDaSorte = (numeral > 0 && numeral % 2 == 0)? 'false' : 'true'                    

    return numeroDaSorte
}
console.log(eNumeroDaSorte(186));
console.log(eNumeroDaSorte(1));


var numero = 4 > 9 ? 'maior': 'menor'
console.log(numero);


//  operador tenário
var p = 3
var impresso = p <= 3 ? 'MI': 'maior'
console.log(impresso);

var q = 1
var i = 1
var mostre = q == i ? ' igual' : ' diferente'
console.log(mostre);

// Exercício 05: ||

// Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o 
// segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

    function possoIrAoBanco(diadasemana,horaAtual){
        // let horadeBanco = 10
        // let diadasemana = sabado

        if(diaDaSemana != segunda && horaAtual == 10){
            return 'true' 
        } else {
            return 'false'
        }        
    }
    console.log(possoIrAoBanco());


    function possoIrAoBanco(diadasemana,horaAtual){
    
        let horadeBanco = (diadasemana != "segunda") && (horaAtual == 17)? 'true': 'false'
            return horadeBanco
    }
    console.log(possoIrAoBanco("domingo",17));




    // Exercício 06: ||

// Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) 
// E o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster. 

// Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.



function filosofoHipster (profissao,nacionalidade,kms){

// let km = 2
// let prof = 'hipster'
// let nacional = 'brasil'

  let filosofo = (profissao == 'hipster' && nacionalidade == 'brasil' && kms == 2)? 'true':'false'
    return filosofo

    }
console.log(filosofoHipster('hipster','brasil',2));



// [11:04] Sandro Weslei Santos Goes

// Desafio 1: Extensão de Array

//Crie uma extensão para a classe Array que adiciona um método chamado shuffle,
// que embaralha os elementos do array. O método deve ser adicionado ao prototype do Array. 

    class Array {
        constructor (embaralhar){
                this.embaralhar = embaralhar;
        }

        shuflle(){
            this.embaralhar.prototype = Math.floor(Math.random())
                return this.embaralhar
        }
    }
    
    console.log();




// Desafio 2: Validação de E-mail 
//Crie uma função chamada validarEmail que recebe uma string como argumento 
// e verifica se ela corresponde a um formato de e-mail válido. Adicione essa função ao prototype da classe String. 

//     function validarEmail(string){
//     //   (nao obrigatorio)@(nao obrigatorio).com
//         validarEmail()

//         let re = 
//             return re.test(priscilaspx@hotmail.com){

//             }




// function validarEmail(string){
//     return validarEmail.includes.@.()
// }


// console.log(validarEmail(''));
// console.log(validarEmail(''));
// console.log(validarEmail(''));






            
//     }
//         // validarEmail(){
//         //     return this.string = string = Array.prototype(){

//         //     }
//         // }

//         validarEmail.prototype = function (){
//             return this.string
//         }
//         console.log(validarEmail());

//         // Com esta função em Javascript, é possível realizar uma validação completa do formato do email utilizando Expressão Regular.
//         // A utilização é bem simples, basta passar o email por parâmetro para a função IsEmail e função retornará True caso o email 
//         // seja válido e False caso o formato esteja inválido.
        

// console.log(validarEmail("sadas@.coms"));


////////////////////////////////////////////////////////////////////////


// Desafio 3: Contagem de Palavras

//Crie uma função chamada contarPalavras que conta o número de palavras em uma string. 
// A função deve ser adicionada ao prototype da classe String. 

function contarPalavras(string){    
     return string.length
   
}
console.log(contarPalavras('priscila'));



// Desafio 4: Conversão para Moeda 
//Crie uma função chamada paraMoeda que converte um número para uma string no formato de moeda, 
// com separadores de milhares e símbolo do Real (R$). Adicione essa função ao prototype da classe Number. 

const moeda = 25.0

function paraMoeda(conversor){

      return conversor.replace
       .replace('')
    }

    console.log(moeda.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}));
//fazendo alguns testes....






// Desafio 5: Extensão de Data
// Crie uma extensão para a classe Date que adiciona um método chamado diaUtil,
//  que verifica se uma determinada data é um dia útil (segunda a sexta-feira). O método deve ser adicionado ao prototype do Date.

class Date{
    constructor(verificar){
        this.verificar = verificar
        Date.prototype.mydate = function(){
            
        }
    }

    diaUtil(){

    }

    }  

const Date1 = new Date('seg','ter','qua')

console.log(Date1);




 


