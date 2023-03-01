export interface brandsDataType {
    id: number
    image: string
    name: string
    items: string
    cost: string
    address: string
    time: string
    slug:string
    types: Type[]
  }
  
  export interface Type {
    id: string
    name: string
    title: string
    list: List[]
  }
  
  export interface List {
    id: string
    image: string
    name: string
    price: number
    sentance: string
    addToCart: boolean
    itemCount: number
  }