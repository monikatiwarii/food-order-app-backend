import { categoryType } from '../types/category.type';
import { CouponType } from '../types/coupons.type';
import { foodCollectionImagesType } from '../types/foodCollection.type';
import { foodItemType } from '../types/foodItem.type';
import { foodListType } from '../types/foodList.type';
import { foodtypesType } from '../types/foodtype.type';
import { menusType } from '../types/menus.type';
import { restaurantType } from '../types/restaurant.type';
import { restaurantImageType } from '../types/restaurantImage.type';
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

export const restaurantImage: restaurantImageType[] = [
  {
    id: 'res1',
    image: '/images/Rectangle 9.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
  },
  {
    id: 'res2',
    image: '/images/Rectangle 7.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
  },
  {
    id: 'res3',
    image: '/images/Rectangle 11.png',
    title: 'dinning  out',
    details: 'Explore curated lists of top restaurants'
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
    address: 'Vesu,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `la-pinoz-pizza`,
    averageCost: 700,
    // foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    images: '/images/Ellipse1.png',
    // category: ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6']
  },
  {
    restaurantId: 2,
    name: `McDonald's`,
    address: 'Adajan,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `mcdonald's`,
    averageCost: 500,
    // foods: [17, 18, 21, 22, 23, 24, 25, 27, 28, 29, 30],
    images: '/images/Ellipse2.png',
    // category: ['cat-1', 'cat-7', 'cat-8', 'cat-9']
  },
  {
    restaurantId: 3,
    name: `Starbucks`,
    address: 'Vesu,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `starbucks`,
    averageCost: 300,
    // foods: [22, 25, 31, 32, 33, 34, 35],
    images: '/images/Ellipse3.png',
    // category: ['cat-1', 'cat-10', 'cat-11', 'cat-12', 'cat-13']
  },
  {
    restaurantId: 4,
    name: `Burger King`,
    address: 'Athwagate,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `burger-king`,
    averageCost: 700,
    // foods: [17, 18, 19, 20, 21, 25, 26, 28, 37, 38, 39, 40],
    images: '/images/Ellipse4.png',
    // category: ['cat-1', 'cat-14', 'cat-15', 'cat-16', 'cat-17']
  },
  {
    restaurantId: 5,
    name: `KFC`,
    address: 'Athwagate,Surat',
    time: {
      open: '11am',
      closes: '11pm'
    },
    slug: `kfc`,
    averageCost: 800,
    // foods: [17, 18, 19, 20, 21, 36, 38, 39, 41, 42, 43, 44],
    images: '/images/Ellipse5.png',
    // category: ['cat-1', 'cat-18', 'cat-19', 'cat-20', 'cat-21']
  },
  {
    restaurantId: 6,
    name: `Coffee Culture`,
    address: 'Vesu,Surat',
    time: {
      open: '11',
      closes: '11'
    },
    slug: `coffee-culture`,
    averageCost: 900,
    // foods: [26, 27, 28, 29, 41, 42, 45, 36, 38],
    images: '/images/Ellipse6.png',
    // category: ['cat-1', 'cat-21', 'cat-22', 'cat-23']
  }
];

export const category: categoryType[] = [
  {
    categoryId: 'cat-1',
    name: 'Recommended'
  },
  {
    categoryId: 'cat-2',
    name: 'Pizza'
  },
  {
    categoryId: 'cat-3',
    name: 'Classic Pizzas for classic maniacs'
  },
  {
    categoryId: 'cat-4',
    name: 'Garlic Breads'
  },
  {
    categoryId: 'cat-5',
    name: 'Lasangna'
  },
  {
    categoryId: 'cat-6',
    name: 'Dessert'
  },
  {
    categoryId: 'cat-7',
    name: 'Happy Meals'
  },
  {
    categoryId: 'cat-8',
    name: 'McCafe Coffee'
  },
  {
    categoryId: 'cat-9',
    name: 'Beverages'
  },
  {
    categoryId: 'cat-10',
    name: 'Hot Coffee'
  },
  {
    categoryId: 'cat-11',
    name: 'Cold Coffee'
  },
  {
    categoryId: 'cat-12',
    name: 'Hot Drinks'
  },
  {
    categoryId: 'cat-13',
    name: 'Iced Teas'
  },
  {
    categoryId: 'cat-14',
    name: 'Family Bundles'
  },
  {
    categoryId: 'cat-15',
    name: 'Family Grilled Burgers'
  },
  {
    categoryId: 'cat-16',
    name: 'Sides'
  },
  {
    categoryId: 'cat-17',
    name: 'Drinks'
  },
  {
    categoryId: 'cat-18',
    name: 'Chicken'
  },
  {
    categoryId: 'cat-19',
    name: 'Biryani Buckets'
  },
  {
    categoryId: 'cat-20',
    name: 'Box Meals'
  },
  {
    categoryId: 'cat-21',
    name: 'Burgers'
  },
  {
    categoryId: 'cat-22',
    name: 'Salad'
  },
  {
    categoryId: 'cat-23',
    name: 'Cold Pressed Juice'
  }
];

export const foodItem: foodItemType[] = [
  {
    foodId: 1,
    name: 'Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 140,
    image: ['/images/Rectangle115.png'],
    category: ['cat-1', 'cat-2'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 2,
    name: 'Double Cheese Margherita Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 160,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-1', 'cat-3', 'cat-2'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 3,
    name: 'Garden Delight Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 120,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-1', 'cat-2'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 4,
    name: 'Lovers Bite Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-1', 'cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 5,
    name: '7 Cheesy Pizza',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 520,
    image: ['/images/Rectangle115.png'],
    category: ['cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 6,
    name: 'Pizza Napoletana',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 220,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-2', 'cat-3'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 7,
    name: 'Garlic Breads',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 240,
    image: ['/images/Rectangle115.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 8,
    name: 'Veggie Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 260,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 9,
    name: 'Classic Corn Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 290,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 10,
    name: 'Stuffed Garlic Bread',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-4'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 11,
    name: 'Lasangna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 250,
    image: ['/images/Rectangle115.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 12,
    name: 'Italian Sausage Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 150,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 13,
    name: 'Mexican Green Lasagna',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 650,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 14,
    name: 'Veg Lasangna Rosy Red',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 299,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-5'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 15,
    name: 'Choco Lava',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 115,
    image: ['/images/Rectangle115.png'],
    category: ['cat-6'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 16,
    name: 'Red Valvet Lava Cake',
    description: `A Classic Cheesy Margharita. Can't Go Wrong.`,
    price: 109,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-6'],
    restaurant: 1,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 17,
    name: 'Mexican McAloo Tikki Burger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 230,
    image: ['/images/Rectangle115.png'],
    category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 18,
    name: 'Vegetable Deluxe',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 450,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-1', 'cat-7', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 19,
    name: 'Double Cheeseburger',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 510,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-1', 'cat-15', 'cat-21', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 20,
    name: 'Double McPlant',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-1', 'cat-15', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 21,
    name: 'Pizza Napoletana',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 380,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-14', 'cat-20', 'cat-2'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 22,
    name: 'Peppermint Mocha',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 200,
    image: ['/images/Rectangle115.png'],
    category: ['cat-8', 'cat-10', 'cat-17'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 23,
    name: 'Premium Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 150,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-8', 'cat-17', 'cat-16'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 24,
    name: 'Espresso',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 250,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-8', 'cat-10'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 25,
    name: 'Caramel Iced Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 240,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-8', 'cat-10', 'cat-17'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 26,
    name: 'Coca-Cola',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 80,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-17', 'cat-23', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 27,
    name: 'Diet Coke',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-9', 'cat-23'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 28,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-9', 'cat-17', 'cat-23', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 29,
    name: 'Fruitopia Orange Groove',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle115.png'],
    category: ['cat-9', 'cat-23', 'cat-1', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 30,
    name: 'Nestea Iced Tea',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-9'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },

  {
    foodId: 31,
    name: 'Caffe Mocha ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle115.png'],
    category: ['cat-10', 'cat-12', 'cat-13', 'cat-17', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 32,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-10', 'cat-12', 'cat-13', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 33,
    name: 'Blonde Vanilla Latte ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 270,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-11', 'cat-12', 'cat-13', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 34,
    name: 'Venti Coffee',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 170,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-11', 'cat-12', 'cat-13', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 35,
    name: 'Cinnamon Roll Frappuccino ',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-11', 'cat-13'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 36,
    name: 'Mexican McAloo Tikki Burger',
    description: `Burger King, Home of the Whopper..`,
    price: 490,
    image: ['/images/Rectangle115.png'],
    category: ['cat-14', 'cat-15', 'cat-16', 'cat-20', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 37,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 290,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-14', 'cat-16', 'cat-15'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 38,
    name: 'Double Stacker King.',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-14', 'cat-16', 'cat-20'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 39,
    name: 'Double Whopper',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-14', 'cat-15', 'cat-16'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 40,
    name: 'Hamburger',
    description: `Burger King, Home of the Whopper..`,
    price: 390,
    image: ['/images/Rectangle 73.png'],
    category: ['cat-16', 'cat-18'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 41,
    name: 'Mashed Potatoes and Gravy',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 190,
    image: ['/images/Rectangle 75.png'],
    category: ['cat-18', 'cat-19', 'cat-22', 'cat-1', 'cat-21'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 42,
    name: 'Mac and Cheese',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 390,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-18', 'cat-19', 'cat-22', 'cat-1'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 43,
    name: 'Nashville Hot Chicken',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 530,
    image: ['/images/Rectangle 77.png'],
    category: ['cat-18', 'cat-19'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 44,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 330,
    image: ['/images/Rectangle115.png'],
    category: ['cat-18', 'cat-19', 'cat-22'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
  },
  {
    foodId: 45,
    name: 'Extra Crispy Tenders',
    description: `Some fun, some food, it's all inside this Happy Meal.`,
    price: 130,
    image: ['/images/Rectangle115.png'],
    category: ['cat-22', 'cat-18'],
    restaurant: 2,
    tags: ['tag-1'],
    quantity: 0,
    addToCart: false
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
