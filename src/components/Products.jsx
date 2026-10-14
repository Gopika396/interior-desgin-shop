import React, { useMemo, useState } from "react";
import { products } from "../App";
import { ProductCard } from "./Home";

export default function Products({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const term = search.toLowerCase().trim();
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <>
      <section className="forma-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="forma-eyebrow">OBJECTS / FURNITURE / LIGHTING</span>
          <h1>
            Form follows
            <br />
            <em>feeling.</em>
          </h1>
          <p>
            A considered collection of furniture, lighting and objects for
            modern everyday living.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="forma-shop-toolbar">
          <div>
            <span className="forma-eyebrow">THE COLLECTION</span>
            <h2>Objects of interest.</h2>
            <p>{filteredProducts.length} pieces</p>
          </div>

          <input
            type="search"
            className="forma-search"
            placeholder="Search pieces..."
            aria-label="Search products"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="forma-filter-list">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={`forma-filter ${category === item ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="forma-empty">
            <span className="forma-eyebrow">NO MATCHES</span>
            <h3>Nothing found this time.</h3>
            <p>Try a different name or category.</p>
            <button
              type="button"
              className="forma-button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}