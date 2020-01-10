var express = require('express')
var app = express()
const request = require('request')
app.use(express.static('build'))
app.use(function(req,res){
    request('https://api.stocktwits.com/api/2/streams/symbol'+ req.url, function(error, response, body){
        res.send(body);
    })
})

app.listen(process.env.PORT || 4000, function(){});