import User from '../model/User.model.js'
import jwt from 'jsonwebtoken'
export const signup = async (req,res) =>{
    try {
        const {name,email,password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        const newUser = new User({name,email,password})
        await newUser.save()
        res.status(201).json({message:"User registered successfully",user:{
            _id:newUser._id,
            name:newUser.name, 
            email:newUser.email
        }})
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message:"Internal server error"})   
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body 
        const user = await User.findOne({email})
        if(!user || password !== user.password){
            return res.status(400).json({message:"Invalid user"})
        }else{
            const token = jwt.sign({id:user._id, name: user.name, email: user.email},
                "Secret",
                {expiresIn : '10m'}
            )
            res.status(201).json({message:"Login Successful",token})
        }
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({message:"Internal server error"})   
    }
}