import {
  LinkBox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Card from "../../molecules/Card";
import { buildLabelText, getIngredients } from './helper'

interface IResultsGridProps {
  results: {
    idDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strAlcoholic: string;
    strDrink: string;
  }[];
}

const ResultsGrid = (props: IResultsGridProps) => {
  const { results = [] } = props;
  return (
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
              strAlcoholic: alcoholic,
              strDrink: name,
            } = drink;
            return (
              <LinkBox as="article" key={`card-drink-${i}`}>
                <Card drink={{ name, imageUrl, imageAlt: name, glass, alcoholic, ingredients: getIngredients(drink) }} />
              </LinkBox>
            );
          })}
      </SimpleGrid>
    </>
  );
};
export default ResultsGrid;
