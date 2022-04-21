import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  drinks: { idDrink: string, strDrink: string }[],
  cocktailName: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { search: cocktailName = "" },
  } = req;
  switch (method) {
    case 'GET':
      return getCocktails({ ...res, cocktailName });
    default:
      return res.status(200).json({ drinks: [], cocktailName })
  }
}
const getCocktails = async (res: NextApiResponse<Data>) => {
  const { cocktailName } = res;
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`).then(response => response.json())
  return res.status(200).json(cocktails)
} 