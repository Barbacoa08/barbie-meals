import { fetchGraphQL } from "./shared/fetch";
import { GetUserFavoritesOutput } from "./shared/types";

const fetchGetUserFavorites = (user: string) => {
  const operationsDoc = `
    query getUserFavorites($user: String!) {
      favorites(where: {user: {_ilike: $user}}) {
        title
        key
        user
        id
        uri
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
    console.error("getUserFavorites failed with errors:", errors);
  }

  return favorites;
};
