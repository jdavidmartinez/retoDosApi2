const express = require('express');
const app = express();
const port = 3000;

const {Persona} = require('./sequelize')

app.get('/personas', (req, res)=>{
    res.send('GET /personas');
})

app.post('/personas/nuevo', (req,res)=>{
    res.send('POST /personas/nuevo');
})

app.get('/personas/:id', (req, res)=>{
    res.send('GET /personas/:id');
})

app.put('/personas/:id', (req, res)=>{
    res.send('PUT /personas/:id');
})

app.delete('/personas/:id', (req, res)=>{
    res.send('DELETE /personas/:id');
})  



app.listen(port, () => {console.log(`listening in port ${port}`)})
