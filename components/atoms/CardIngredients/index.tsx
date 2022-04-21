import {
  Badge, Box,
} from "@chakra-ui/react";

export interface IIngredientsProps {
  name: string;
  measure: string;
}
interface ICardIngredients { ingredients: IIngredientsProps[] }

export default function CardTitle(props: ICardIngredients) {
  const { ingredients } = props;
  return (
    <Box
      display="flex"
      mt="2"
      alignItems="center"
      flexFlow={"wrap"}
    >
      {ingredients.map(({ name }, i) => (
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="orange"
          mr={1}
          mb={1}
          key={`ingredient-${i}`}
        >
          {name}
        </Badge>
      ))}
    </Box>
  );
}
