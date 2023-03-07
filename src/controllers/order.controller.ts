import { fetchAllOrder,findOrderById,findOrderByUserId } from "../services/order.service";
import { Request,Response } from "express";


export const allOrderList = async(req:Request,res:Response)=>{
    try{

        const orders = await fetchAllOrder()

        res.status(200).send({message:"All order",data:orders})

    }catch(e){

        return res.status(500).send({message:e.message})
    }
}

export const orderDatabyId = async(req:Request,res:Response)=>{
    try{
        const order = findOrderById(req.params.id)

        res.status(200).send({message:'order data',data:order})

    }catch(e){
        return res.status(500).send({message:e.message})
    }
}

export const orderDataByUserId = async(req:Request,res:Response)=>{

    try{
        const order = findOrderById(req.body.id)

        res.status(200).send({message:'order data',data:order})

    }catch(e){
        return res.status(500).send({message:e.message})
    }
}