const Sequelize = require('sequelize')

const PersonaModel = require('./models/Persona')


const DBURL = 'mysql://root:David1425@localhost:3306/api-sequelize'

const sequelize = new Sequelize(DBURL)

const Persona = PersonaModel(sequelize, Sequelize)


sequelize.sync()
    .then(()=>{
        console.log(`tablas creadas`)
    })

module.exports = {
    Persona
}