export interface IAddToCart {
    id: number
    action: number
  }


export interface ICartRetUpdatedValue {
    "id": number,
    "created_at": Date,
    "updated_at": Date,
    "quantity": number,
    "fooditem": IGetFoodItem
}

export interface IGetFoodItem {
    "id": number,
    "created_at": Date,
    "updated_at": Date,
    "name": string,
    "description": string,
    "price": number,
    "image": string
}

export type ICartRetUpdatedValueType = ICartRetUpdatedValue | null
export type IFetchCartDataType = ICartRetUpdatedValue[] | null
export type IFindCartDataType = IFindCartData | null

export interface IFindCartData {
    id: number,
    created_at: Date,
    updated_at: Date,
    quantity: number
}

export interface ICartData {
    quantity: number,
    fooditem: number,
    user: number
} 