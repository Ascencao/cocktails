import { FC } from 'react';
import { Box } from "@chakra-ui/react";
import { getChildren } from './helper';

interface Props {
  info: {
    glass: string;
    isAlcoholic: string;
  }
};

const CardInfo: FC<Props> = ({ info }) => (
  <>
    {Object.entries(info)
      .map(
        ([key, value]) => (
          <Box key={key}
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {getChildren(key, value)}
          </Box>)
      )
    }
  </>
);

export default CardInfo;
