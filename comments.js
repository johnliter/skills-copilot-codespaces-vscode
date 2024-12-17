//Create Web Server
const express = require('express');
const app = express();

//Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});