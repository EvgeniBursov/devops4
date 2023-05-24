const express = require('express')

const app = express()

app.get('/',  (req,res) => {
     res.sendFile(__dirname + '/index.html')
})
app.get('/test', (req,res) => {
    res.send('Test Hello')
})

module.exports = app