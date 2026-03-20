import styles from "@/app/page.module.css";

export default function SectionContainer({ children }: { children: React.ReactNode }) {
  return <section className={styles.sectionContainer}>{children}</section>;
}