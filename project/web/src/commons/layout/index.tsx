import Header from "./header";
import styles from "./styles.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
    </>
  );
}
