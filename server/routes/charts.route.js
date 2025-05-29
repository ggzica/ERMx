import { Router } from 'express'
const chartRouter = Router()


chartRouter.get('/',(req,res)=>{
    res.send('Charts')
})


chartRouter.get('/:id',(req,res)=>{
    res.send('Chart by ID')
}) 


chartRouter.post('/',(req,res)=>{
    res.send('Create new Chart')
}) 


chartRouter.put('/:id',(req,res)=>{
    res.send('Update Chart')
}) 

chartRouter.delete('/:id',(req,res)=>{
    res.send('Delete Chart')
}) 


export default chartRouter