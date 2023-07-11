/*1- Atividade: Crie uma função que recebe um array de números e retorne um novo array com cada número multiplicado por 2 usando o método map().

2- Atividade: Crie uma função que recebe um array de palavras e retorne um novo array com a primeira letra de cada palavra em maiúscula usando o método map().

3 - Atividade: Crie uma função que recebe um array de objetos representando alunos, onde cada objeto tem as propriedades nome e nota. Retorne um novo array contendo apenas as notas dos alunos usando o método map().

4- Atividade: Crie uma função que recebe um array de strings e retorne um novo array com o comprimento de cada string usando o método map().

5 - Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números pares usando o método map().

6- Atividade: Crie uma função que recebe um array de objetos representando produtos, onde cada objeto tem as propriedades nome e preco. Retorne um novo array contendo apenas os nomes dos produtos usando o método map().

7- Atividade: Crie uma função que recebe um array de strings e retorna um novo array com as strings invertidas usando o método map().

8- Atividade: Crie uma função que recebe um array de números e retorna um novo array com o quadrado de cada número usando o método map().

9- Atividade: Crie uma função que recebe um array de objetos representando pessoas, onde cada objeto tem as propriedades nome e idade. Retorne um novo array contendo apenas as idades das pessoas usando o método map().

10- Atividade: Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings em caixa alta usando o método map().

11- Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números positivos usando o método map().

12- Atividade: Crie uma função que recebe um array de objetos representando livros, onde cada objeto tem as propriedades titulo e autor. Retorne um novo array contendo apenas os títulos dos livros usando o método map().

13- Atividade: Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings com mais de 5 caracteres usando o método map().

14- Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números negativos usando o método map().

15- Atividade: Crie uma função que recebe um array de objetos representando músicas, onde cada objeto tem as propriedades titulo e artista. Retorne um novo array contendo apenas os nomes dos artistas usando o método map()*/





//1 Atividade: Crie uma função que recebe um array de números e retorne um novo array com cada número multiplicado por 2 usando o método map()

let array = [2,3,4,5]

// let multiplicando = array.map((item =>{
//     return item * 2
// }))

let variavel = array.map(function(item){
    return item
})
// console.log(multiplicando);
console.log(variavel);



//2- Atividade: Crie uma função que recebe um array de palavras e retorne um novo array
 //com a primeira letra de cada palavra em maiúscula usando o método map().

 let arr = [ 'juli', 'pati', 'tuca']
    let palvara = arr.map(function(letra){
        return letra[0].toUpperCase()
        

    })
console.log(palvara);
    

/*
3 - Atividade: Crie uma função que recebe um array de objetos representando alunos, 
onde cada objeto tem as propriedades nome e nota. Retorne um novo array contendo apenas as notas dos alunos usando o método map().
*/

let escola = [
    {
        nome:'daniel',
        nota: 8
    },

{
    nome:'igor',
    nota: 9
}
]

let obs = {
    nome:'igor',
    nota: 9
}

console.log(obs.nome);

let a = 'dszsdsa'
console.log(a.length);
console.log(escola)

let alunoscomnota = escola.map((item) => item.nota)
console.log(alunoscomnota);



//4- Atividade: Crie uma função que recebe um array de strings e retorne um novo array com o comprimento de cada string usando o método map().

let arrrr =  [ '123', 'html', 'node']

let definir = arrrr.map((item) => {
    return item.length
})
console.log(definir)

//5- Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números pares usando o método map().

let pares = [1,2,3,4,5,6,7,8]
    let multiplicar = pares.map(function(item){
    return item % 2 == 0
})
console.log(multiplicar);



//6- Atividade: Crie uma função que recebe um array de objetos representando produtos, onde cada objeto tem as 
//propriedades nome e preco. Retorne um novo array contendo apenas os nomes dos produtos usando o método map().

let produtos = [

{

produto: 'tenis',
preço: 129

},

{
    produto: 'bolsa',
    preço: 150
},

]

let diversos = produtos.map(function(item) {
    return item.produto
})

console.log(diversos);


//7- Atividade: Crie uma função que recebe um array de strings e retorna um novo array com as strings invertidas usando o método map().

// let metodo = [ '1', '2','3']
//     let troca = metodo.map(function(item){
//         return console.log(item)
        
//     } )
// metodo.reverse()
// console.log(metodo);
       



//8- Atividade: Crie uma função que recebe um array de números e retorna um novo array com o quadrado de cada número usando o método map().


let numeros = [ 1,2,3,4,5]
    let quadrado = numeros.map(function(item){
        return item*2

    } )

    console.log(quadrado);
   
        

//9- Atividade: Crie uma função que recebe um array de objetos representando pessoas, onde cada objeto 
//tem as propriedades nome e idade. Retorne um novo array contendo apenas as idades das pessoas usando o método map().

    let pessoas = [

        {
        nome: 'Daniela',
        idade: 28
            
       },
       {
        nome: 'michael',
        idade: 33

       }

    ]

    console.log(pessoas);
    

    let gruponp = pessoas.map(function(item){
        
    } )
    
console.log(gruponp)
   
       
//10- Atividade: Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings em caixa alta usando o método map().


    let mudar = [ 'carol','luiza' ,' junior', 'alessandra' ]
        let maiusculas = mudar.map(function(item){
        return item.toUpperCase()
            
        })  
           
       

        console.log(maiusculas);
        

//11- Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números positivos usando o método map().

        let number = [ 1,2,3,-4,-5,-6,-7]
            let saldospositivos = number.map(function(item){
            if (item >= 0){
               return ( 'maior ou igual a zero');
            }else {
               return ('menor ou igual a zero' );
            }
           
               
            })
         console.log (saldospositivos);






//12- Atividade: Crie uma função que recebe um array de objetos representando livros, onde cada objeto tem as propriedades titulo e autor
//Retorne um novo array contendo apenas os títulos dos livros usando o método map().

            let editora = [ 
                {
                    autor:'Paulo Coelho',
                    titulo:'o alquimista'
                },


                {
                    autor:'Clarisce Linspector',
                    titulo:'a hora da estrela'
                }

                
             
            ]
            let prop = editora.map(function(item){
             return item 
                

            } )
            
            console.log(editora);
            


//13- Atividade: Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings com mais de 5 caracteres usando o método map().

            let contador = ["deus","carnaval","dançar", "céu", "alcool"]
                let caracteres = contador.map(function(item){
                    return item

                })

                console.log(caracteres.slice(1,3,4));




/*14- Atividade: Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números negativos usando o método map().

15- Atividade: Crie uma função que recebe um array de objetos representando músicas, onde cada objeto tem as propriedades titulo e artista. Retorne um novo array contendo apenas os nomes dos artistas usando o método map()*/
