const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){
    const { salarioAtual } = req.body;

    let salarioReajustado;

    if (salarioAtual <= 2000) {
        salarioReajustado = parseFloat((salarioAtual * 1.5).toFixed(2)); // Reajuste de 50% para salários até 2000
    } else {
        salarioReajustado = parseFloat((salarioAtual * 1.3).toFixed(2)); // Reajuste de 30% para salários maiores que 2000
    }

    res.json({ salarioReajustado });
});

router.post('/ex2', function(req, res){
    const { num1, num2, num3 } = req.body;

    const intNum1 = parseInt(num1);
    const intNum2 = parseInt(num2);
    const intNum3 = parseInt(num3);

    // Verificando qual é o maior número
    let maior = intNum1;
    if (intNum2 > maior) {
        maior = intNum2;
    }
    if (intNum3 > maior) {
        maior = intNum3;
    }

    res.json({ maior });
});

router.post('/ex3', function(req, res){
    const { numeroTulipas, numeroCoberturas, numeroPessoas } = req.body;

    const precoTulipa = 4.80;
    const precoPizzaBase = 17.00;
    const precoCobertura = 1.50;

    const precoPizza = parseFloat((precoPizzaBase + (numeroCoberturas * precoCobertura)).toFixed(2));
    const custoTotal = parseFloat(((numeroTulipas * precoTulipa) + precoPizza).toFixed(2));
    const gorjeta = parseFloat((custoTotal * 0.1).toFixed(2));
    const custoTotalComGorjeta = parseFloat((custoTotal + gorjeta).toFixed(2));
    const valorPorPessoa = parseFloat((custoTotalComGorjeta / numeroPessoas).toFixed(2));

    res.json({ valorPorPessoa });
});

router.post('/ex4', function(req, res){
    const {salarioMinimo, horasTrabalhadas, dependentes, horasExtras} = req.body

    const valorHoraTrabalhada = parseFloat((salarioMinimo * 0.2).toFixed(2));
    const salarioMes = parseFloat((valorHoraTrabalhada * horasTrabalhadas).toFixed(2));
    const valorDependente = parseFloat((dependentes * 32).toFixed(2));
    const valorHoraExtra = parseFloat((valorHoraTrabalhada * 1.5 * horasExtras).toFixed(2));
    const salarioBruto = parseFloat((salarioMes + valorDependente + valorHoraExtra).toFixed(2));

    let imposto = 0;

    if (salarioBruto > 2000){
        imposto = salarioBruto >= 5000 ? parseFloat((salarioBruto * 0.2).toFixed(2)) : parseFloat((salarioBruto * 0.1).toFixed(2));
    } 

    const salarioLiquido = parseFloat((salarioBruto - imposto).toFixed(2));
    const gratificacao = salarioLiquido < 3500  ? 1000 : 500;
    const salarioReceber = parseFloat((salarioLiquido + gratificacao).toFixed(2));

    res.json({salarioBruto, imposto, gratificacao, salarioReceber})
});



//ex5




router.post('/ex6', function(req, res){
    const { altura, sexo } = req.body;

    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'homem') {
        pesoIdeal = parseFloat(((72.7 * altura) - 58).toFixed(2));
    } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'mulher') {
        pesoIdeal = parseFloat(((62.1 * altura) - 44.7).toFixed(2));
    } else {
        return res.status(400).json({ error: 'Sexo inválido. Por favor, insira "masculino" ou "feminino".' });
    }

    res.json({ pesoIdeal });
});

router.post('/ex7', function(req, res){
    const { valor1, valor2, valor3 } = req.body;

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    const num3 = parseFloat(valor3);

    let somaDosMaiores;
    if (num1 >= num2 && num1 >= num3) {
        somaDosMaiores = num1 + (num2 > num3 ? num2 : num3);
    } else if (num2 >= num1 && num2 >= num3) {
        somaDosMaiores = num2 + (num1 > num3 ? num1 : num3);
    } else {
        somaDosMaiores = num3 + (num1 > num2 ? num1 : num2);
    }

    res.json({ somaDosMaiores });
});

router.post('/ex8', function(req, res){
    const { salario, codigoCargo } = req.body;

    let percentualAumento;

    switch(codigoCargo) {
        case 101:
            percentualAumento = 0.05;
            break;
        case 102:
            percentualAumento = 0.075;
            break;
        case 103:
            percentualAumento = 0.10;
            break;
        default:
            percentualAumento = 0.15;
            break;
    }

    const salarioAntigo = parseFloat(salario);
    const novoSalario = salarioAntigo * (1 + percentualAumento);
    const diferencaSalario = novoSalario - salarioAntigo;

    res.json({ salarioAntigo, novoSalario, diferencaSalario });
});

module.exports = router