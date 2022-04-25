import {
  Image,
  Box,
} from "@chakra-ui/react";
import CardTitle from "../../atoms/CardTitle";
import CardInfo from "../../atoms/CardInfo";
import CardIngredients, { IngredientProps } from "../../atoms/CardIngredients";

interface ICardProps {
  drink: {
    image: {
      imageUrl: string;
      imageAlt: string;
    };
    name: string;
    info: {
      glass: string;
      isAlcoholic: string;
    };
    ingredients: IngredientProps[]
  }
}

// FIXME: Change de chakra's image for next/image
export default function Card(props: ICardProps) {
  const { drink } = props;
  const { image: { imageUrl, imageAlt }, name, info, ingredients } = drink;
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
        width={"100%"}
      />

      <Box p="6">
        <CardTitle title={name} />
        <CardInfo info={info} />
        <CardIngredients ingredients={ingredients} />
      </Box>

    </Box>
  );
}
