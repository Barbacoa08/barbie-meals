const fetchTenFavoritesGraphQL = async () => {
  const result = await fetch("https://bm-favorites.hasura.app/v1/graphql", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        process.env.REACT_APP_HASURA_DB_ADMIN_SECRET || "",
    },
    body: JSON.stringify({
      query: `
        {
          favorites(limit: 10) {
            id
            key
            title
            _rev
          }
        }
      `,
    }),
  });

  return await result.json();
};

export const fetchFavorites = async () => {
  const { errors, data } = await fetchTenFavoritesGraphQL();
  const favorites = data?.favorites || [];

  if (errors) {
    console.error("errors", errors);
  }

  return favorites;
};
