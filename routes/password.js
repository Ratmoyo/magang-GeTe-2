//import expressnya
const express = require('express')
const router = express.Router()
//import module nya
const generator = require('generate-password')

//ini route nya
router.get('/', (req, res) => {
    const password = generator.generate({
        length: 10,
        numbers: true,
        strict: true,
        lowercase: true
    });
    res.send('rendom password : ' + password)
})

//export routing nya
module.exports = router