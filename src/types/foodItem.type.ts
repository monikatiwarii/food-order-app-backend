export interface foodItemType {
  foodId: number;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string[];
  restaurant: number;
  tags: string[];
  quantity: number;
  addToCart: boolean;
}
