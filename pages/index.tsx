import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ResultsGrid from "../components/organisms/ResultsGrid";
import { useRouter } from "next/router";
import Searcher from "../components/organisms/Searcher";
import AppLayout from "../components/templates/appLayout";

const Home: NextPage = (props) => {
  const { drinks = [], search = "" } = props;
  const [cocktailName, setCocktailName] = useState(search);
  const router = useRouter();
  const handleInputChange = ({ target: { value } }) => {
    setCocktailName(value);
  };
  const handleOnKeyPress = (e) => (e.key === "Enter" ? handleClick(e) : null);
  const handleClick = (e) => {
    if (cocktailName.trim().length === 0) return;
    e.preventDefault();
    router.push(`/?search=${cocktailName.trim()}`);
  };
  
  return (
    <>
      <Head>
        <title>Awesome Cockails</title>
        <meta
          name="description"
          content="Application that allows search for Cocktails"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
      </Head>
      <AppLayout
        _styles={styles}
        _maxW={{ base: "sm", sm: "s", md: "xl", lg: "l", xl: "6xl" }}
        _title="Cocktails"
      >
        <Searcher
          label="Find your favorite cocktail!"
          value={cocktailName}
          events={{ handleInputChange, handleOnKeyPress, handleClick }}
        />
        <Divider />
        <ResultsGrid results={drinks || []}/>
      </AppLayout>
    </>
  );
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const {
    query: { search: cocktailName = "" },
  } = context;
  const resp = await fetch(
    `http://localhost:3000/api/cocktails/getByName/?search=${
      cocktailName || ""
    }`
  ).then((resp) => resp.json());
  return { props: { ...resp, search: cocktailName } };
};
