const express = require('express')
const app = express()
const PORT = 5000
const { check, generate, runChecks } = require('./gen');
const { env } = require('process');

app.get("/", async (req, res)=> {
    const result = await runChecks(); 
    res.json({ url: result });
})

app.listen(PORT || process.env.PORT, ()=>{
    console.log(`http://localhost:${PORT}/`)
})
