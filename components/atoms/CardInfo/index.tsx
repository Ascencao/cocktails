import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
} from "@chakra-ui/react";

export default function CardTitle(props: { glass: string, alcoholic: string }) {
  const { glass, alcoholic } = props;
  return (
    <>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        Drink in {glass}
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        Alcoholic:
        {alcoholic === "Alcoholic" ? (
          <CheckIcon />
        ) : (
          <CloseIcon />
        )}
      </Box>
    </>
  );
}
