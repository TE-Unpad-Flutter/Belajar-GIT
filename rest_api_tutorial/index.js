const express = require('express')
const app = express()
const port = 1111
const route = require('./Routes')


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(route)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})