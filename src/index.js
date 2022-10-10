import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
const app = express()
const PORT = process.env.PORT || 5000
app.use(bodyParser.json())
app.use('/', (req, res, next) =>{
    res.send("hello")
})

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})