import React from "react";
import { Link } from "react-router-dom";
import { products } from "../App";

const img = (name) => `/src/assets/image/${name}`;

export function ProductCard({ product, addToCart }) {
  return (
    <div className="col-sm-6 col-lg-4" data-aos="fade-up">
      <article className="forma-product-card">
        <Link to="/products" className="forma-product-image">
          <img src={img(product.image)} alt={product.name} loading="lazy" />
          <span>{product.category}</span>
        </Link>

        <div className="forma-product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>

          <div className="d-flex justify-content-between align-items-center gap-2">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <button
              className="forma-add-button"
              onClick={() => addToCart(product)}
            >
              Add to bag +
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Home({ addToCart }) {
  return (
    <>
      <section className="container forma-hero" data-aos="fade-up">
        <div className="forma-hero-top">
          <span className="forma-eyebrow">INTERIORS / OBJECTS / LIVING</span>
          <span className="forma-hero-index">EST. 2026 — DESIGN FOR LIVING</span>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h1>
              Less, but
              <br />
              <em>better.</em>
            </h1>

            <p className="forma-hero-description">
              Thoughtfully designed interiors and sculptural objects that
              bring balance, warmth and clarity to everyday spaces.
            </p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <Link to="/products" className="forma-button">
                Explore the collection <span>↗</span>
              </Link>
              <Link to="/about" className="forma-underlined-link">
                Discover Forma
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="forma-hero-image">
              <img src={img("hero.jpg")} alt="Architectural luxury living room" />
              <div className="forma-image-caption">
                <span>01 / SPACES</span>
                <strong>Quiet forms. Lasting presence.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="forma-hero-bottom">
          <span>DESIGNED WITH INTENTION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="forma-intro section-pad">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <span className="forma-eyebrow">THE FORMA POINT OF VIEW</span>
            </div>
            <div className="col-lg-8" data-aos="fade-up">
              <h2>
                A considered approach to
                <em> modern living.</em>
              </h2>
              <p>
                We bring together natural materials, considered proportions
                and expressive forms to create interiors that feel effortless
                rather than overdesigned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="forma-section-heading" data-aos="fade-up">
          <div>
            <span className="forma-eyebrow">SPACES TO LIVE IN</span>
            <h2>Room to breathe.</h2>
          </div>
          <Link to="/products" className="forma-underlined-link">
            View all collections ↗
          </Link>
        </div>

        <div className="row g-4">
          {[
            {
              name: "Living / 01",
              image: "living-room.jpg",
              description: "Comfort in its purest form.",
            },
            {
              name: "Rest / 02",
              image: "bedroom.jpg",
              description: "A softer way to slow down.",
            },
            {
              name: "Gather / 03",
              image: "dining-room.jpg",
              description: "Everyday rituals, considered.",
            },
          ].map((item, index) => (
            <div
              className="col-md-4"
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link to="/products" className="forma-room-card">
                <div className="forma-room-image">
                  <img src={img(item.image)} alt={item.name} loading="lazy" />
                  <span>0{index + 1}</span>
                </div>
                <div className="forma-room-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>Explore ↗</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="forma-feature-band">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src={img("modular-kitchen.jpg")}
                alt="Modern modular kitchen"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="forma-eyebrow">FORM MEETS FUNCTION</span>
              <h2>
                Every detail
                <br />
                <em>has a purpose.</em>
              </h2>
              <p>
                From tactile stone surfaces to purposeful storage, we believe
                the smallest decisions shape how a space feels and functions.
              </p>
              <Link to="/about" className="forma-button">
                Inside the studio ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="forma-section-heading" data-aos="fade-up">
          <div>
            <span className="forma-eyebrow">OBJECTS WITH PRESENCE</span>
            <h2>Selected pieces.</h2>
          </div>
          <Link to="/products" className="forma-underlined-link">
            Shop all objects ↗
          </Link>
        </div>

        <div className="row g-4">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="forma-quote-section">
        <div className="container" data-aos="zoom-in">
          <span className="forma-eyebrow">OUR DESIGN BELIEF</span>
          <h2>
            “A beautiful space
            <br />
            doesn't need to shout.”
          </h2>
          <p>It simply needs to feel right.</p>
        </div>
      </section>

      <section className="forma-contact-cta">
        <div className="container" data-aos="fade-up">
          <span className="forma-eyebrow">HAVE A SPACE IN MIND?</span>
          <h2>Let's make room for better living.</h2>
          <Link to="/contact" className="forma-button forma-button-light">
            Start a project enquiry ↗
          </Link>
        </div>
      </section>
    </>
  );
}