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


// testing - will be working on it later
// app.get('/api/products/:productID/reviews', ( req, res ) => {

//     const data = reviews.id;
//     res.send(data);
// });


// reviews comments
app.get('/api/products/:productID/reviews/:reviewID', ( req, res ) => {
    console.log(req.params);
    res.send('working');
});


// search query api
app.get('/api/v1/query', ( req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    // sorting
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success: true, data: []})
    }
    // sorting test url :
    // http://localhost:5000/api/v1/query?search=albany&limit=1

    return res.status(200).json(sortedProducts);
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