import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "healthy",
    description:
      "Delicious and protein-rich healthy food to make sure you stay consistent with your diet while eating good food.",
  },
  {
    _id: uuid(),
    categoryName: "indian-food",
    description: "Delicacies of India from various states for the desi heart.",
  },
  {
    _id: uuid(),
    categoryName: "fast-food",
    description: "Finger foods for the cheat days to curb the cravings.",
  },
  {
    _id: uuid(),
    categoryName: "desserts",
    description: "Sweeeeeettttt!....need I say more?",
  },
  {
    _id: uuid(),
    categoryName: "bakery",
    description: "For the love of all things baked and bread.",
  },
  {
    _id: uuid(),
    categoryName: "juices",
    description: "To detox or get refreshed with the sweetness of fruits.",
  },
];
