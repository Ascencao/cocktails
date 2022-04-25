import LogoImage from "../../atoms/LogoImage";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex as="nav" bg="tomato">
      <Grid
        templateColumns="repeat(5, 1fr)"
        as="ul"
        listStyleType="none"
        p={{ base: 3 }}
        w="100%"
        alignItems={{ base: "center" }}
      >
        <GridItem as="li" colSpan={1}>
          <LogoImage
            imageSource="/apple-touch-icon.ico"
            imageAlt="Logo Awesome Cocktails"
          />
        </GridItem>
        <GridItem as="li" colSpan={3}>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Awesome Cocktails
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default NavBar;
