export interface FavoriteOptionProps {
  icon: "add" | "remove";
  title: string;
  linkTo: string;

  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PouchFavorites extends Omit<FavoriteOptionProps, "onClick"> {
  _id: string;
  _rev?: string;
  key: string;
}
