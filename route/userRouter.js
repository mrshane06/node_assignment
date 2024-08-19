import express from 'express'
import {getUser , getUserId , deleteUser , updateUser } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/', getUser)

userRouter.get('/:id', getUserId)

userRouter.delete('/:id', deleteUser)

userRouter.patch('/:id', updateUser)

export {userRouter}