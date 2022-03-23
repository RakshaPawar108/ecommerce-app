import { v4 as uuid } from "uuid";
import {
  chocolateCake,
  cinnamonRoll,
  cookies,
  croissantImg,
  muffinImg,
  chocoSundae,
  donutImg,
  iceCream,
  vanillaSundae,
  wafflesImg,
  chickenBurger,
  chickenNuggets,
  chickenPizza,
  chickenWings,
  frenchFries,
  hotDog,
  margheritaPizza,
  onionRings,
  vegBurger,
  avocadoToast,
  chickenVegSalad,
  clubHouseSandwich,
  fruitNutSalad,
  fruitSalad,
  grilledChicken,
  pastaSalad,
  kiwiJuice,
  orangeJuice,
  watermelonJuice,
  butterChicken,
  butterNaan,
  chickenBiryani,
  gajarHalwa,
  idliChutney,
  masalaDosa,
  paneerTikkaMasala,
  pavBhaji,
  sabudanaKhichdi,
  samosaImg,
  vegThali,
} from "./../../assets/images/";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    prodTitle: "Chicken Burger",
    prodImg: chickenBurger,
    price: 250,
    categoryName: "fast-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Choco Chip Cookies",
    prodImg: cookies,
    price: 150,
    categoryName: "bakery",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "20%",
  },
  {
    _id: uuid(),
    prodTitle: "Kiwi Juice",
    prodImg: kiwiJuice,
    price: 56,
    categoryName: "juices",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Hot Dogs",
    prodImg: hotDog,
    price: 120,
    categoryName: "fast-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Idli Chutney",
    prodImg: idliChutney,
    price: 80,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Fruit Salad",
    prodImg: fruitSalad,
    price: 140,
    categoryName: "healthy",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chicken Biryani",
    prodImg: chickenBiryani,
    price: 450,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Croissants",
    prodImg: croissantImg,
    price: 150,
    categoryName: "bakery",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Donuts",
    prodImg: donutImg,
    price: 60,
    categoryName: "desserts",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Samosa",
    prodImg: samosaImg,
    price: 35,
    categoryName: "indian-food",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },

  {
    _id: uuid(),
    prodTitle: "Muffins",
    prodImg: muffinImg,
    price: 220,
    categoryName: "bakery",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Pav Bhaji",
    prodImg: pavBhaji,
    price: 350,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Onion Rings",
    prodImg: onionRings,
    price: 230,
    categoryName: "fast-food",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Orange Juice",
    prodImg: orangeJuice,
    price: 55,
    categoryName: "juices",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Pesto Pasta Salad",
    prodImg: pastaSalad,
    price: 250,
    categoryName: "healthy",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Fruit and Nut Salad",
    prodImg: fruitNutSalad,
    price: 300,
    categoryName: "healthy",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chicken Wings",
    prodImg: chickenWings,
    price: 250,
    categoryName: "fast-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Masala Dosa",
    prodImg: masalaDosa,
    price: 120,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Avocado Toast",
    prodImg: avocadoToast,
    price: 120,
    categoryName: "healthy",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Vanilla Sundae",
    prodImg: vanillaSundae,
    price: 320,
    categoryName: "desserts",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "French Fries",
    prodImg: frenchFries,
    price: 175,
    categoryName: "fast-food",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Grilled Chicken",
    prodImg: grilledChicken,
    price: 280,
    categoryName: "healthy",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chocolate Cake",
    prodImg: chocolateCake,
    price: 750,
    categoryName: "bakery",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Cinnamon Roll",
    prodImg: cinnamonRoll,
    price: 160,
    categoryName: "bakery",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Club House Sandwich",
    prodImg: clubHouseSandwich,
    price: 250,
    categoryName: "healthy",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Gajar ka Halwa",
    prodImg: gajarHalwa,
    price: 230,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Cheesy Margherita Pizza",
    prodImg: margheritaPizza,
    price: 400,
    categoryName: "fast-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Belgian Waffles",
    prodImg: wafflesImg,
    price: 250,
    categoryName: "desserts",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Butter Naan",
    prodImg: butterNaan,
    price: 45,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chicken Nuggets",
    prodImg: chickenNuggets,
    price: 180,
    categoryName: "fast-food",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Sabudana Khichdi",
    prodImg: sabudanaKhichdi,
    price: 99,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Ice Cream",
    prodImg: iceCream,
    price: 65,
    categoryName: "desserts",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Paneer Tikka Masala",
    prodImg: paneerTikkaMasala,
    price: 195,
    categoryName: "indian-food",
    badgeTitle: "Bestseller",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chicken Veggie Salad",
    prodImg: chickenVegSalad,
    price: 250,
    categoryName: "healthy",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Watermelon Juice",
    prodImg: watermelonJuice,
    price: 45,
    categoryName: "juices",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Chicken Loaded Pizza",
    prodImg: chickenPizza,
    price: 450,
    categoryName: "fast-food",
    badgeTitle: "Sold Out",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Butter Chicken",
    prodImg: butterChicken,
    price: 350,
    categoryName: "indian-food",
    badgeTitle: "Bestseller",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Choco Sundae",
    prodImg: chocoSundae,
    price: 145,
    categoryName: "desserts",
    badgeTitle: "Bestseller",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Veg Thali",
    prodImg: vegThali,
    price: 250,
    categoryName: "indian-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
  {
    _id: uuid(),
    prodTitle: "Veg Burger",
    prodImg: vegBurger,
    price: 150,
    categoryName: "fast-food",
    badgeTitle: "New",
    inWishlist: false,
    prodDiscount: "50%",
  },
];
