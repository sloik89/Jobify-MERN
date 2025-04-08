
import bcrypt from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import User from '../models/UserModel.js'
import { hashedPswd } from '../utilis/hashPswd.js'
export const register = async (req,res) => {
    const isFirst = await User.countDocuments() === 0
    const newUser = req.body
    if(isFirst){
        newUser.role = 'admin'
    }
   
    const hashedPassword = await hashedPswd(newUser.password)
    console.log(hashedPassword)
    newUser.password = hashedPassword
    const user = await User.create(newUser)
    res.status(StatusCodes.CREATED).json({user})
    
}
export const login = async (req,res) => {
    res.send('login')
}