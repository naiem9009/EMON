import express, { Request, Response } from "express"
import path from "path"
import auth_routes from "./routes/auth.route"
const app = express()

import methodOverride from "method-override"




app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');



app.use('/auth', auth_routes)




app.get('/', (req:Request, res:Response) => {
    res.render('index')
})
app.get('/login', (req:Request, res:Response) => {
    res.render('admin/auth/login')
})




module.exports = app




