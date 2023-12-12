const express = require('express')

const app = express()

app.get('/true', async (req, res) => {
    //const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //const data = await result.json();
    res.status(200).json({'working' : 'true'});
})


app.listen(4000, () => {
    console.log('listening on port 4000')
})