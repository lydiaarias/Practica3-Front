import styles from "@/app/page.module.css";

export default function CardWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.cardWrapper}>{children}</div>;
}