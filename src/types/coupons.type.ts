export interface CouponType {
  id: number;
  name: string;
  type: string;
  value: number;
}

export interface IParamCoupon {
  name: string,
  type: ECouponTypes,
  value: number
}

export enum ECouponTypes {
  "PERCENTAGE"= "PERCENTAGE",
  "FLAT"= "FLAT"
}

export type IFindCouponFnRetValType = IFindCouponFnRetVal | null

export interface IFindCouponFnRetVal {
  "id": number,
  "name": string,
  "type": string,
  "value": number
}