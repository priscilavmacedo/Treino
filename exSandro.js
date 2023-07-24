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