require('dotenv').config()

const PORT = process.env.PORT || 4000
const myApp = require('./app')



require('http').createServer(myApp).listen(PORT, () => {
    console.log(`Server is run on this port ${PORT}`);
    
})