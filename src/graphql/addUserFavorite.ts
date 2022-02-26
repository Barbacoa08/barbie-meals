import { fetchGraphQL } from "./shared/fetch";
import { AddUserFavoriteOutput, AddUserFavoriteResult } from "./shared/types";

function executeAddUserFavorite(
  user: string,
  title: string,
  key: string,
  _rev?: string
) {
  const operationsDoc = `
    mutation addUserFavorite($user: String!, $title: String!, $key: String!, $_rev: String) {
      insert_favorites(objects: {_rev: $_rev, key: $key, title: $title, user: $user}) {
        affected_rows
        returning {
          _rev
          id
          key
          title
          user
        }
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "addUserFavorite", {
    user: user,
    title: title,
    key: key,
    _rev: _rev,
  });
}

export const addUserFavorite = async (
  user: string,
  title: string,
  key: string,
  _rev?: string
): Promise<AddUserFavoriteResult> => {
  const { errors, data } = await executeAddUserFavorite(user, title, key, _rev);
  const { affected_rows: affectedRows, returning = [] }: AddUserFavoriteOutput =
    data?.insert_favorites || {};

  if (errors || affectedRows < 1) {
    // handle those errors like a pro
    console.error(errors);
  }

  const result = returning[0] || {};

  console.log(result);
  return result;
};

/*
mutation addUserFavorite($user: String!, $title: String!, $key: String!, $_rev: String) {
  insert_favorites(objects: {_rev: $_rev, key: $key, title: $title, user: $user}) {
    affected_rows
    returning {
      _rev
      id
      key
      title
      user
    }
  }
}
*/
