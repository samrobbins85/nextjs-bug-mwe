import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
export default function Home({ r }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/working">
        <a>This link should prefetch, but doesn't on Firefox</a>
      </Link>
      <h2>Here is a random string just so I have props</h2>
      {r}
    </div>
  );
}

export async function getStaticProps() {
  let r = Math.random().toString(36).substring(7);
  return {
    props: { r },
  };
}
export async function getStaticPaths(slug) {
  return {
    paths: [{ params: { slug: ["working"] } }],
    fallback: true,
  };
}
