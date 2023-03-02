import {User} from '../entities/user/User.entity'
import { AppDataSource } from '../utils/data-source'

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