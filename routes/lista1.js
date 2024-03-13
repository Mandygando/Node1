const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { nota1, nota2, nota3, nota4 } = req.body

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({ media, mensagem })
})

router.post('/ex2', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SomaDeEleitores',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {
        const percBrancos = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBrancos, percNulos, percValidos }

        res.status(200).json(retorno)
    }

})

router.post('/ex3', function (req, res) {

    const salarioAnual = Number(req.body.salario);

    const reajuste = 0.07;

    const novoSalario = salarioAnual * (1 + reajuste);

    retorno = {
        codigo: novoSalario,
        mensagem: "Salario Atualizado"
    }

    res.status(200).json(retorno)
})

router.post('/ex4', function (req, res) {

    const custoFabrica = Number(req.body.custoFabrica)
    const custoDistribuidor = custoFabrica * 28 / 100
    const custoImposto = custoFabrica * 45 / 100
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto

    const resposta = {
        CustoFinal: custoFinal
    }

    res.json(resposta)
})

router.post('/ex5', function (req, res) {

    const { custoFabrica, percentualDistribuidor, percentualImposto } = req.body
    const custoDistribuidor = custoFabrica * Number(percentualDistribuidor / 100)
    const custoImposto = custoFabrica * (Number(percentualImposto) / 100)
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto

    const resposta = {
        custoFinal: custoFinal
    }

    res.json(resposta)

})

router.post('/ex6', function (req, res) {

    const { totalCarros, valorPorCarro, valorDasVendas, salario } = req.body
    const pagamentoPorCarro = Number(totalCarros) * Number(valorPorCarro)
    const pagamentoPorVenda = (Number(valorDasVendas) * 5 / 100)
    const salarioFinal = Number(salario) + pagamentoPorCarro + pagamentoPorVenda

    const resposta = {
        salarioFinal: salarioFinal
    }

    res.json(resposta)

})

router.post('/ex7', function (req, res) {

    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)

    const soma = (nota1 * 0.4) + (nota2 * 0.6)
    const media = soma / (0.4 + 0.6)

    const resposta = {
        MediaAluno: media
    }
    res.json(resposta)
})

router.post('/ex8', function (req, res) {

    const { raio, altura } = req.body
    const pi = 3.14
    const volume = pi * raio ** 2 * altura
    const resposta = {
        Volume: volume
    }

    res.json(resposta)

})

router.post('/ex9', function (req, res) {
    const { numero1, numero2 } = req.body

    const soma = Number(numero1) + Number(numero2)
    const resultado = soma * numero1

    const resposta = {
        Resultado: resultado
    }

    res.json(resposta)

})
module.exports = router
