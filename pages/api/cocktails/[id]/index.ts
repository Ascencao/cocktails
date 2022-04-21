import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  drink: { idDrink: string, strDrink: string, strInstructions: string },
  id: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      return getCocktail({ ...res, id });
    default:
      return res.status(200).json({ drink: {}, id })
  }

}
const getCocktail = async (res: NextApiResponse<Data>) => {
  const { id } = res;
  const cocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(response => response.json())
  return res.status(200).json(cocktail)
} 