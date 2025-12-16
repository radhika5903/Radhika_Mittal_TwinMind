import {User} from "../model/user.model.js"
import config from "../config.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const signup= async (req,res)=>{
 //destructuring js use here
    const {firstName,lastName,email,password}=req.body;
   // console.log(firstName,lastName,email,password);
    //isko parse karna padega nahi toh destructure property ko allow nahi karega
    try {
        const user=await User.findOne({email:email});
        if(user){
            return res.status(401).json({errors:"User already exist"});
        }
        const hashpassword=await bcrypt.hash(password,10);

        const newuser=new User({
            firstName,
            lastName,
            email,
            password:hashpassword,
        });
        await newuser.save();
        return res.status(201).json({message:"User signup succeeded"});
        
    } catch (error) {
        console.log("Error in signup: ",error);
        return res.status(500).json({errors:"Error in signup"}); 
    }
}

export const login=async (req,res) => {
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(403).json({errors:"Invalid Credentials"})
        }
         const isPasswordCorrect=await bcrypt.compare(password,user.password);
          if(!isPasswordCorrect){
            return res.status(403).json({errors:"Invalid Credentials"})
        }
        //jwt code
        const token=jwt.sign({id:user._id},config.JWT_USER_PASSWORD,{
            expiresIn:"1d"
        });
        const cookiesOptions={
            expires:new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"Strict"
            //frontend mai use hoga cookie ka
        }
        res.cookie("jwt",token,cookiesOptions);
        return res.status(201)
        .json({message:"User Login Successful",user,token});
    } catch (error) {
         console.log("Error in login: ",error);
        return res.status(500).json({errors:"Error in login"});
    }
}


export const logout=(req,res)=>{
    try {
        res.clearCookie("jwt")
        return res.status(201)
        .json({message:"User logout Successful"});
    } catch (error) {
         console.log("Error in logout: ",error);
        return res.status(500).json({errors:"Error in logout"});
    }
}