

// function solucao (idade){
    
//     if( idade >= 18){
//         return 'pode entrar'
//     } else {
//         return 'nao pode entrar'
//     } 
// }
// console.log(solucao(45));



// array [item 1 , item 2 , item 3]
let precos = [100,500,100,200,50]

function solucao (array){
    let soma = 0
 for(let item of array){ 
    soma = soma + item
}
    return soma
} 
console.log(solucao(precos));

//     if (precos.lenght >= 5 ){

//     }else{

//     }
// }
// console.log(precos.length);



// entrada array idadesDeUmTime, CADA ARRAY E´TIPO NUMBER INTEIRO E POSITIVO, Q REPRESENTA A IDADE DO JOGADOR DO TIME
// CASO O TIME CONVOQUE MAIS DE 18 JOGADORES , IMPRMIMA INVALIDA POR TER MAIS DE 18 JPGADORES

// CASO O TIME TENHA A QUANTIA CERTA MAS TENHA CONVOCADO MAIS DE 3 JOGADORES COM MAIS DE 23 ANOS , IMPRIMA O NUMERO DE JOGAPRES COM MAIS DE 23 ANOS
// CASO SEJA ValidityState, IMPRIMA COMVOCAÇAO VALIDA


//array de strings 

let itens = ['faca','poder','escudo','revolver']

let itemNecessario1 = 'faca'
let itemNecessario2 = 'poder'
let itemNecessario3 = 'manipular'

function itensColetados(item){
    return item.includes('faca')
}

console.log(itensColetados(itens));









