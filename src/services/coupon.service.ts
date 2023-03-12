import { AppDataSource } from "../utils/data-source"
import { Success, Error } from "../utils/restResponse"
import { Request, Response } from "express"
import { IRespObj, IResponse } from "../types/response.type"
import { Coupons } from "../entities/order/coupons.entity"
import { ECouponTypes, IFindCoupon, IParamCoupon } from "../types/coupons.type"

export const addCoupon = async (req: Request): Promise<IResponse> => {
  try {
        let param: IParamCoupon = req.body

        let FindCouponData = await findCouponFn(param.name)

        if(!!FindCouponData)
            return Error('Coupon with same name already Exists!', [], 409)

        const CouponData = Coupons.create(param)
        await Coupons.save(CouponData);
        return Success('Coupon Added!', CouponData)
    } catch (e) {
        console.log(e)
        return Error(e.message)
    }
}

export const fetchCouponData = async (name: string): Promise<IResponse> => {
  try {
    const findCoupon = await findCouponFn(name)

    if (!findCoupon)
      return Error('No Coupon Found!', [], 404)
    else
      return Success('Coupon List!', findCoupon)
  } catch (e) {
    console.log(e)
    return Error(e.message)
  }
}

export const updateCoupon = async (req: Request): Promise<IResponse> => {
    try {

        let couponId =  req.params.couponId

        let FindCouponData = await findCouponFn(parseInt(couponId))

        if(!FindCouponData)
            return Error('Coupon does not Exists!', [], 409)

        let param : IParamCoupon = req.body
        const CouponData = Coupons
        .createQueryBuilder()
        .update()
        .set({
            name: param.name,
            type: param.type,
            value: param.value
        })
        .where("id= :id", {id: couponId})
        .execute()

        return Success('Coupon Updated!', CouponData)
    } catch (e) {
        console.log(e)
        return Error(e.message)
    }
}

export const findCouponFn = async (couponVal: string | number): Promise<IFindCoupon> => {

    let whereString = typeof couponVal === 'string' ? 'name' : 'id'

    try {
        const findCoupon = await AppDataSource
          .createQueryBuilder()
          .select("coupons")
          .from(Coupons, "coupons")
          .where(`coupons.${whereString} = :val`, { val: couponVal })
          .getOne()
        return findCoupon
    } catch (e) {
        console.log(e)
        return null
    }
}
