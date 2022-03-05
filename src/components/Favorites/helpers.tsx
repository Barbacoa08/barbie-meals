import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  ScaleFade,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import { Dispatch, SetStateAction } from "react";

import {
  addUserFavorite as addUserFavoriteFromHasura,
  removeUserFavorite as removeUserFavoriteFromHasura,
} from "graphql";
import { routes } from "navigation";
import { stringCamelCaseToSentence } from "utils";

import { FavoriteOptionProps, PouchFavorites } from "./FavoritesTypes";

export const pullDataFromPouchAndCalculateFavorites = async (
  username: string,
  pouchDb: PouchDB.Database<PouchFavorites>,
  drinks: {
    alcohol: typeof routes["alcohol"];
    setDrinks: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
    setUnselectedDrinks: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  },
  meals: {
    recipes: typeof routes["recipes"];
    setMeals: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
    setUnselectedMeals: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  }
) => {
  const result =
    (await pouchDb
      .allDocs()
      .catch((err) => console.error("PouchDb.allDocs err", err))) ||
    ({} as PouchDB.Core.AllDocsResponse<{}>);

  calculateFavorites(
    username,
    pouchDb,
    result,
    drinks.alcohol,
    drinks.setDrinks,
    drinks.setUnselectedDrinks
  );
  calculateFavorites(
    username,
    pouchDb,
    result,
    meals.recipes,
    meals.setMeals,
    meals.setUnselectedMeals
  );
};

// TODO: should write some tests for this bad boy
/**
 * Takes `Favorites.tsx` state data and updates it based on the PouchDB
 * @param username the name of the desired users whose favorites data we're using
 * @param pouchDb the `PouchFavorites` db
 * @param storedFavorites the stored favorites data
 * @param availableItems all available favorites (from either `alcohol` or `recipes` at time of writing)
 * @param setSelectedFavorites the setter for the selected favorites on the `Favorites` component
 * @param setUnselectedFavorites the setter for the unselected favorites on the `Favorites` component
 */
export const calculateFavorites = (
  username: string,
  pouchDb: PouchDB.Database<PouchFavorites>,
  storedFavorites: PouchDB.Core.AllDocsResponse<{}>,
  availableItems: typeof routes["alcohol"] | typeof routes["recipes"],
  setSelectedFavorites: Dispatch<SetStateAction<JSX.Element[]>>,
  setUnselectedFavorites: Dispatch<SetStateAction<JSX.Element[]>>
) => {
  const handleAddRemoveClick = (
    storedFavorites: PouchDB.Core.AllDocsResponse<{}>
  ) =>
    calculateFavorites(
      username,
      pouchDb,
      storedFavorites,
      availableItems,
      setSelectedFavorites,
      setUnselectedFavorites
    );

  const storedSelectedIds = storedFavorites.rows.map((row) => row.id);

  const selectedFavs: JSX.Element[] = [];
  const unselectedFavs: JSX.Element[] = [];
  Object.keys(availableItems).forEach((favoriteId) => {
    const uri = availableItems[favoriteId];
    const title = stringCamelCaseToSentence(favoriteId);
    const key = `favorite-option-${favoriteId}`;

    if (storedSelectedIds.includes(favoriteId)) {
      selectedFavs.push(
        <FavoriteOption
          icon="remove"
          title={title}
          linkTo={uri}
          key={key}
          onClick={() => {
            removeUserFavoriteFromHasura(username, key);

            pouchDb.get(favoriteId).then((doc) => {
              pouchDb
                .remove(doc)
                .then(() =>
                  pouchDb
                    .allDocs()
                    .then(handleAddRemoveClick)
                    .catch((err) => console.error("PouchDb.allDocs err", err))
                )
                .catch((err) => console.error("favorite removal err", err));
            });
          }}
        />
      );
    } else {
      unselectedFavs.push(
        <FavoriteOption
          icon="add"
          title={title}
          linkTo={uri}
          key={key}
          onClick={async () => {
            addUserFavoriteFromHasura(title, key, username, favoriteId, uri); // optomistic update

            const favToAdd: PouchFavorites = {
              _id: favoriteId,
              title,
              icon: "add",
              linkTo: uri,
              key,
            };
            pouchDb
              .put(favToAdd)
              .then(() =>
                pouchDb
                  .allDocs()
                  .then(handleAddRemoveClick)
                  .catch((err) => console.error("PouchDb.allDocs err", err))
              )
              .catch((err) => console.error("favorite PUT err", err));
          }}
        />
      );
    }
  });

  setSelectedFavorites(selectedFavs);
  setUnselectedFavorites(unselectedFavs);
};

const FavoriteOption = ({
  icon,
  title,
  linkTo,
  onClick,
}: FavoriteOptionProps) => {
  const { isOpen, onToggle } = useDisclosure({ isOpen: true });

  const buttonIcon = icon === "add" ? <AddIcon /> : <MinusIcon />;

  return (
    <ScaleFade initialScale={0.1} in={isOpen}>
      <Flex borderWidth="2px" justifyContent="space-between" p={3} shadow="md">
        <Stack justify="center" paddingRight={5}>
          <Link as={ReachLink} to={linkTo}>
            {title}
          </Link>
        </Stack>

        <IconButton
          aria-label={icon}
          icon={buttonIcon}
          onClick={(e) => {
            onToggle();
            onClick(e);
          }}
        />
      </Flex>
    </ScaleFade>
  );
};
