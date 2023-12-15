const express = require('express')
const Pokemon = require('../models/pkmnModel')

const router = express.Router()

// get random pokemon from API
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

// add pokemon to database
router.post('/box/add', async (req, res) => {
    const {name, box_id, pkmn_id} = req.body
    try {
        const pokemon = await Pokemon.create({name, box_id, pkmn_id})
        res.status(200).json(pokemon)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
})

// get pokemon from specified box id
router.get('/box/:id', async (req, res) => {
    const boxPkmn = await Pokemon.find({box_id: req.params.id})
    res.status(200).json(boxPkmn)
})

module.exports = router