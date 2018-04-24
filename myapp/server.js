var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors({credentials: true, origin: true}))

app.get('/people', cors(), function (req, res, next) {
  res.json([
    {
      id: 0,
      name: "Jean",
      age: 20,
      city: 'Rio de Janeiro',
      country: 'Brazil'
    },
    {
      id: 1,
      name: "Jaquinha",
      age: 29,
      city: 'Minas Gerais',
      country: 'Brazil'
    },
    {
      id: 2,
      name: "Ricardo"
    },
    {
      id: 3,
      name: "JaCA"
    },
    {
      id: 4,
      name: "Letiiicia"
    },
    {
      id: 5,
      name: "Dai"
    },
    {
      id: 6,
      name: "Da iIIane"
    },
    {
      id: 7,
      name: "Tamy"
    },
    {
      id: 8,
      name: "Tamyresss"
    },
    {
      id: 9,
      name: "Tamyres"
    },
    {
      id: 10,
      name: "Abeu"
    },
    {
      id: 11,
      name: "Abellll"
    }
  ])
})

app.delete('/people/id', function (req, res) {
  res.send('DELETE request to homepage');
});

app.listen(9000, function () {
  console.log('The server is running in the port 9000')
})