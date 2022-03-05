import { fetchGraphQL } from "./shared/fetch";
import { AddUserFavoriteOutput, AddUserFavoriteResult } from "./shared/types";

function executeAddUserFavorite(
  title: string,
  key: string,
  user: string,
  id: string,
  uri: string
) {
  const operationsDoc = `
    mutation addUserFavorite($title: String!, $key: String!, $user: String!, $id: String!, $uri: String!) {
      insert_favorites(objects: {title: $title, key: $key, user: $user, id: $id, uri: $uri}) {
        affected_rows
        returning {
          title
          key
          user
          id
          uri
        }
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "addUserFavorite", {
    title,
    key,
    user,
    id,
    uri,
  });
}

export const addUserFavorite = async (
  title: string,
  key: string,
  user: string,
  id: string,
  uri: string
): Promise<AddUserFavoriteResult> => {
  const { errors, data } = await executeAddUserFavorite(
    title,
    key,
    user,
    id,
    uri
  );
  const { affected_rows: affectedRows, returning = [] }: AddUserFavoriteOutput =
    data?.insert_favorites || {};

  if (errors || affectedRows < 1) {
    // handle those errors like a pro
    console.error("addUserFavorite failed with errors:", errors);
  }

  return returning[0] || {};
};
