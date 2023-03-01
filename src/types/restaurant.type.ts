export interface restaurantType {
  restaurantId: number;
  name: string;
  address: string;
  time: Time;
  slug: string;
  averageCost: number;
  // foods: number[];
  images: string;
  // category: string[];
}

export interface Time {
  open: string;
  closes: string;
}
