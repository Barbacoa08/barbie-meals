export type GetUserFavoritesOutput = {
  _rev?: string;
  id: string;
  key?: string;
  title: string;
};

export interface AddUserFavoriteResult {
  id: string;
  key: string;
  title: string;
  user: string;
}
export type AddUserFavoriteOutput = {
  affected_rows: number;
  returning: AddUserFavoriteResult[];
};

// export type Mutation = {
//   addUserFavorite(
//     user: string,
//     title: string,
//     key: string,
//     _rev?: string
//   ): AddUserFavoriteOutput;
// };

export type RemoveFavoriteByIdOutput = {
  id: string;
};

// export type Mutation = {
//   removeFavoriteById(id: string): RemoveFavoriteByIdOutput;
// };
