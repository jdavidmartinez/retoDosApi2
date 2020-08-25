const express = require('express');

const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


const {Persona} = require('./sequelize')

app.get('/personas', (req, res)=>{
    res.send('GET /personas');
})

app.post('/personas/nuevo', (req,res)=>{
    console.log(req.body)
    Persona.create({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono
    }).then(persona =>{
        res.send('Persona creada');
    })
    
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
