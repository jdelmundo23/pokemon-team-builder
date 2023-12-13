const express = require('express')
const Pokemon = require('../models/pkmnModel')

const router = express.Router()

router.get('/random', async (req, res) => {
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

router.post('/box', async (req, res) => {
    const {name, box_id} = req.body
    try {
        const pokemon = await Pokemon.create({name, box_id})
        res.status(200).json(pokemon)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router