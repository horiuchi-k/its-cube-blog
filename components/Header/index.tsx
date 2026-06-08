import Link from "next/link";
import Menu from "@/components/Menu";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        ITScube Blog
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
