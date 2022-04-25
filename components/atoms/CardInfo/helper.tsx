import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export const getChildren = (key: string, value: string) => {
  const CHILDREN_BY_KEY: any = {
    glass: key ? `Drink in ${value}` : '',
    isAlcoholic: ["Alcoholic: ", value === "Alcoholic" ? <CheckIcon /> : <CloseIcon />],
    default: `${key}: ${value}`
  };

  return CHILDREN_BY_KEY[key] || CHILDREN_BY_KEY.default;
};
