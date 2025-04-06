import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
dotenv.config()

let jobs = [
    {id:nanoid(),company:'apple', position:'front-end'},
    {id:nanoid(),company:'google', position:'back-end'},
]
const app = express()
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/',(req,res) =>
   res.json({msg:'app working',data:req.body})
)
app.get('/api/v1/jobs',(req,res) => {
    res.json(jobs)
})
app.post('/api/v1/jobs',(req,res) => {
    const {company, position} = req.body
    if(!company || !position){
        return res.status(400).json({msg:'please provide company and postion'})
    }
    const item = {id:nanoid(10),company,position}
    jobs.push(item)
    res.status(200).json({item})
})

app.get('/api/v1/jobs/:id',(req,res) => {
    const {id} = req.params
    const job = jobs.find(item=>item.id === id)
    if(!job){
        return res.status(404).json({msg:`no job with id ${id}`})
    }
    res.status(200).json({job})
})


app.patch('/api/v1/jobs/:id',(req,res) => {
    const {position,company} = req.body
   
    if(!company || !position){
        return res.status(400).json({msg:'please provide company and postion'})
    }
    const {id} = req.params
    const job = jobs.find(item=>item.id === id)
    if(!job){
        return res.status(404).json({msg:`no job with id ${id}`})
    }
    job.company = company
    job.position = position

    res.status(200).json({msg:'job modified',job})
})

app.post('/',(req,res) =>
    res.json({msg:'app working',data:req.body})
 )

 const port = process.env.PORT || 5001
app.listen(port,() => {
    console.log(`server lisening on port ${port}`)
})