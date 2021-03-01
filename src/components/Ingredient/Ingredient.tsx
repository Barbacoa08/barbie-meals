import { Image } from "@chakra-ui/image";
import { Badge, Box, Text } from "@chakra-ui/layout";
import { useGlobal } from "reactn";

interface IIngredient {
  img?: string;
  ingredient: string;
  ingredientOpinionated: string;
  portion: string;
}

export const Ingredient = ({
  img,
  ingredient,
  ingredientOpinionated,
  portion,
}: IIngredient) => {
  const [showImages] = useGlobal("showImages");
  const [showOpinions] = useGlobal("showOpinions");
  // TODO: useEffect, if any of these change, fade(transition) change. Probably need a new component.

  return (
    <Box textAlign="center">
      <Badge margin="0px 2px 2px 2px" whiteSpace="break-spaces">
        {showOpinions ? ingredientOpinionated : ingredient}
      </Badge>
      <Text>{portion}</Text>
      {img && <Image
        alt={ingredientOpinionated}
        boxSize="150px"
        fallbackSrc="https://via.placeholder.com/150"
        hidden={!showImages}
        margin="auto"
        objectFit="contain"
        src={img}
      />}
    </Box>
  );
};
