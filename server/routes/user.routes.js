import { Router } from 'express'
import { getUser } from '../controllers/user.controller.js'
import authorize from '../middlewares/auth.middleware.js'

const userRouter = Router()




userRouter.get('/:id', authorize, getUser) 


userRouter.post('/',(req,res)=>{
    res.send('Create new User')
}) 


userRouter.put('/:id',(req,res)=>{
    res.send('Update User')
}) 

userRouter.delete('/:id',(req,res)=>{
    res.send('Delete User')
}) 

export default userRouter

