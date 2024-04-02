const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

    res.json(req.body)

    const numeros = req.body
    // for(1=0; i<numeros.length; i++){}

    let soma = 0
    for(let n of numeros){
        soma  += n

    }
    const media = soma / numeros.length

    res.json({media})
});


router.post('/ex2', function(req, res) {
    let numeros = req.body;

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    res.json({ maior, menor });
});





router.post('/ex3', function(req, res) {
    let listaNumeros = [];
    for (let i = 1; i <= 10; i++) {
        listaNumeros.push(i);
    }
    res.json({ listaNumeros: listaNumeros });
});

router.post("/ex4", (req, res) => {
    const listaNumeros = [];
    for (let i = 10; i >= 1; i--) {
        listaNumeros.push(i);
    }
    res.json({ listaNumeros });
});

router.post("/ex5", (req, res) => {
    const listaNumeros = [];
    let contador = 0;
    for (let i = 101; contador < 10; i++) {
        listaNumeros.push(i);
        contador++;
    }
    res.json({ listaNumeros });
});

router.post("/ex6", (req, res) => {
    const { numeros } = req.body;
    let somaTotal = 0;

    if (numeros.length === 10) {
        for (let i = 0; i < 10; i++) {
            somaTotal += parseInt(numeros[i]);
        }
        res.json({ somaTotal });
    } else {
        res.status(400).json({ error: "É necessário fornecer exatamente 10 números." });
    }
});

router.post("/ex7", (req, res) => {
    const { quantidade } = req.body;
    const numerosPares = [];
    for (let i = 1; i <= quantidade; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    res.json({ numerosPares });
});

router.post("/ex7", (req, res) => {
    const { n } = req.body;
    const numeros = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            numeros.push(i)
        }
    }
    res.json({ numeros });
})

router.post("/ex8", (req, res) => {
    const valores = req.body.valores; 
    let contador = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            contador++;
        }
    }

    res.json({ contador });
});

router.post("/ex9", (req, res) => {
    const { valores } = req.body;
    let numerosNegativos = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            numerosNegativos.push(valores[i]);
        }
    }

    res.json({ numerosNegativos });
});

router.post("/ex10", (req, res) => {
    const valores = req.body.valores;
    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    res.json({ dentroIntervalo, foraIntervalo });
});

router.post("/ex11", (req, res) => {
    const valores = req.body.valores; // Extrai o array de valores do corpo da requisição

    if (!valores || valores.length === 0 || !Array.isArray(valores)) {
        return res.status(400).json({ error: "Nenhum valor válido fornecido" });
    }

    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        if (isNaN(valores[i])) {
            return res.status(400).json({ error: "Um ou mais valores não são numéricos" });
        }
        total += parseFloat(valores[i]);
    }

    const media = total / valores.length;
    res.json({ media });
});


router.post("/ex12", (req, res) => {
    const valores = req.body.valores;

    if (!valores || valores.length === 0 || !Array.isArray(valores)) {
        return res.status(400).json({ error: "Nenhum valor válido fornecido" });
    }

    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        if (isNaN(valores[i])) {
            return res.status(400).json({ error: "Um ou mais valores não são numéricos" });
        }
        total += parseFloat(valores[i]);
    }

    const media = total / valores.length;
    res.json({ media });
});


router.post("/ex13", (req, res) => {
    const { numeros } = req.body;

    // Verifica se o campo "numeros" está presente e se é um array
    if (!numeros || !Array.isArray(numeros)) {
        return res.status(400).json({ error: "Array de números não fornecido corretamente" });
    }

    const triplos = [];
    for (let i = 0; i < numeros.length; i++) {
        // Verifica se cada elemento do array é um número
        if (typeof numeros[i] !== 'number') {
            return res.status(400).json({ error: "Um ou mais valores não são numéricos" });
        }
        const triplo = numeros[i] * 3;
        triplos.push(triplo);
    }
    res.json({ triplos });
})

router.post("/ex14", (req, res) => {
    const { numeros } = req.body;

    if (!numeros || !Array.isArray(numeros)) {
        return res.status(400).json({ error: "Array de números não fornecido corretamente" });
    }

    const dobros = [];
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== 'number') {
            return res.status(400).json({ error: "Um ou mais valores não são numéricos" });
        }
        const dobro = numeros[i] * 2;
        dobros.push(dobro);
    }
    res.json({ dobros });
})

router.post("/ex15", (req, res) => {
    const { numeros } = req.body;

    // Verifica se o campo "numeros" está presente e se é um array
    if (!numeros || !Array.isArray(numeros)) {
        return res.status(400).json({ error: "Array de números não fornecido corretamente" });
    }

    let somaMenorQue40 = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 40) {
            somaMenorQue40 += numeros[i];
        }
    }

    res.json({ somaMenorQue40 });
})


router.post("/ex16", (req, res) => {
    const { numeroMercadorias, numerosMercadorias } = req.body;
    let totalEstoque = 0;

    for (let i = 0; i < numeroMercadorias; i++) {
        totalEstoque += numerosMercadorias[i];
    }

    const mediaEstoque = totalEstoque / numeroMercadorias;
    res.json({ totalEstoque, mediaEstoque });
})

router.post("/ex17", (req, res) => {
    const { valorInicial, valorFinal } = req.body;
    let impares = [];
    let somaImpares = 0;

    for (let i = valorInicial; i <= valorFinal; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
            somaImpares += i;
        }
    }
    res.json({ impares, somaImpares });
})

router.post("/ex18", (req, res) => {
    const { numeros } = req.body;

    if (!numeros || !Array.isArray(numeros)) {
        return res.status(400).json({ error: "Array de números não fornecido corretamente" });
    }

    let maior = numeros[0];
    let menor = numeros[0];
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        const valor = numeros[i];
        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;
        soma += valor;
    }

    const media = soma / numeros.length;
    res.json({ maior, menor, media });
})

router.post("/ex19", (req, res) => {
    const { alunos } = req.body;

    if (!alunos || !Array.isArray(alunos)) {
        return res.status(400).json({ error: "Array de alunos não fornecido corretamente" });
    }

    const numAlunosPorCurso = [0, 0, 0];
    const numAlunosEntre20e25PorCurso = [0, 0, 0];
    const somaIdadesPorCurso = [0, 0, 0];
    const numAlunosPorCursoParaMedia = [0, 0, 0];

    for (let aluno of alunos) {
        numAlunosPorCurso[aluno.curso - 1]++;
        if (aluno.idade >= 20 && aluno.idade <= 25) numAlunosEntre20e25PorCurso[aluno.curso - 1]++;
        somaIdadesPorCurso[aluno.curso - 1] += aluno.idade;
        numAlunosPorCursoParaMedia[aluno.curso - 1]++;
    }

    const mediaIdadePorCurso = somaIdadesPorCurso.map((soma, index) => soma / numAlunosPorCursoParaMedia[index]);

    let menorMediaIdadeCurso = 1;
    for (let i = 1; i < mediaIdadePorCurso.length; i++) {
        if (mediaIdadePorCurso[i] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = i;
        }
    }

    res.json({ numAlunosPorCurso, numAlunosEntre20e25PorCurso, menorMediaIdadeCurso });
})


router.post("/ex20", (req, res) => {
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `Tabuada do ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tabuada += `${i} x ${j} = ${i * j}\n`;
        }
        tabuada += '\n'; 
    }
    res.send(tabuada);
})

router.post("/ex21", (req, res) => {
    const { espectadores } = req.body;

    if (!espectadores || !Array.isArray(espectadores)) {
        return res.status(400).json({ error: "Array de espectadores não fornecido corretamente" });
    }

    const qtdNotas10 = espectadores.filter(espectador => espectador.nota === 10).length;
    const somaIdades = espectadores.reduce((soma, espectador) => soma + espectador.idade, 0);
    const mediaIdade = somaIdades / espectadores.length;
    const qtdNotas5ouMenos = espectadores.filter(espectador => espectador.nota <= 5).length;
    const percentagemNotas5ouMenos = (qtdNotas5ouMenos / espectadores.length) * 100;
    const pessoaMaisVelha = espectadores.reduce((maisVelha, espectador) => {
        return (espectador.idade > maisVelha.idade) ? espectador : maisVelha;
    });
    const resposta = { qtdNotas10, mediaIdade, percentagemNotas5ouMenos };
    resposta.pessoaMaisVelha =  pessoaMaisVelha.nome;
    res.json(resposta);
})

router.post("/ex22", (req, res) => {
    const { produtos } = req.body;

    let maiorPreco = produtos[0].preco;
    let somaPrecos = 0;

    for (let i = 0; i < produtos.length; i++) {
        const preco = produtos[i].preco;
        if (preco > maiorPreco) maiorPreco = preco;
        somaPrecos += preco;
    }

    const mediaPrecos = somaPrecos / produtos.length;   
     res.json({maiorPreco, mediaPrecos});
})

module.exports = router