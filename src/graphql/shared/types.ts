export type GetUserFavoritesOutput = {
  title: string;
  key: string;
  user: string;
  id: string;
  uri: string;
};

export interface AddUserFavoriteResult {
  title: string;
  key: string;
  user: string;
  id: string;
  uri: string;
}
export type AddUserFavoriteOutput = {
  affected_rows: number;
  returning: AddUserFavoriteResult[];
};

// export type Mutation = {
//   removeFavoriteById(id: string): RemoveFavoriteByIdOutput;
// };
