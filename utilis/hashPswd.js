import bcrypt from "bcryptjs"
export const hashedPswd = async(pswd) =>{
    const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(pswd,salt)
     return hashedPassword
}