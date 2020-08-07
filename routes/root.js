// import  express
const express = require('express')
const router = express.Router()

//ini route nya
router.get('/', (req, res) => {
    res.send('Assalamualaikum!')
})

// export routingnya
module.exports = router