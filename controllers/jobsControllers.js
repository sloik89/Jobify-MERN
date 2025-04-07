import { StatusCodes } from 'http-status-codes';
import { nanoid } from 'nanoid';
import { NotFoundError } from '../errors/CustomError.js';
import JobModel from '../models/JobsModel.js';
let jobs = [
    {id:nanoid(),company:'apple', position:'front-end'},
    {id:nanoid(),company:'google', position:'back-end'},
]
export const getAllJobs = async(req,res) =>{
    const items = await JobModel.find({})
    res.status(StatusCodes.OK).json(items)
}

export const createJob = async(req,res) =>{
   const {company, position} = req.body
       if(!company || !position){
           return res.status(400).json({msg:'please provide company and postion'})
       }
      
       const item = await JobModel.create({company,position})
       jobs.push(item)
       res.status(StatusCodes.CREATED).json({item})
}

export const getSingleJob = async(req,res) =>{
    const {id} = req.params
    console.log(id)
    const job = await JobModel.findById(String(id))
    if(!job){
        throw new  NotFoundError(`No job with id ${id}`)
    }
    res.status(StatusCodes.OK).json({job})
 }
 
 export const deleteJob = async(req,res) =>{
    const {id} = req.params
    const removedJob = await JobModel.findByIdAndDelete(id)
    if(!removedJob){
        throw new  NotFoundError(`No job with id ${id}`)
    }
    
    res.status(200).json({msg:`job with ${removedJob._id} deleted`})
 }
 
 export const editJob = async(req,res) =>{
    const {position,company} = req.body
   
    if(!company || !position){
        return res.status(400).json({msg:'please provide company and postion'})
    }
    const {id} = req.params
    const job = await JobModel.findByIdAndUpdate(id,{position,company},{new:true})
    if(!job){
        throw new  NotFoundError(`No job with id ${id}`)
    }


    res.status(200).json({msg:'job modified',job})
 }
 