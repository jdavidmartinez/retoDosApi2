const express = require('express');

const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


const {Persona} = require('./sequelize')

app.get('/personas', (req, res)=>{
    Persona.findAll()
    .then(personas => {
        console.log('datos enviados')
       res.send(personas);
    })
    
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
    let personaId = req.params.id
    Persona.findOne({ where: {id: personaId }})
    .then(persona => {
        res.json(persona)
    })
    
})

app.put('/personas/:id', (req, res)=>{
    let personaId = req.params.id
    let nuevosDatos = req.body
    Persona.findOne({ where: {id: personaId }})
    .then( persona => {
        persona.update(nuevosDatos)
        .then(nuevaPersona => {
            res.json(nuevaPersona )
        })
    })
    res.send('PUT /personas/:id');
})

app.delete('/personas/:id', (req, res)=>{
    let personaId = req.params.id

    Persona.destroy({
        where: { id: personaId} })
        .then(() => {
            res.send('Persona Eliminada')
        })
   // res.send('DELETE /personas/:id');
})  



app.listen(port, () => {console.log(`listening in port ${port}`)})
