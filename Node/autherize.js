const autherize = (req, res, next) => {
    console.log('autherize middlerware triggered')
    const { user } = req.query
    const { pswd } = req.query
    // login with user=root & pswd = 1234
    // http://localhost:5000/api/v1/?user=root&pswd=1234
    if (user === 'root' && pswd === '1234' ) {
        req.user = { name: 'yash',  id: 1 }
        console.log('Autherize Successfully')
        next()
    } 
    else {
        res.status(401).send('Unautherize')
    }
}

module.exports = autherize;