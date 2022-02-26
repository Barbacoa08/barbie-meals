export async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: { [key: string]: string | undefined }
) {
  const result = await fetch("https://bm-favorites.hasura.app/v1/graphql", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        process.env.REACT_APP_HASURA_DB_ADMIN_SECRET || "",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}
