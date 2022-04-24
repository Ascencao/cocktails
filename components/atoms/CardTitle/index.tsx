import { FC } from 'react';
import {
  Box,
} from "@chakra-ui/react";

interface Props {
  title: string
}

const CardTitle: FC<Props> = ({ title }) => (
  <Box
    fontWeight="semibold"
    as="h2"
    isTruncated
  >
    {title}
  </Box>
);

export default CardTitle;
