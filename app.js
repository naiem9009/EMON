const express = require('express')
const path = require('path')
const morgan = require('morgan')
const auth_routes = require("./routes/auth.route")
const admin_routes = require('./routes/admin.route')
const app = express()

const methodOverride = require("method-override")





app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/auth', auth_routes)
app.use('/admin', admin_routes)




app.get('/', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('admin/auth/login')
})




module.exports = app




