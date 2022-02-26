import { fetchGraphQL } from "./shared/fetch";
import { GetUserFavoritesOutput } from "./shared/types";

const fetchGetUserFavorites = (user: string) => {
  const operationsDoc = `
    query getUserFavorites($user: String!) {
      favorites(where: {user: {_ilike: $user}}) {
        id
        key
        title
        _rev
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "getUserFavorites", { user: user });
};

export const getUserFavorites = async (
  user: string
): Promise<GetUserFavoritesOutput[]> => {
  const { errors, data } = await fetchGetUserFavorites(user);
  const favorites = data?.favorites || [];

  if (errors) {
    console.error(errors);
  }

  return favorites;
};

/*
query getUserFavorites($user: String) {
  favorites(where: {user: {_ilike: $user}}) {
    id
    key
    title
    _rev
  }
}
*/
