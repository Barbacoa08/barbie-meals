import { fetchGraphQL } from "./shared/fetch";

const executeRemoveFavorite = (user: string, key: string) => {
  const operationsDoc = `
    mutation removeFavorites($user: String!, $key: String!) {
      delete_favorites(where: {user: {_ilike: $user}, key: {_ilike: $key}}) {
        affected_rows
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "removeFavorites", {
    user: user,
    key: key,
  });
};

export const removeUserFavorite = async (
  user: string,
  key: string
): Promise<number> => {
  const { errors, data } = await executeRemoveFavorite(user, key);
  const { affected_rows: affectedRows = 0 } = data?.delete_favorites || {};

  if (errors) {
    console.error("removeFavorite failed with errors:", errors);
  }

  console.log(affectedRows);
  return affectedRows;
};
