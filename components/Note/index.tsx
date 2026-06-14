import styles from "./index.module.css";

type Props = {
  term: string;
  children: React.ReactNode;
};

const Note = ({ term, children }: Props) => {
  return (
    <div className={styles.note}>
      <span className={styles.term}>📖 {term}とは？</span>
      <span className={styles.description}>{children}</span>
    </div>
  );
};

export default Note;
