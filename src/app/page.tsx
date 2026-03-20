"use client";

import { useState, useEffect } from "react";
import SectionContainer from "@/component/sectionContainer";
import SearchBar from "@/component/searchBar";
import ProductCard from "@/component/productCard";
import { Product } from "@/types/product";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <SectionContainer>
        <h1>Catálogo de Productos</h1>
        <SearchBar setSearch={setSearchTerm} />
        
        <ul className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </SectionContainer>
    </main>
  );
}