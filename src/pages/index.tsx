import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import AddButton from "../components/AddButton";
import Add from "../components/Add";

export default function Home({ pizzaList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Melbourne</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
