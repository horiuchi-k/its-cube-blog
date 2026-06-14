import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  type?: "info" | "tip" | "warning";
};

const icons = { info: "💡", tip: "✅", warning: "⚠️" };

const Callout = ({ children, type = "info" }: Props) => {
  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <span className={styles.icon}>{icons[type]}</span>
      <div>{children}</div>
    </div>
  );
};

export default Callout;
