var express = require('express')
var watson = require('watson-developer-cloud')

var app = express()

app.post('/', (req, res) => {
  res.send('test')
})

app.listen(8000, function () {
  console.log('app listening on port 8000!')
})
