//import express
const express = require('express')
const router = express.Router()

// ini route nya
router.get('/', (req, res) => {
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined) {
        res.send('data yang diisi tidak lengkap')
        return
    }
    res.send('nama saya ' + nama + ',saya dari ' + alamat)
})

// export routing nya
module.exports = router