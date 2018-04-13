const express = require('express');

const app = express();

app.get('/people', (req, res) => {
  res.send([{ id: 0, name: "Jean" },
    { id: 1, name: "Jaquinha" },
    { id: 2, name: "Ricardo" },
    { id: 3, name: "JaCA" },
    { id: 4, name: "Letiiicia" },
    { id: 5, name: "Dai" },
    { id: 6, name: "Da iIIane" },
    { id: 7, name: "Tamy" },
    { id: 8, name: "Tamyresss" },
    { id: 9, name: "Tamyres" },
    { id: 10, name: "Abeu" },
    { id: 11, name: "Abellll" }];
)
});



app.listen(9000, () => console.log('Running server on 9000'));