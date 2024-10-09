import express, {Express} from 'express'
import cookieParser from "cookie-parser"
import connectToMongo  from './config/dbConfig'

import 'dotenv/config'
import userController from './controllers/userController'
import todoController from './controllers/todoController'

const app:Express = express()
connectToMongo()

app.use(express.json()) // to get the req.body
app.use(cookieParser()) // to get the 
app.use('/users',userController)
app.use('/todos',todoController)

app.listen(process.env.PORT , () => console.log(
    `Server is up and running, feel free to visit at http://localhost:${process.env.PORT}`
))