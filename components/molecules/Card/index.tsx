import {
  Image,
  Box,
  LinkBox,
} from "@chakra-ui/react";
import CardTitle from "../../atoms/CardTitle";
import CardInfo from "../../atoms/CardInfo";
import CardIngredients, { IIngredientsProps } from "../../atoms/CardIngredients";

interface ICardProps {
  drink: {
    imageUrl: string;
    imageAlt: string;
    name: string;
    glass: string;
    alcoholic: string;
    ingredients: IIngredientsProps[]
  }
}

export default function Card(props: ICardProps) {
  const { drink } = props;
  const { imageUrl, imageAlt, name, glass, alcoholic, ingredients } = drink;
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={`${imageUrl}/preview`}
        alt={imageAlt}
        w={"100%"}
      />

      <Box p="6">
        <CardTitle title={name} />
        <CardInfo glass={glass} alcoholic={alcoholic} />
        <CardIngredients ingredients={ingredients} />
      </Box>
    </Box>
  );
}
