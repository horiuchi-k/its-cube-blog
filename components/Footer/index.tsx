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
      <p className={styles.cr}>© 50代ITエンジニアK. All Rights Reserved 2026</p>
    </footer>
  );
};

export default Footer;
