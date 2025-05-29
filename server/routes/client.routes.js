import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js'
import { createClient } from '../controllers/clients.controller.js'
const clientRouter = Router()


clientRouter.get('/',(req,res)=>{
    res.send('Clients')
})


clientRouter.get('/:id',(req,res)=>{
    res.send('Client by ID')
}) 


clientRouter.post('/',authorize, createClient) 


clientRouter.put('/:id',(req,res)=>{
    res.send('Update client')
}) 

clientRouter.delete('/:id',(req,res)=>{
    res.send('Delete Client')
}) 


export default clientRouter