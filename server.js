import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import { createJob, deleteJob, editJob, getAllJobs, getSingleJob } from './controllers/jobsControllers.js';
dotenv.config()


const app = express()
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// routers
import jobsRouter from './routes/jobRoute.js';
app.use(express.json())




app.use('/api/v1/jobs',jobsRouter)
app.use('*',(req,res) => {
    res.status(404).json({msg:'not found'})
})
app.use((err,req,res,next) => {
    console.log(err)
    res.status(500).json({msg:'something went wrong'})
})
 const port = process.env.PORT || 5001

try{
 await mongoose.connect(process.env.MONGO_URL)
 app.listen(port,() => {
    console.log(`server lisening on port ${port}`)
})
}
catch(error){
    console.log(error)
    process.exit(1)
}
