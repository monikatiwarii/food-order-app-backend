import {User} from '../entities/user/User.entity'
import { AppDataSource } from '../utils/data-source'
import { Request,Response } from 'express'
import { IResponse } from '../types/response.type'
import { Error, Success } from '../utils/restResponse'


export const addUser = async(bodyData : any): Promise<IResponse>  =>{
    try{

        let param  = bodyData
        const user = new User()
        user.email = param.email
        user.password = param.password

        await User.save(user)
        return Success('User Added!', user) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
} 

export const fetchAllUser = async() : Promise<IResponse> =>{
    try{
        const users = AppDataSource.getRepository(User)
        .createQueryBuilder("users")
        .select("users")
        .getMany()

        if(!users)
            return Error('No User Found!', [], 404)
        else
        return Success('User List!', users) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
}

export const findUserById = async(id:string) : Promise<IResponse>=>{
    try{
        const user = await AppDataSource
        .createQueryBuilder()
        .select("user")
        .from(User,"user")
        .where("id = :id",{id:parseInt(id)})
        .getOne()
        
        if(!user)
             return Error('No User Found!', [], 404)
        else
            return Success('User List!', user) 
    }
    catch(e){
        console.log(e)
        return Error(e.message)
    }
}



export const deleteUser = async(id:string) : Promise<IResponse> =>{
 
 try{
    const userData = await findUserById(id)
   
    if(!userData){
        return Error('No User Found!', [], 404)
    }
    else{
        const user  = await AppDataSource
        .getRepository(User)
        .createQueryBuilder('users')
        .delete()
        .from(User)
        .where("id = :id", { id: parseInt(id) })
        .execute()
    
        return Success('User Deleted!') 
    }
        
 }catch(e){
    console.log(e)
    return Error(e.message)
 } 
   
}
