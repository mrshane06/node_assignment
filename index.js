import express from 'express'
import cors from 'cors'
import { userRouter } from './route/userRouter.js'

let port = process.env.PORT || 2020
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})