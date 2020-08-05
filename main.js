const express = require('express')
const superheroes = require('superheroes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/random', (req, res) => {
    const randsuperheroes = superheroes.random()
    res.send('Super Hero anda adalah ' + randsuperheroes)
})

app.get('/coba', (req, res) => {
    //console.log(req.query)
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined) {
        res.send('data yg anda kirim tidak lengkap')
    }
    res.send('namaku siapa? ' + nama + ' dari ' + alamat)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})