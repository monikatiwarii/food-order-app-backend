import { Timestamp } from "typeorm"

export interface IParamUpdateRestaurant{
    name: string
    image: string
    time: ITime
    address: IAddress
    slug: string
    price: number
    menu: string[]
    images: string
  }

interface ITime {
    opentime: string
    closetime: string
}

interface IAddress {
    city: string;
    state: string;
    country: string;
}