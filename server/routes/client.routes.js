import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js'
import { createClient, getAllClients } from '../controllers/clients.controller.js'
const clientRouter = Router()


clientRouter.get('/', authorize, getAllClients)


clientRouter.get('/:id', (req, res) => {
    res.send('Client by ID')
})


clientRouter.post('/', authorize, createClient)


clientRouter.put('/:id', (req, res) => {
    res.send('Update client')
})

clientRouter.delete('/:id', (req, res) => {
    res.send('Delete Client')
})


export default clientRouter