import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum, ut aliquam ratione pariatur exercitationem impedit asperiores iure? Id minima vitae sit consectetur maxime ex in quo sapiente aspernatur recusandae.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum, ut aliquam ratione pariatur exercitationem impedit asperiores iure? Id minima vitae sit consectetur maxime ex in quo sapiente aspernatur recusandae.</p>
        <Link href={"/ninjas"} className={styles.btn}>see Ninja Listing</Link>
      </div>
    </>
  );
}
