import styles from "@/app/page.module.css";

interface Props {
  setSearch: (val: string) => void;
}

export default function SearchBar({ setSearch }: Props) {
  return (
    <div>
      <input 
        className={styles.searchInput}
        type="text" 
        placeholder="Buscar productos..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </div>
  );
}