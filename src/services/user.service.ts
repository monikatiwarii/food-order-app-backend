import {User} from '../entities/user/User.entity'
import { AppDataSource } from '../utils/data-source'
import { Request,Response } from 'express'


export const addUser = async(req:Request,res:Response)=>{
    try{

        const user = new User()
        user.email = req.body.email
        user.password = req.body.password

        await User.save(user)
        return user
        

    }
    catch(e){
        console.log(e)
        return e
    }
} 

export const fetchAllUser = async()=>{
    try{
        const users = AppDataSource.getRepository(User)
        .createQueryBuilder("users")
        .select("users")
        .getMany()

        return users
    }
    catch(e){
        console.log(e)
        return e
    }
}

export const findUserById = async(id:string)=>{
    try{
            const user = await AppDataSource
            .createQueryBuilder()
            .select("user")
            .from(User,"user")
            .where("id = :id",{id:parseInt(id)})
            .getOne()
          

            return user
    }
    catch(e){
        console.log(e)
        return e
    }
}



export const deleteUser = async(id:string)=>{
    const userData = await findUserById(id)
    console.log({userData})

    if(!userData)
        return {
            mssg: 'User not found!',
            valid: false
        }

const user  = await AppDataSource
    .getRepository(User)
    .createQueryBuilder('users')
    .delete()
    .from(User)
    .where("id = :id", { id: parseInt(id) })
    .execute()

    console.log('user------------',user)
    return {
        mssg: 'User Deleted!',
        valid: true
    }
}
