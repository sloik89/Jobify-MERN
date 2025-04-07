import mongoose from "mongoose";

const JobModel = new mongoose.Schema({
    company:String,
    position:String,
    jobStatus:{
        type:String,
        enum:['pending','declined','interview'],
        default:'pending'
    },
    jobType:{
        type:String,
        enum:['full-time','part-time','intership'],
        default:'full-time'
    },
    jobLocation:{
        type:String,
        default:'my time'
    }



},{timestamps:true})

export default mongoose.model('Job',JobModel)