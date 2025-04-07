import 'express-async-errors';

import * as dotenv from 'dotenv';
import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import { createJob, deleteJob, editJob, getAllJobs, getSingleJob } from './controllers/jobsControllers.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { validateTest } from './middleware/validationMiddleware.js';
dotenv.config()


const app = express()
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// routers
import jobsRouter from './routes/jobRoute.js';
app.use(express.json())




app.use('/api/v1/jobs',jobsRouter)
app.post('/api/v1/test',validateTest,(req,res)=>{
    res.json({msg:'test'})
})
app.use('*',(req,res) => {
    res.status(404).json({msg:'not found'})
})
// Error handler middleware
app.use(errorHandlerMiddleware)
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
