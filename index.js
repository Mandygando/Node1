const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const introducao = require('./routes/introducao')
const lista1 = require('./routes/lista1')
const lista2 = require('./routes/lista2')
const lista3 = require('./routes/lista3')
const lista4 = require('./routes/lista4')

//teste
app.use('/lista1', lista1)
app.use('/lista2', lista2)
app.use('/lista3', lista3)
app.use('/lista4', lista4)
app.use('/', introducao)

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})