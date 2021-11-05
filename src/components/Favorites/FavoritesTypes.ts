export interface PouchMeal {
  _id: string;
  _rev?: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export const PouchDbMealName = "bm-favorites";

export interface MealOptionProps {
  icon: "add" | "remove";
  text: string;

  iconAriaLabel?: string;
}
