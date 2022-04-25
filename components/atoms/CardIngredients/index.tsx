import { FC } from "react";
import {
  Badge, Box,
} from "@chakra-ui/react";

export interface IngredientProps {
  name: string;
  measure: string;
}
interface Props { ingredients: IngredientProps[] }

const CardTitle: FC<Props> = ({ ingredients }: Props) => (
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

export default CardTitle;