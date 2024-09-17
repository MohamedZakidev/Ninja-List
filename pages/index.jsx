import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum, ut aliquam ratione pariatur exercitationem impedit asperiores iure? Id minima vitae sit consectetur maxime ex in quo sapiente aspernatur recusandae.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum, ut aliquam ratione pariatur exercitationem impedit asperiores iure? Id minima vitae sit consectetur maxime ex in quo sapiente aspernatur recusandae.</p>
      <Link href={"/ninjas"} className={styles.btn}>see Ninja Listing</Link>
    </div>
  );
}
