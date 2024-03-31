import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"; 

import dotenv from "dotenv"

dotenv.config({
    path : "../config/.env"
})


export const Register = async (req , res)=>{
        try{
            const {name , username , email , password} = req.body ; 
            // basic validation 
            if(!name || !username || !email || !password){
                return res.status(401).json({
                    message : "ALL fields are required ." ,
                    success : false 
                })
            }
          
            const user = await User.findOne({email}) ; 
            if(user){
                return res.status(401).json({
                    message : "User already exists" , 
                    success : false
                })
            }

            const hashedPassword = await bcryptjs.hash(password , 10) ; 

            await User.create({
                name ,
                username ,
                email , 
                password : hashedPassword 
            }) ;

            return res.status(201).json({
                message : "Account created successfully ." ,
                success : true
            })
        }catch(error){
            console.log(error) ;
        }
}

export const Login = async(req , res)=>{
    try{
        const {email , password} =  req.body ; 
        if(!email || !password){
            return res.status(401).json({
                message : "All fields are required. " ,
                success : false 
            })
        } 

        const user = await User.findOne({email}) ; 
        if(!user){
            return res.status(401).json({
                message : "User does not exists with this email ." ,
                success : false 
            })
        }

        const isMatch = await bcryptjs.compare(password , user.password , ) ; 
        if(!isMatch){
            return res.status(401).json({
                message : "Incorrect email or password" , 
                success : false
            })
        }
        
        const tokenData = { 
            userId : user._id
        }
        const token = await jwt.sign({tokenData} , process.env.TOKEN_SECRET , {expiresIn : "1d"})
        return res.status(201).cookie("token" , token , {expiresIn : "1d" , httpOnly : true}).json({
            message : `Welcome back ${user.name}` ,
            success : true
        }) 
    }catch(error){
        console.log(error) ; 
    }
}

export const logout = (req,res)=>{
    return res.cookie("token" , "" , {expiresIn : new Date(Date.now())}).json({
        message : "user logged out successfully ." ,
        success : true 
    })
}

export const bookmark = async(req, res) => {
    try{
    const LoggedInUserId = req.body.id ; 
    const tweetId = req.params.id ;
    const user = await User.findById(LoggedInUserId) ; 

    if(user.bookmarks.includes(tweetId)){
        //remove
        await User.findByIdAndUpdate(LoggedInUserId , {$pull : {bookmarks : tweetId}})
        return res.status(200).json({
            message : "Removed from bookmarks ."
        })
    }else{
        await User.findByIdAndUpdate(LoggedInUserId , {$push : {bookmarks : tweetId}})
        return res.status(200).json({
            message : "Saved to bookmarks ."
        })
    }
    }catch(error){
        console.log(error) ; 
    }
}

export const getMyProfile = async(req,res)=>{
    try{
    const id = req.params.id ; 
    const user = await User.findById(id).select("-password") ; 
    return res.status(200).json({
        user ,
    })

    } catch(error){
        console.log(error);
    }
}

