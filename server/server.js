//npm install express
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
// npm i cors
var cors = require("cors");
app.use(cors());

var jsonParser = bodyParser.json()

chaves = {  'liga': 0,
            'auto': 0,
            'restart': 0}

app.post('/', jsonParser, function (req, res) {       
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    chaves = req.body;
    console.log(chaves);
    res.end();
})

app.get('/', function (req, res){
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    res.write(JSON.stringify(chaves));  
    res.end(); 
})

app.listen(3000)