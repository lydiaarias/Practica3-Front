"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Product } from "@/types/product";
import "./page.css"; 

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setCurrentImg(data.thumbnail);
      });
  }, [id]);

  if (!product) return <div className="detail-layout-stack">Cargando...</div>;

  return (
    <div className="section-container">
      <Link href="/"> Volver </Link>

      <div className="detail-layout-stack">
        <div className="gallery-wrapper">
          <img src={currentImg} className="big-image" alt={product.title} />
          <div className="thumbnails-list">
            {product.images.map((img, i) => (
              <img 
                key={i}
                src={img}
                className={`thumb-image ${currentImg === img ? "active" : ""}`}
                onClick={() => setCurrentImg(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-description-card">
          <h1>{product.title}</h1>
          <p><strong>{product.brand}</strong></p>
          <p>{product.description}</p>
          <div className="price-text">{product.price}€</div>
          <p>Stock: {product.stock} unidades | Rating: {product.rating} </p>
        </div>
      </div>
    </div>
  );
}