export type GetUserFavoritesOutput = {
  _rev?: string;
  id: string;
  key?: string;
  title: string;
};

export type AddUserFavoriteOutput = {
  affected_rows: number;
};

// export type Mutation = {
//   addUserFavorite(
//     user: string,
//     title: string,
//     key: string,
//     _rev?: string
//   ): AddUserFavoriteOutput;
// };
