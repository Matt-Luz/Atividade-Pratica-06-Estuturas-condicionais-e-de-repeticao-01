// Atividade 06 - 01

/* 

    Faça um algoritmo que leia a idade de vários alunos de uma turma.
    O programa vai parar quando for digitada a idade 999. No final,
    mostre quantos alunos existem na turma e qual é a média de idade
    do grupo.

*/

let contador = 0;
let somaIdades = 0;
let numAlunos = 0;

while (contador === 0) {
    let idade = Number(prompt('Digite aqui sua idade:'));
    if(idade != 999){
        somaIdades = idade + somaIdades;
        numAlunos++
    }else{
        contador++
    } 
}
console.log(`A média de idade dos ${numAlunos} alunos é: ${somaIdades/numAlunos.toFixed(2)}.`);



// Atividade 06 - 02

/* 

    Desenvolva um aplicativo que leia o salário e o sexo de vários
    funcionários. No final, mostre o total de salários pagos aos homens e
    o total pago às mulheres. O programa vai perguntar ao usuário se
    ele quer continuar ou não sempre que ler os dados de um
    funcionário.

*/

let salarioM = 0;
let salarioF = 0;
let totalSalarioM = 0;
let totalSalarioF = 0;
let sexo;
let confirmacao = true;
let fem = 0;
let masc = 0;

for (i = 0; confirmacao; i++) {
    
    if (confirmacao) {
        sexo = prompt('Qual o sexo do funcionario? (Digite M para masculino e F para feminino)')

        if (sexo === 'm' || sexo === 'M') {
            salarioM = Number(prompt('Qual o Salario?'));
            totalSalarioM = totalSalarioM + salarioM;
            masc++
        }

        if( sexo === 'f' || sexo === 'F') {
            salarioF = Number(prompt('Qual o Salario?'));
            totalSalarioF = totalSalarioF + salarioF;
            fem++
        }
    }
    if (i >=1) {

        confirmacao = confirm('Deseja adicionar mais funcionarios?');
    }

    if (confirmacao === false) {
        alert('Resultado disponivel no console.log!');
    }

}

console.log (`Foram pagos ${fem} salarios as funcionarias do sexo feminino.`);
console.log (`Foram pagos ${masc} salarios aos funcionarios do sexo masculino`);
console.log (`O total pago aos funcionarios do sexo feminino é de: ${totalSalarioF}`);
console.log (`O total pago aos funcionarios do sexo masculino é de: ${totalSalarioM}`);
console.log (`O valor total de salarios pagos é de ${(totalSalarioF + totalSalarioM).toFixed(2)}`);
console.log (`A media salarial dos funcionarios do sexo feminino é de: ${(totalSalarioF / fem).toFixed(2)}`);
console.log (`A media salarial dos funcionarios do sexo masculino é de: ${(totalSalarioM / masc).toFixed(2)}`);



// Atividade 06 - 03

/* 

    Crie um algoritmo que leia o valor inicial da contagem, o valor final e
    o incremento, mostrando em seguida todos os valores no intervalo:
        
        Ex:

        Digite o primeiro Valor: 3
        Digite o último Valor: 10
        Digite o incremento: 2
        Contagem: 3 5 7 9 Acabou!

*/

let valor1 = Number(prompt('Digite o valor inicial:'));
let valor2 = Number(prompt('Digite o valor final:'));;
let incremento = Number(prompt('Digite o incremento desejado:'));;
let numero = 0;

if (valor2 <= 0) {
    alert('Valor valido!')
} else {

console.log(incremento);

for(i = valor1 ; numero <= valor2 ; i + incremento) {
    if (numero != 0) {
        console.log(numero)}
    numero = i += incremento
 
}
}



// Atividade 06 - 04

/* 

    Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
    descontos para todos, mas especialmente para mulheres. Faça um
    programa que leia nome, sexo e o valor das compras do cliente e
    calcule o preço com desconto. Sabendo que:

    a. Homens ganham 5% de desconto
    b. Mulheres ganham 13% de desconto

*/

let nomeCliente;
let sexoCliente;
let valorCompras = 0;
let conf = true;
let valorDesc = 0;

for (i = 0; conf; i++) {

    if (conf) {

    nomeCliente = prompt('Insira o nome do cliente:');
    sexoCliente = prompt('Insira o sexo do cliente (F para Mulher e M para Homem.)');
    valorCompras = Number(prompt('Qual o valor total de compras?'));

            if (valorCompras === 0) {
                conf = false;
            }

        if (sexoCliente === 'm' || sexoCliente === 'M') {
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log('O cliente é homem!')
            console.log(`O valor da compra é: ${valorCompras}`);
            valorDesc = (valorCompras / 100) * 95;
            console.log(`O valor com Desconto é: ${valorDesc.toFixed(2)}`);
        }

        if (sexoCliente === 'f' || sexoCliente === 'F') {
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log('O cliente é mulher!')
            console.log(`O valor da compra é: ${valorCompras}`);
            valorDesc = (valorCompras / 100) * 87;
            console.log(`O valor com Desconto é: ${valorDesc.toFixed(2)}`);
        }
    }

        
    conf = confirm('Deseja adicionar mais clientes?')

    if (conf === false) {
        alert('Confira o seu resultado no console.')
        console.log(`Tivemos um total de ${i + 1} clientes hoje!`)
    }
}



// Atividade 06 - 05

/* 

    Faça um algoritmo que pergunte a distância que um passageiro
    deseja percorrer em Km. Calcule o preço da passagem, cobrando
    R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
    longas.

*/

let distancia = Number(prompt('Informe a distância percorrida em KM (Somente números):'));
let valorPorKM = 0;

for(i = 0; i <= distancia; i++){

    if (distancia <= 200) {
        valorPorKM = (distancia * 0.50);
    }

    if (distancia > 200) {
        valorPorKM = (distancia * 0.45);
    }
}

console.log(`O valor da sua passagem é de: R$ ${valorPorKM.toFixed(2)}`);



// Atividade 06 - 06

/* 

    Faça um programa que leia a largura e o comprimento de um
    terreno retangular, calculando e mostrando a sua área em m2. O
    programa também deve mostrar a classificação desse terreno, de
    acordo com a lista abaixo:

        Abaixo de 100m2 = TERRENO POPULAR

        Entre 100m2 e 500m2 = TERRENO MASTER

        Acima de 500m2 = TERRENO VIP

*/

let comprimento = Number(prompt('Informe comprimento do terreno em metros (Somente números):'));
let largura = Number(prompt('Informe a largura do terreno em metros (Somente números):'));
let metrosQuadrados = comprimento * largura

if(metrosQuadrados < 100){
    console.log(`O terreno possui ${metrosQuadrados} m² de área e se enquadra na categoria TERRENO POPULAR.`)

}else if(metrosQuadrados >= 100 && metrosQuadrados <= 500){
    console.log(`O terreno possui ${metrosQuadrados} m² de área e se enquadra na categoria TERRENO MASTER.`)

}else{
    console.log(`O terreno possui ${metrosQuadrados} m² de área e se enquadra na categoria TERRENO VIP.`)
}