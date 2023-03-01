export interface restaurantType {
  restaurantId: number;
  name: string;
  address: Address;
  time: Time;
  slug: string;
  averageCost: number;
  // foods: number[];
  image: string;
  // category: string[];
}

export interface Time {
  opentime: string;
  closetime: string;
}

export interface Address { 
  city : string,
  state : string,
  country : string
}