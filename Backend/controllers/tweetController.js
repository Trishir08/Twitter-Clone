import { Tweet } from "../models/tweetSchema";

export const createTweet = async(req , res)=>{
    try{
        const {description , id} = req.body ; 
        if(!description || !id){
            res.status(401).json({
                message : "Fields are required" , 
                success : false 
            })
        }
        await Tweet.create({
            description , 
            userId : id 
        })
        return res.status(201).json({
            message : "Tweet created successfully" , 
            success: true
        })
    }catch(error){

    }
}

export const deleteTweet = async(req , res)=>{
    try{
        const {id} = req.params ; 
        await Tweet.findByIdAndDelete(id) ; 
        return res.status(201).json({
            message : "Tweet deleted successfully. " ,
            success : true 
        })
    }catch(error){
        console.log(error) ; 
    }
}


export const likeOrDislike = async(req, res) => {
    try{
    const LoggedInUserId = req.body.id ; 
    const tweetId = req.params.id ;
    const tweet  = await Tweet.findById(tweetId) ; 
    if(tweet.like.includes(LoggedInUserId)){
        //make it dislike 
        await Tweet.findByIdAndUpdate(tweetId ,{$pull : {like : LoggedInUserId}}) ;
        return res.status(200).json({
            message : " User disliked your tweet . " ,
            //success : true 
        })
    }else{
        //like
        await Tweet.findByIdAndUpdate(tweetId ,{$push : {like : LoggedInUserId}}) ;
        return res.status(200).json({
            message : " User liked your tweet . " ,
           // success : true 
        })
    }
    }catch(error){
        console.log(error) ; 
    }
}