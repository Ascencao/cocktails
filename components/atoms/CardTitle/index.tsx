import {
  Box,
} from "@chakra-ui/react";

export default function CardTitle(props: { name: string }) {
  const { name } = props;
  return (
    <Box
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      {name}
    </Box>
  );
}
