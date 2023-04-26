// imports
const express = require('express');
const app = express();

// api data import
const { products } = require('./data.js');
const { people } = require('./data.js');
const { reviews } = require('./data.js');


// Home Page
app.get('/', ( req, res ) => {
    res.status(200).send(`
        <h1>Home Page</h1>
        <a href="/api/products"> api/Products </a>
    `);
});


// Products Api
app.get('/api/products', (req, res) => {
    const newProducts = products.map(( product ) => {
        const {id,name,image} = product;
        return {id, name, image}
    })
    res.json(newProducts);
});


// Single Products Api
app.get('/api/products/:productID', ( req, res ) => {
    const {productID} = req.params;
    const singleProduct = products.find(
        ( product ) => product.id === Number( productID )
    )
    //if product id not valid
    if ( !singleProduct ) {
        return res.status(404).send(`
        <h1>Product doesnt Exist</h1>
        <a href="/api/products"> back to products list </a>
        `)
    }

    return res.json(singleProduct);
});


// Reviews Api
app.get('/api/products/:productID', ( req, res ) => {
    const {productID} = req.params;
    const singleProduct = products.find(
        ( product ) => product.id === Number( productID )
    )
    //if product id not valid
    if ( !singleProduct ) {
        return res.status(404).send(`
        <h1>Product doesnt Exist</h1>
        <a href="/api/products"> back to products list </a>
        `)
    }

    return res.json(singleProduct);
});


// 404 Page
app.get('*', ( req, res ) => {
    res.status(400).send(`
        <h1>Invalide Page</h1>
        <a href="/"> back home </a>
    `);
});


// Server Listening PORT
app.listen(5000, () => {
    console.log('Server Started')
});