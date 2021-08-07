// First Server on Node
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Hi, my first node express app');
});

app.listen(port, () => {
    console.log('Server running on ' + port);
});