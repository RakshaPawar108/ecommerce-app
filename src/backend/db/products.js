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
  },
  {
    _id: uuid(),
    prodTitle: "Choco Chip Cookies",
    prodImg: cookies,
    price: 150,
    categoryName: "bakery",
  },
  {
    _id: uuid(),
    prodTitle: "Kiwi Juice",
    prodImg: kiwiJuice,
    price: 56,
    categoryName: "juices",
  },
];
