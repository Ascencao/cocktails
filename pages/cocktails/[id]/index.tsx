import { SimpleGrid, Container } from "@chakra-ui/react";

export interface ICocktailsProps {
  name: string;
  drinks: { idDrink: string; strDrink: string }[];
}

export default function App(props: ICocktailsProps) {
  const { id, drink = {} } = props;
  return (
    <Container maxW="2xl" bg="blue.600" centerContent>
      <h1>HOLA {drink.strDrink}!</h1>
      <SimpleGrid columns={1} spacing={10}>
        {drink.strInstructions}
      </SimpleGrid>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { id }
  } = context;
  const resp = await fetch(
    `http://localhost:3000/api/cocktails/${id}`
  ).then((resp) => resp.json());

  return { props: { ...resp } };
}
