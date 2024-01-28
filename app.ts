import express, { Request, Response } from "express"
import path from "path"
import morgan from "morgan"
import auth_routes from "./routes/auth.route"
import admin_routes from "./routes/admin.route"
const app = express()

import methodOverride from "method-override"




app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');



app.use('/auth', auth_routes)
app.use('/admin', admin_routes)




app.get('/', (req:Request, res:Response) => {
    res.render('index')
})
app.get('/login', (req:Request, res:Response) => {
    res.render('admin/auth/login')
})




module.exports = app




