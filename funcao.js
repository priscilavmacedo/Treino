// Faça uma função que imprima uma mensagem dizendo que a internet acabou


function funçaoMensagem(){
    console.log(' a internet acabou');
}
funçaoMensagem()

// Faça uma função que receba 2 parametros e faça a subtração dos dois

function subtrai (a,b){
    return console.log( a-b);
}

subtrai(2,3)


//Exemplos de funções
// Uma função que imprima 'Olá mundo':
function Mensagem(){  //criou a função, deu nome pra ela e abriu. 
    return console.log('Olá mundo') //esta retornando o valor e imprimindo (console) a mensagem desejada (em formato de string)
    } //fechou a função 
    Mensagem() //(chamou a função )
    
// Uma função que some dois parametros 
function Somando ( numero1,numero2) {  //criou a função, deu nome pra ela, atribiu 2 parametros pra ela (a,b) e abriu 
    return console.log(numero1 + numero2) //esta retornando o valor e imprimindo () a soma dos dois parametros
}    //fechou a função
Somando(222,377) //chamou a função e passou o valor do parametro


// Faça uma função que retorne a mensagem "bora codar"
//Faça uma função que multiplique (simbolo para multiplicação é o *) dois parametros
//Faça uma função que some duas strings ('') (por exemplo: nome e sobrenome)
// Faça uma função que retorne a mensagem 'uau, voce conseguiu'


// Faça uma função que retorne a mensagem "bora codar"

function retorneMensagem(){
    return console.log( 'bora cordar');
}
retorneMensagem()



//Faça uma função que multiplique (simbolo para multiplicação é o *) dois parametros

function multiplica (f,g){
   return console.log(f*g);
}

multiplica(5,6)


//Faça uma função que some duas strings ('') (por exemplo: nome e sobrenome)
function funcaoNome (nome,sobrenome){
    return console.log(nome+ " "+sobrenome);
}
funcaoNome('Priscila','Macedo')


// Faça uma função que retorne a mensagem 'uau, voce conseguiu'
function mensagemSucesso(){
    return console.log('uau voce conseguiu')
}
mensagemSucesso()

function Comparar (x,z){
    if(x<z){
        return console.log('é menor!');
    } else {
        return console.log('é maior !');
    }
}
Comparar(1,2)


//Faça uma função que compare dois parametros e veja se o parametro 1 é maior do que o parametro 2 (mensagem= 'maior', ou se é igual (mensagem= 'igual'), se não for (mensagem='menor')
//Faça uma função que compare dois parametros e veja se o parametro 1(string) é igual ao parametro 2 (string) (mensagem = 'igual'), se não for (mensagem = 'diferente')


//Faça uma função que compare dois parametros e veja se o parametro 1 é maior do que o parametro 2 (mensagem= 'maior', ou se é igual (mensagem= 'igual'), se não for (mensagem='menor')
function juntar (f , k){

    if (f > k) {
        return console.log('é maior');
    } else {
        return console.log(' é menor');
    }
} 

   juntar(1,2)



   //Faça uma função que compare dois parametros e veja se o parametro 1(string) é igual ao parametro 2 (string) (mensagem = 'igual'), se não for (mensagem = 'diferente')

function mensagem (string1, string2){
    if( string1 == string2){
        return console.log('é igual');
    } else {
        return console.log('é diferente');
    }

}

mensagem('abacaxi', 'Abacaxi')