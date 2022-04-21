import NavBar from "../molecules/Navbar";
import { Container, Stack } from "@chakra-ui/react";
import PageHeader from "../atoms/PageHeader";

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
      title: titleStyles,
      footer: footerStyles,
    } = {},
    _maxW: maxW,
    _title,
  } = props;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={mainStyles}>
        <Container maxW={maxW} w="100%" centerContent>
          <Stack spacing={3}>
            <PageHeader title={_title} className={titleStyles} />
            {children}
          </Stack>
        </Container>
      </main>
      <footer className={footerStyles}>Made by Mariaelisa Rodrigues</footer>
    </>
  );
}
