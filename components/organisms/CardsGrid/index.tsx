import {
  LinkBox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Card from "../../molecules/Card";
import { buildLabelText, getIngredients } from './helper'

interface Props {
  results: {
    idDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strAlcoholic: string;
    strDrink: string;
  }[];
}

const ResultsGrid = ({ results = [] }: Props) => (
  <>
    {
      <Text as="p" fontSize="md">
        {buildLabelText(results)}
      </Text>
    }
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
      spacing={10}
    >
      {results?.map((drink, i) => {
        const {
          idDrink,
          strDrinkThumb: imageUrl,
          strGlass: glass,
          strAlcoholic: isAlcoholic,
          strDrink: name,
        } = drink;
        return (
          <LinkBox as="article" key={`card-drink-${idDrink}`}>
            <Card drink={{ name, image: { imageUrl, imageAlt: name }, info: { glass, isAlcoholic }, ingredients: getIngredients(drink) }} />
          </LinkBox>
        );
      })}
    </SimpleGrid>
  </>
);

export default ResultsGrid;
