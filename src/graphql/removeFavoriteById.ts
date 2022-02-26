import { fetchGraphQL } from "./shared/fetch";
import { RemoveFavoriteByIdOutput } from "./shared/types";

function executeRemoveFavoriteById(id: string) {
  const operationsDoc = `
    mutation removeFavoriteById($id: uuid!) {
      delete_favorites_by_pk(id: $id) {
        id
      }
    }
  `;

  return fetchGraphQL(operationsDoc, "removeFavoriteById", { id: id });
}

export const removeFavoriteById = async (
  id: string
): Promise<RemoveFavoriteByIdOutput[]> => {
  const { errors, data } = await executeRemoveFavoriteById(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
  return data;
};

/*
mutation MyMutation($id: uuid!) {
  delete_favorites_by_pk(id: $id) {
    id
  }
}
*/
