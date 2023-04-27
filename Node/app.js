// // read data
// const express = require('express');
// const app = express();
// const { people } = require('./4-data.js');


// //static data
// app.use(express.static('./public'))

// //api
// app.get('/api/people', (req, res) => {
//     res.status(200).json({ success: true, data: people});
// })

// //listen
// app.listen(5000, () => {
//     console.log('Server Started');
//})

const express = require('express')
const app = express()
let { people } = require('./data.js')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people});
})

app.post('/login', (req,res) => {
  const { name } = req.body;
  if(name) {
    console.log(`User ${name} Loggined`);
    return res.status(200).send(`Welcome "${name}" `);
  }
  console.log(`User Loggined Fails`);
  res.status(401).send(`Please Provide Credentials`);
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})