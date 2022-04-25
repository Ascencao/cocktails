export const buildLabelText = (results = []) => {
  const size = results?.length || 0;
  const sizeText = `${size || ""}`;
  const ResultText = `${size && (size > 1 ? " Results" : " Result")}`;
  return size
    ? `${sizeText}${ResultText}`
    : "Ups! We have not found any results. Try again with another cocktail!";
};

export const getIngredients = (drink) =>{
  return Object.keys(drink).reduce((acc, key) => {
    if (key.includes("strIngredient") && drink[key]) {
      const number = key.replace(/strIngredient/, "");
      acc.push({
        name: drink[`strIngredient${number}`],
        measure: drink[`strMeasure${number}`],
      });
    }
    return acc;
  }, []);
}
