import { categoryType } from '../types/category.type';
import { CouponType } from '../types/coupons.type';
import { foodCollectionImagesType } from '../types/foodCollection.type';
import { foodItemType } from '../types/foodItem.type';
import { foodListType } from '../types/foodList.type';
import { foodtypesType } from '../types/foodtype.type';
import { menusType } from '../types/menus.type';
import { restaurantType } from '../types/restaurant.type';
import { restaurantDescriptionType } from '../types/restaurantDescription.type';

import { statesType } from '../types/states.type';
import { trandingFoodType } from '../types/trandingFoods.type';

export const states: statesType[] = [
  {
    value: 'Surat',
    label: 'Surat'
  },
  {
    value: 'Vadodara',
    label: 'Vadodara'
  },
  {
    value: 'Ahemdabad',
    label: 'Ahemdabad'
  },
  {
    value: 'Vapi',
    label: 'Vapi'
  }
];

export const restaurantImage: restaurantDescriptionType[] = [
  {
    id: 1,
    image: '/images/Rectangle 9.png',
    title: 'dinning  out',
    description: 'Explore curated lists of top restaurants'
  },
  {
    id: 2,
    image: '/images/Rectangle 7.png',
    title: 'dinning  out',
    description: 'Explore curated lists of top restaurants'
  },
  {
    id: 3,
    image: '/images/Rectangle 11.png',
    title: 'dinning  out',
    description: 'Explore curated lists of top restaurants'
  }
];

export const selectedCategory: string[] = ['Pizza', 'Sides', 'Chicken', 'Dessert', 'Drinks'];

export const foodCollectionImages: foodCollectionImagesType[] = [
  { id: 1, image: 'images/Rectangle50.png' },
  { id: 2, image: 'images/Rectangle51.png' },
  { id: 3, image: 'images/Rectangle52.png' },
  { id: 4, image: 'images/Rectangle53.png' },
  { id: 5, image: 'images/Rectangle54.png' },
  { id: 6, image: 'images/Rectangle55.png' }
];

export const tags = [
  {
    tagId: 'tag-1',
    name: 'Popular',
    slug: 'popular'
  }
];

export const restaurants: restaurantType[] = [
  {
    restaurantId: 1,
    name: `La Pino'z Pizza`,
    address: {
      city: 'Vesu',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `la-pinoz-pizza`,
    averageCost: 700,
    // foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    image: '/images/Ellipse1.png',
    category: [1, 2, 3, 4, 5, 6]
  },
  {
    restaurantId: 2,
    name: `McDonald's`,
    address: {
      city: 'Adajan',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `mcdonald's`,
    averageCost: 500,
    // foods: [17, 18, 21, 22, 23, 24, 25, 27, 28, 29, 30],
    image: '/images/Ellipse2.png',
    category: [1,7,8,9]
  },
  {
    restaurantId: 3,
    name: `Starbucks`,
    address: {
      city: 'Vesu',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `starbucks`,
    averageCost: 300,
    // foods: [22, 25, 31, 32, 33, 34, 35],
    image: '/images/Ellipse3.png',
    category: [1,10,11,12,13]
  },
  {
    restaurantId: 4,
    name: `Burger King`,
    address: {
      city: 'Athwagate',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `burger-king`,
    averageCost: 700,
    // foods: [17, 18, 19, 20, 21, 25, 26, 28, 37, 38, 39, 40],
    image: '/images/Ellipse4.png',
    category: [1,14,15,16,16]
  },
  {
    restaurantId: 5,
    name: `KFC`,
    address: {
      city: 'Athwagate',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `kfc`,
    averageCost: 800,
    // foods: [17, 18, 19, 20, 21, 36, 38, 39, 41, 42, 43, 44],
    image: '/images/Ellipse5.png',
    category: [1,18,19,20,21]
  },
  {
    restaurantId: 6,
    name: `Coffee Culture`,
    address: {
      city: 'Vesu',
      state: 'Surat',
      country: 'india'
    },
    time: {
      opentime: '11am',
      closetime: '11pm'
    },
    slug: `coffee-culture`,
    averageCost: 900,
    // foods: [26, 27, 28, 29, 41, 42, 45, 36, 38],
    image: '/images/Ellipse6.png',
    category: [1,21,22,23]
  }
];

export const category: categoryType[] = [
  {
    id: 1,
    name: 'Recommended'
  },
  {
    id: 2,
    name: 'Pizza'
  },
  {
    id: 3,
    name: 'Classic Pizzas for classic maniacs'
  },
  {
    id: 4,
    name: 'Garlic Breads'
  },
  {
    id: 5,
    name: 'Lasangna'
  },
  {
    id: 6,
    name: 'Dessert'
  },
  {
    id: 7,
    name: 'Happy Meals'
  },
  {
    id: 8,
    name: 'McCafe Coffee'
  },
  {
    id: 9,
    name: 'Beverages'
  },
  {
    id: 10,
    name: 'Hot Coffee'
  },
  {
    id: 11,
    name: 'Cold Coffee'
  },
  {
    id: 12,
    name: 'Hot Drinks'
  },
  {
    id: 13,
    name: 'Iced Teas'
  },
  {
    id: 14,
    name: 'Family Bundles'
  },
  {
    id: 15,
    name: 'Family Grilled Burgers'
  },
  {
    id: 16,
    name: 'Sides'
  },
  {
    id: 17,
    name: 'Drinks'
  },
  {
    id: 18,
    name: 'Chicken'
  },
  {
    id: 19,
    name: 'Biryani Buckets'
  },
  {
    id: 20,
    name: 'Box Meals'
  },
  {
    id: 21,
    name: 'Burgers'
  },
  {
    id: 22,
    name: 'Salad'
  },
  {
    id: 23,
    name: 'Cold Pressed Juice'
  }
];

export const foodItem: foodItemType[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 140,
    image: '/images/Rectangle115.png',
    // category: ['cat-1', 'cat-2'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 2,
    name: 'Double Cheese Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 160,
    image: '/images/Rectangle 73.png',
    // category: ['cat-1', 'cat-3', 'cat-2'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 3,
    name: 'Garden Delight Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 120,
    image: '/images/Rectangle 75.png',
    // category: ['cat-1', 'cat-2'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 4,
    name: 'Lovers Bite Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: '/images/Rectangle 77.png',
    // category: ['cat-1', 'cat-2', 'cat-3'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 5,
    name: '7 Cheesy Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 520,
    image: '/images/Rectangle115.png',
    // category: ['cat-2', 'cat-3'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 6,
    name: 'Pizza Napoletana',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: '/images/Rectangle 75.png',
    // category: ['cat-2', 'cat-3'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 7,
    name: 'Garlic Breads',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 240,
    image: '/images/Rectangle115.png',
    // category: ['cat-4'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 8,
    name: 'Veggie Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 260,
    image: '/images/Rectangle 73.png',
    // category: ['cat-4'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 9,
    name: 'Classic Corn Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 290,
    image: '/images/Rectangle 75.png',
    // category: ['cat-4'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 10,
    name: 'Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 390,
    image: '/images/Rectangle 77.png',
    // category: ['cat-4'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 11,
    name: 'Lasangna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 250,
    image: '/images/Rectangle115.png',
    // category: ['cat-5'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 12,
    name: 'Italian Sausage Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 150,
    image: '/images/Rectangle 73.png',
    // category: ['cat-5'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 13,
    name: 'Mexican Green Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 650,
    image: '/images/Rectangle 75.png',
    // category: ['cat-5'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 14,
    name: 'Veg Lasangna Rosy Red',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 299,
    image: '/images/Rectangle 77.png',
    // category: ['cat-5'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 15,
    name: 'Choco Lava',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 115,
    image: '/images/Rectangle115.png',
    // category: ['cat-6'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 16,
    name: 'Red Valvet Lava Cake',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 109,
    image: '/images/Rectangle 73.png',
    // category: ['cat-6'],
    //restaurant: 1,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 17,
    name: 'Mexican McAloo Tikki Burger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 230,
    image: '/images/Rectangle115.png',
    // category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 18,
    name: 'Vegetable Deluxe',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 450,
    image: '/images/Rectangle 73.png',
    // category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 19,
    name: 'Double Cheeseburger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 510,
    image: '/images/Rectangle 75.png',
    // category: ['cat-1', 'cat-15', 'cat-21', 'cat-20'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 20,
    name: 'Double McPlant',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: '/images/Rectangle 77.png',
    // category: ['cat-1', 'cat-15', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 21,
    name: 'Pizza Napoletana',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: '/images/Rectangle 73.png',
    // category: ['cat-14', 'cat-20', 'cat-2'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 22,
    name: 'Peppermint Mocha',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 200,
    image: '/images/Rectangle115.png',
    // category: ['cat-8', 'cat-10', 'cat-17'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 23,
    name: 'Premium Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 150,
    image: '/images/Rectangle 73.png',
    // category: ['cat-8', 'cat-17', 'cat-16'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 24,
    name: 'Espresso',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 250,
    image: '/images/Rectangle 75.png',
    // category: ['cat-8', 'cat-10'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 25,
    name: 'Caramel Iced Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 240,
    image: '/images/Rectangle 77.png',
    // category: ['cat-8', 'cat-10', 'cat-17'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 26,
    name: 'Coca-Cola',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 80,
    image: '/images/Rectangle 77.png',
    // category: ['cat-17', 'cat-23', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 27,
    name: 'Diet Coke',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: '/images/Rectangle 73.png',
    // category: ['cat-9', 'cat-23'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 28,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: '/images/Rectangle 75.png',
    // category: ['cat-9', 'cat-17', 'cat-23', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 29,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: '/images/Rectangle115.png',
    // category: ['cat-9', 'cat-23', 'cat-1', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 30,
    name: 'Nestea Iced Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: '/images/Rectangle 77.png',
    // category: ['cat-9'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },

  {
    id: 31,
    name: 'Caffe Mocha ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: '/images/Rectangle115.png',
    // category: ['cat-10', 'cat-12', 'cat-13', 'cat-17', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 32,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: '/images/Rectangle 77.png',
    // category: ['cat-10', 'cat-12', 'cat-13', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 33,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: '/images/Rectangle 73.png',
    // category: ['cat-11', 'cat-12', 'cat-13', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 34,
    name: 'Venti Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: '/images/Rectangle 75.png',
    // category: ['cat-11', 'cat-12', 'cat-13', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 35,
    name: 'Cinnamon Roll Frappuccino ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: '/images/Rectangle 77.png',
    // category: ['cat-11', 'cat-13'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 36,
    name: 'Mexican McAloo Tikki Burger',
    description: `Burger King, Home of the Whopper..`,
    price: 490,
    image: '/images/Rectangle115.png',
    // category: ['cat-14', 'cat-15', 'cat-16', 'cat-20', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 37,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 290,
    image: '/images/Rectangle 75.png',
    // category: ['cat-14', 'cat-16', 'cat-15'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 38,
    name: 'Double Stacker King.',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: '/images/Rectangle 77.png',
    // category: ['cat-14', 'cat-16', 'cat-20'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 39,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: '/images/Rectangle 77.png',
    // category: ['cat-14', 'cat-15', 'cat-16'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 40,
    name: 'Hamburger',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: '/images/Rectangle 73.png',
    // category: ['cat-16', 'cat-18'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 41,
    name: 'Mashed Potatoes and Gravy',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: '/images/Rectangle 75.png',
    // category: ['cat-18', 'cat-19', 'cat-22', 'cat-1', 'cat-21'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 42,
    name: 'Mac and Cheese',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 390,
    image: '/images/Rectangle 77.png',
    // category: ['cat-18', 'cat-19', 'cat-22', 'cat-1'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 43,
    name: 'Nashville Hot Chicken',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 530,
    image: '/images/Rectangle 77.png',
    // category: ['cat-18', 'cat-19'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 44,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 330,
    image: '/images/Rectangle115.png',
    // category: ['cat-18', 'cat-19', 'cat-22'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  },
  {
    id: 45,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 130,
    image: '/images/Rectangle115.png',
    // category: ['cat-22', 'cat-18'],
    //restaurant: 2,
    // tags: ['tag-1'],
    quantity: 0,
    // addToCart: false
  }
];

export const foodList: foodListType[] = [
  {
    id: 'food1',
    image: '/images/Rectangle 15.png',
    name: 'vadapav',
    time: 20,
    price: 30,
    itemCount: 1
  },
  {
    id: 'food2',
    image: '/images/Rectangle 16.png',
    name: 'panipuri',
    time: 20,
    price: 50,
    itemCount: 1
  },
  {
    id: 'food3',
    image: '/images/Rectangle 17.png',
    name: 'pav bhaji',
    time: 20,
    price: 150,
    itemCount: 1
  },
  {
    id: 'food4',
    image: '/images/Rectangle 18.png',
    name: 'ice-cream',
    time: 20,
    price: 70,
    itemCount: 1
  },
  {
    id: 'food5',
    image: '/images/Rectangle 19.png',
    name: 'sandwich',
    time: 20,
    price: 90,
    itemCount: 1
  },
  {
    id: 'food6',
    image: '/images/Rectangle 20.png',
    name: 'pizza',
    time: 20,
    price: 250,
    itemCount: 1
  }
];

export const trandingFood: trandingFoodType[] = [
  {
    id: 1,
    image: '/images/Rectangle 21.png',
    type: 'veggie friendly',
    places: '29 places near you'
  },
  {
    id: 2,
    image: '/images/Rectangle 23.png',
    type: 'trending this week',
    places: '29 places near you'
  },
  {
    id: 3,
    image: '/images/Rectangle 25.png',
    type: 'authentic',
    places: '29 places near you'
  }
];

export const menus: menusType[] = [
  {
    id: 1,
    image: '/images/Rectangle 33.png',
    type: 'dinning menu'
  },
  {
    id: 2,
    image: '/images/Rectangle 34.png',
    type: 'takeaway menu'
  }
];

export const coupons: CouponType[] = [
  {
    id: 1,
    name: 'FLAT100',
    type: 'FLAT',
    value: 100
  },
  {
    id: 2,
    name: 'FLATFORTY',
    type: 'PERCENTAGE',
    value: 40
  }
];
