import Link from "next/link";
import { Product } from "@/types/product";
import CardWrapper from "./cardWrapper";
import styles from "@/app/page.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li>
      <CardWrapper>
        <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
        <div className={styles.productInfo}>
          <span className={styles.categoryBadge}>{product.category}</span>
          <h3>{product.title}</h3>
          <p className={styles.productPrice}>{product.price}€</p>
        </div>
        <Link href={`/product/${product.id}`} className={styles.btnDetails}>
          Ver detalles
        </Link>
      </CardWrapper>
    </li>
  );
}