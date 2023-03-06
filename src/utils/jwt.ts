import jwt from 'jsonwebtoken'
import { Request,Response,NextFunction } from 'express'

export const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    let token = req.headers['authorization']
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, data)=> {
        console.log('err :: :: :: :: ',{err})
        console.log('data : :: :: ::',{data})
        return res.send('error')
    } )
}