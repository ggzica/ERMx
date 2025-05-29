import User from '../models/user.model.js'

export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id).select('-password')

        if(!user){
            const error = new Error('User Not found')
            error.statusCode = 404
            throw error
        }

        res.status(200).json({success:true,data:user})

    }
    catch(err){
        next(err)
    }
}