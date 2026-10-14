import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

export const products = [
  { id: 1, name: "Sculptural Sofa", category: "Furniture", price: 78500, image: "sculptural-sofa.jpg", description: "A soft architectural silhouette with generous proportions." },
  { id: 2, name: "Travertine Coffee Table", category: "Furniture", price: 28500, image: "stone-coffee-table.jpg", description: "Natural stone character with a sculptural profile." },
  { id: 3, name: "Curve Accent Chair", category: "Seating", price: 24500, image: "accent-chair.jpg", description: "Curved contemporary seating in tactile neutral fabric." },
  { id: 4, name: "Arc Floor Lamp", category: "Lighting", price: 12500, image: "floor-lamp.jpg", description: "Sculptural lighting for relaxed modern interiors." },
  { id: 5, name: "Minimal Console", category: "Furniture", price: 19800, image: "console-table.jpg", description: "A refined console with clean architectural lines." },
  { id: 6, name: "Oak Dining Table", category: "Furniture", price: 48500, image: "dining-table.jpg", description: "Natural oak tones and understated modern detailing." },
  { id: 7, name: "Orb Pendant Light", category: "Lighting", price: 15800, image: "pendant-light.jpg", description: "Soft ambient light with a distinctive contemporary form." },
  { id: 8, name: "Lounge Chair", category: "Seating", price: 22500, image: "lounge-chair.jpg", description: "A relaxed silhouette for quiet corners and reading spaces." },
  { id: 9, name: "Stone Side Table", category: "Furniture", price: 9800, image: "side-table.jpg", description: "A compact sculptural accent in a stone-inspired finish." },
  { id: 10, name: "Abstract Wall Art", category: "Decor", price: 8500, image: "wall-art.jpg", description: "Muted abstract forms for carefully composed interiors." },
  { id: 11, name: "Sculptural Ceramic Vase", category: "Decor", price: 3200, image: "decor-vase.jpg", description: "An organic decorative accent in an earthy finish." },
  { id: 12, name: "Modern Living Interior", category: "Interiors", price: 145000, image: "living-room.jpg", description: "A complete living room concept in warm neutral tones." },
  { id: 13, name: "Calm Bedroom Interior", category: "Interiors", price: 125000, image: "bedroom.jpg", description: "A serene bedroom with natural textures and soft light." },
  { id: 14, name: "Contemporary Kitchen", category: "Interiors", price: 185000, image: "modular-kitchen.jpg", description: "A streamlined kitchen concept focused on function and form." },
  { id: 15, name: "Modern Dining Interior", category: "Interiors", price: 115000, image: "dining-room.jpg", description: "An inviting dining space with sculptural lighting." },
];

function Navbar({ count }) {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg forma-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand forma-brand" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Forma Living Studio"
          />
          <span>
            <strong>FORMA</strong>
            <small>LIVING STUDIO</small>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggler forma-toggler"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <div className="navbar-nav ms-auto align-items-lg-center">
            <NavLink end to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              Studio
            </NavLink>
            <NavLink to="/products" className="nav-link" onClick={closeMenu}>
              Collection
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
            <NavLink to="/cart" className="nav-link forma-cart-link" onClick={closeMenu}>
              Bag <span>{count}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="forma-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5 col-md-6">
            <h3>FORMA<span>.</span></h3>
            <p>
              Modern spaces. Meaningful objects. A quieter kind of luxury.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Explore</h5>
            <Link to="/about">Our Studio</Link>
            <Link to="/products">Furniture & Objects</Link>
            <Link to="/contact">Project Enquiries</Link>
          </div>

          <div className="col-lg-4">
            <h5>Our Approach</h5>
            <p>
              Thoughtful proportions, natural materials and timeless forms
              for everyday living.
            </p>
          </div>
        </div>

        <div className="forma-footer-bottom">
          <span>© {new Date().getFullYear()} Forma Living Studio</span>
          <span>FORM FOLLOWS FEELING.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) =>
      quantity <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar count={count} />

      <main className="forma-main">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}