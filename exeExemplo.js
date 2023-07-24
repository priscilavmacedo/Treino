
//1- função que calcule a quantidade de letras que tem em uma determinada string


function calculeNumeroDeLetras(nome1){
return nome1.length
}
console.log(calculeNumeroDeLetras('arvore'));


// 2 Faça uma função que pegue uma string e transforme ela em maiusculo.


function maisucula(nome2){
return nome2.toUpperCase();

}
console.log (maisucula('andrea'))

// 3 Faça uma função que pegue uma frase ('João foi comprar pão') e troque a palavra Jõao por Felipe.

function troque ( frase1){
    return frase1.replace('Jõao', 'Felipe')
}
console.log(troque('João foi comprar pão'))


// 4 Faça uma função que transforme uma string em um array ('12345')

function transforme (numeros){
    return numeros.split('')

}
console.log( transforme('12365'))


// 5 Faça uma função que transforme um array em uma string (['ola', 'humano']

function lista ( frase2){
    return frase2.join()
}
console.log(lista(['ola', 'humano']))


// 6 Faça uma função que pegue uma string e verifique se o elemento 'amor' esta presente nela.
//  (Exemplo de frase= 'O amor é como um tiro nos olhos' ou 'O coração é a arma pra salvar o mundo')

function ache (palavra){
return palavra.includes('amor')
}

console.log( ache('O amor é como um tiro nos olhos '))
console.log( ache('O coração é a arma pra salvar o mundo'))


// 7 Faça uma função que pegue os elementos de um array e coloque eles de tras pra frente.

// function transforma (organize){
// return organize.reverse()
// o que voce chama é um methodo (reverse)
// organize = [e, i, o, a] -> array
// [].reverse() -> palavra e executa o methodo em cima da palavra
// }
// console.log(transforma([1,2,3,4]))

function mude( transferir){
    return transferir.reverse()
}
console.log(mude([8,9,10,11]));

// 8 Faça uma função que calcule a soma de dois numeros (12.2324 , 13.23432) e retorne o valor arredondado da soma.
function calcule (valor1, valor2){
    return valor1 + valor2
}
console.log(calcule(12.2324,13.23432).toFixed());


// 9 Faça uma função que pegue um array de numeros e coloque eles em ordem crescente.

function ordem (crescente){
return crescente .sort()
}

console.log( ordem([9,8,7,6,5,4,3]))


// 10 Faça uma função que pegue uma string e transforme ela em minusculo.

function word ( minusculo){
    return minusculo .toLowerCase()
}
console.log(word('PRISCILA AMA ESTUDAR'));