import Head from "next/head";
//import Link from "next/link"
import Image from "next/image";
import styles from "../styles/categories.module.css";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'
import CategoryMain from '../components/CategoryMain'
export default function Categories() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blogr</title>
        <meta name="description" content="Get Your Ideas Out Into The World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Sidebar />
        <CategoryMain/>
      </main>
    </div>
  );
}