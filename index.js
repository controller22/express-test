var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:animal', function (req, res) {
    const { animal } = req.params

    if (animal == "dog") {
        res.json({ 'sound': '왕왕' })
    } else if (animal == "cat") {
        res.json({ 'sound': '야옹' })
    } else if (animal == "pig") {
        res.json({ 'sound': '꿀꿀' })
    } else {
        res.json({ 'sound': '알 수 없음' })
    }
})

app.listen(3000)