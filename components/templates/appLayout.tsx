import NavBar from "../molecules/Navigation";
import { Container, Stack } from "@chakra-ui/react";

export default function AppLayout(props: {
  children: any;
  _styles?: any;
  _maxW?: any;
  _title: string;
}) {
  const {
    children,
    _styles: {
      main: mainStyles,
      footer: footerStyles,
    } = {},
    _maxW: maxW,
  } = props;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={mainStyles}>
        <Container maxW={maxW} w="100%" centerContent>
          <Stack spacing={3}>
            {children}
          </Stack>
        </Container>
      </main>
      <footer className={footerStyles}>Made by Mariaelisa Rodrigues</footer>
    </>
  );
}
