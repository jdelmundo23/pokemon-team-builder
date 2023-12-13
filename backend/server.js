require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/random', async (req, res) => {
    let chainURL;
    while (!chainURL){
        const randInt = Math.floor(Math.random() * 478)
        const resTarg = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randInt}`)
        const dataTarg = await resTarg.json();
        chainURL = dataTarg.egg_groups.every(group => group.name != 'no-eggs') && dataTarg.evolution_chain.url;
    }
    const resChain = await fetch(chainURL);
    const dataChain = await resChain.json();
    const resFinal = await fetch(`https://pokeapi.co/api/v2/pokemon/${dataChain.chain.species.name}`)
    const dataFinal = await resFinal.json();
    

    res.status(200).json(dataFinal);
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


