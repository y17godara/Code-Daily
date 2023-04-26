//Learning Middleware
// req => middleware => res
const express = require('express');
const app = express();
const logger = require('./middleware.js');

app.use('/', logger)

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.listen(5000, () => {
    console.log('Server Started');
})