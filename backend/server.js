const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    //const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await result.json();
    res.json(data);
})


app.listen(4000, () => {
    console.log('listening on port 4000')
})