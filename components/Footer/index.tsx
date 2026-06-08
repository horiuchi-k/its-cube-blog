import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/blog">ブログ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">アバウト</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© ITScube. All Rights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
