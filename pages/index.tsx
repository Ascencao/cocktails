import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import CardsGrid from "../components/organisms/CardsGrid";
import { useRouter } from "next/router";
import Search from "../components/organisms/Search";
import AppLayout from "../components/templates/appLayout";
import PageHeadline from "../components/atoms/PageHeadline";

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
      <AppLayout
        _styles={styles}
        _maxW={{ base: "sm", sm: "s", md: "xl", lg: "l", xl: "6xl" }}
      >
        <PageHeadline title="Cocktails" className={styles.title} />
        <Search
          label="Find your favorite cocktail!"
          value={cocktailName}
          events={{ handleInputChange, handleOnKeyPress, handleClick }}
        />
        <Divider />
        <CardsGrid results={drinks || []} />
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
    `${process.env.BASE_URL}/api/cocktails/getByName/?search=${cocktailName || ""
    }`
  ).then((resp) => resp.json());
  return { props: { ...resp, search: cocktailName } };
};
