// index.js

const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, <strong>Mustapha hamdach</strong> </h1>');
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})