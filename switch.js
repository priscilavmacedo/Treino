let hoje = 6 //aqui voce adiciona o valor
let dia //pega o dia da semana referente ao numero 
switch (hoje){ // recebe a variavel e quebra em casos
    case 0:
    //caso a variavel hoje seja 0
        dia = 'Domingo'
        //o dia será 'Domingo'
        break
        //representa o fim dessa case

    case 1:
    //caso a variavel hoje seja 1
        dia = 'Segunda'
        //o dia será 'Segunda'
        break
        //representa o fim dessa case

    case 2:
    //caso a variavel hoje seja 2
        dia = 'Terça'
        //o dia será 'Terça'
        break    
        //representa o fim dessa case

    case 3:
    //caso a variavel hoje seja 3
        dia = 'Quarta'
        //o dia será 'Quarta'
        break
        //representa o fim dessa case

    case 4:
    //caso a variavel hoje seja 4
        dia = 'Quinta'
        //o dia será 'Quinta'
        break
        //representa o fim dessa case

    case 5:
    //caso a variavel hoje seja 5
        dia = 'Sexta'
        //o dia será 'Sexta'
        break    
        //representa o fim dessa case

    case 6:
    //caso a variavel hoje seja 6
        dia = 'Sábado'
        //o dia será 'Sábado'
        // é dispensável o uso no ultimo caso pois o sistema
        // entende que depois do case 5 ele vai direto pra esse.
}
console.log(dia);

let sinal = 'verde'
// let sinal = 'amarelo'
// let sinal = 'vermelho'
// let sinal = 'azul'
// criou uma variavel e atribiu valor a ela
switch(sinal){
    // o switch recebe a variavel e quebra em casos
    case 'verde':
        // caso a variavel sinal seja 'verde'
        console.log('pode passar');
        // vai imprimir 'pode passar'
        break
        // finaliza o primeiro case

    case 'amarelo':
        // caso a variavel sinal seja 'amarelo'
        console.log('atenção');
        // vai imprimir 'atenção'
        break    
        // finaliza o segundo case

    case 'vermelho':
        // caso a variavel sinal seja 'vermelho'
        console.log('pare');
        // vai imprimir 'pare'
        break
        // finaliza o terceiro case

    default:
        // caso nenhum dos casos exista
        console.log('esse não é um valor válido');
        // vai imprimir 'esse não é um valor válido'
}


