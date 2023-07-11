//  Atividade Switch:
// 1) Faça uma condição usando o switch que verifique todos os meses do ano 


let mesAtual = 7
let mes

switch (mesAtual){
    case 1:
    mes = 'Janeiro'
        break

    case 2:
        mes = 'fevereiro'
        break
    case 3:
    mes = 'marco'
        break

    case 4:
        mes = 'abril'
        break
    case 5:
    mes = 'maio'
        break

    case 6:
        mes = 'junho'
        break
    case 7:
    mes = 'julho'
        break

    case 8:
        mes = 'agosto'
        break
    case 9:
    mes = 'setembro'
        break

    case 10:
        mes = 'outubro'
        break
    case 11:
    mes = 'novembro'
        break

    case 12:
        mes = 'dezembro'
        break

    default:
        mes = 'esse não é um valor valido'
}
console.log(mes);


// 2) Faça uma condição usando o switch que receba
//  os casos 'sao joao' ( retorne 'aee junho chegou'), 'carnaval' ( retorne 'aee fevereiro chegou') 
// e 'natal' ( retorne 'aee dezembro chegou'). 
// Caso a pessoa digite outra coisa, retorne 'não é nada importante, vá trabalhar!'


// let festas = 'saoJoao'
// let festas = 'carnaval'
// let festas = 'natal'
let festas = 'hanukah'

switch(festas){
    case 'saoJoao' :
        console.log('aee junho chegou');
        break

    case 'carnaval':
        console.log('aee fevereiro chegou');
            break

    case 'natal':
        console.log('aee dezembro chegou');
            break
    default :
        console.log('não é nada importante, vá trabalhar!');




}

let eventos = 'saoJoao'
let mensagem

switch(eventos){
    case 'saoJoao' :
        mensagem = 'aee junho chegou';
        break
    case 'carnaval':
        mensagem = 'aee fevereiro chegou';
        break
    case 'natal':
        mensagem = 'aee dezembro chegou';
        break
    default :
        mensagem = 'não é nada importante, vá trabalhar!';
}

console.log(mensagem)




