import { body, param, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import { BadRequestError, NotFoundError } from '../errors/CustomError.js';
import JobModel from '../models/JobsModel.js';
import User from '../models/UserModel.js';
import { JOB_STATUS, JOB_TYPE } from '../utilis/constants.js';
const withValidattionErrors = (validateValues) =>{
    return [
        validateValues,
        (req,res,next) =>{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                const errMsg = errors.array().map((er) =>er.msg)
                throw new BadRequestError(errMsg)
            }
            next()
        }
    ]
}
export const validateTest = withValidattionErrors([
    body('name').notEmpty().withMessage('name is required').isLength({min:3}).withMessage('name must be at between 3 and 50 char long').trim()
])

export const validateJobInput = withValidattionErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
    body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('job status required'),
    body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('job type required'),
])
export const validateIdParam = withValidattionErrors([
    param('id')
        .custom( async (value) => {
            const isValidId =  mongoose.Types.ObjectId.isValid(value)
            if(!isValidId) throw new BadRequestError('invalid MongooDb id')
            const job = await JobModel.findById(value)
                if(!job){
                    throw new  NotFoundError(`No job with id ${id}`)
                }
        })
        .withMessage('invalid MongoDB id')
])

export const validateRegisterInput = withValidattionErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async (email)=>{
        const user = await User.findOne({email})
        if(user){
            throw new BadRequestError('email allready exsist')
        }
    }),
    body('password').notEmpty().withMessage('password is required'),
    body('location').notEmpty().withMessage('location is required'),
])