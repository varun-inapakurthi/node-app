const express = require('express');
const app = express()
const PORT = 3010;
app.get('/', (req, res) => res.send("Hello Welcome"))
app.listen(PORT, () => console.log("Server started"))