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
import { addUserFavorite, removeFavoriteById } from "graphql";
import { Dispatch, SetStateAction } from "react";

import { stringCamelCaseToSentence } from "utils";

import { FavoriteOptionProps, PouchFavorites } from "./FavoritesTypes";

export const calculateFavorites = (
  storedFavorites: PouchDB.Core.AllDocsResponse<{}>,
  availableItems: { [key: string]: string },
  dbFavorites: PouchDB.Database<PouchFavorites>,
  setSelectedFavorites: Dispatch<SetStateAction<JSX.Element[]>>,
  setAdditionalFavorites: Dispatch<SetStateAction<JSX.Element[]>>
) => {
  const handleAddRemoveClick = (
    storedFavorites: PouchDB.Core.AllDocsResponse<{}>
  ) =>
    calculateFavorites(
      storedFavorites,
      availableItems,
      dbFavorites,
      setSelectedFavorites,
      setAdditionalFavorites
    );

  const storedIds = storedFavorites.rows.map((row) => row.id);

  const selectedFavs: JSX.Element[] = [];
  const addtFavs: JSX.Element[] = [];
  Object.keys(availableItems).forEach((favoriteId) => {
    const uri = availableItems[favoriteId];
    const title = stringCamelCaseToSentence(favoriteId);
    const key = `favorite-option-${favoriteId}`;

    if (storedIds.includes(favoriteId)) {
      selectedFavs.push(
        <FavoriteOption
          icon="remove"
          title={title}
          linkTo={uri}
          key={key}
          onClick={(e) => {
            e.preventDefault();

            dbFavorites.get(favoriteId).then((doc) => {
              dbFavorites
                .remove(doc)
                .then(() => {
                  dbFavorites
                    .allDocs()
                    .then(handleAddRemoveClick)
                    .catch((err) => console.error("PouchDb.allDocs err", err));
                })
                .catch((err) => console.error("favorite removal err", err));
            });
          }}
        />
      );
    } else {
      addtFavs.push(
        <FavoriteOption
          icon="add"
          title={title}
          linkTo={uri}
          key={key}
          onClick={(e) => {
            e.preventDefault();

            const favToAdd: PouchFavorites = {
              _id: favoriteId,
              title,
              icon: "add",
              linkTo: uri,
              key,
            };
            dbFavorites
              .put(favToAdd)
              .then(() => {
                dbFavorites
                  .allDocs()
                  .then(handleAddRemoveClick)
                  .catch((err) => console.error("PouchDb.allDocs err", err));
              })
              .catch((err) => console.error("favorite PUT err", err));
          }}
        />
      );
    }
  });

  setSelectedFavorites(selectedFavs);
  setAdditionalFavorites(addtFavs);
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
