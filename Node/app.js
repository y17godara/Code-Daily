//Learning Middleware
// req => middleware => res
const express = require('express');
const app = express();
const logger = require('./middleware.js');
const auth = require('./autherize.js');

// https://www.npmjs.com/package/morgan //for logger aleternative
app.use('/', [logger,])
app.use('/api', auth) //auth for api

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

//auth
app.get('/api/v1', (req, res) => {
    console.log(req.user); //console log the user details
    res.send('API Page');
})

app.listen(5000, () => {
    console.log('Server Started');
})