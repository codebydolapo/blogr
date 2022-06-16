import Head from "next/head";
import Image from "next/image";
import styles from "../styles/profile.module.css";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import ProfileMain from '../components/ProfileMain';
export default function Profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blogr</title>
        <meta name="description" content="Get Your Ideas Out Into The World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Sidebar/>
        <ProfileMain/>
      </main>
    </div>
  );
}
