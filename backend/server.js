require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const pkmnRoutes = require('./routes/pokemon')

app.use(express.json());
app.use('/api/pokemon', pkmnRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('listening on port 4000 and connected to db')
        })
    })
    .catch((error) => {
        console.log(error)
    })


