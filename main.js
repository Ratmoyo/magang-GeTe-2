//import express
const express = require('express')
const app = express()
//import file route
const userRouter = require('./routes/user')
const passRouter = require('./routes/password')
const rootrouter = require('./routes/root')
//mengisi port
const port = 3000

//load route
app.use('/user', userRouter)
app.use('/password', passRouter)
app.use('/', rootrouter)

//akses port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})