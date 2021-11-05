export interface MealOptionProps {
  icon: "add" | "remove";
  title: string;
  linkTo: string;

  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PouchMeal extends Omit<MealOptionProps, "onClick"> {
  _id: string;
  _rev?: string;
  key: string;
}

export const PouchDbMealName = "bm-favorites";
