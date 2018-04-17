var express = require('express')
var cors = require('cors')
var app = express()

app.get('/people', cors(), function (req, res, next) {
  res.json([
  {id:0, name:"Jean"}, 
  {id:1, name:"Jaquinha"}, 
  {id:2, name:"Ricardo"}, 
  {id:3, name:"JaCA"}, 
  {id:4, name:"Letiiicia"}, 
  {id:5, name:"Dai"}, 
  {id:6, name:"Da iIIane"}, 
  {id:7, name:"Tamy"}, 
  {id:8, name:"Tamyresss"},
  {id:9, name:"Tamyres"}, 
  {id:10, name:"Abeu"}, 
  {id:11, name:"Abellll"}])
})

app.listen(9000, function () {
  console.log('The server is running in the port 9000')
})