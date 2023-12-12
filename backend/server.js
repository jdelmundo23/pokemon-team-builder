require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/true', async (req, res) => {
    //const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //const data = await result.json();
    res.status(200).json({'working' : 'true'});
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })


