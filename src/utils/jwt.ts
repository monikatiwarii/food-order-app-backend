import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
const jwtKey = "food_order_key"//process.env.JWT_SECRET_KEY;

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {

    let token = req.headers['authorization'];

    if (token) {
        token = token.split(' ')[1]
        jwt.verify(token, jwtKey, (err, data) => {
    
          if (err) return res.status(401).send('Provide valid token');
          else {
            req['user_id'] = data['user_id']
            next();
            
          } 
        })
      } else {
        res.status(403).send('Add token with header');
      }
  }
  