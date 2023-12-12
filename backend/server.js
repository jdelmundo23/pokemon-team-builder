require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/true', async (req, res) => {
    //const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //const data = await result.json();
    res.status(200).json({'working' : 'true'});
})

app.get('/random', async (req, res) => {
    const resAll = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=507');
    const dataAll = await resAll.json();
    const randInt = Math.floor(Math.random() * 507)
    const randPkmn = dataAll.results[randInt];
    const resTarg = await fetch(`https://pokeapi.co/api/v2/pokemon/${randPkmn.name}`)
    const dataTarg = await resTarg.json();
    // const resSpec = await fetch(dataTarg.species.url)
    // const dataSpec = await resSpec.json();
    // const resChain = await fetch(dataSpec.evolution_chain.url);
    // const dataChain = await resChain.json();
    // console.log(dataChain)
    res.status(200).json(dataTarg);
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('listening on port 4000 and connected to db')
        })
    })
    .catch((error) => {
        console.log(error)
    })


