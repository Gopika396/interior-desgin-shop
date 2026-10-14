import React from "react";
import { Link } from "react-router-dom";

import { img } from "../assets/image.js";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="container forma-empty section-pad">
        <span className="forma-eyebrow">YOUR SELECTION / 001</span>
        <h1>Your bag is empty.</h1>
        <p>Start with a piece that feels right.</p>
        <Link to="/products" className="forma-button">
          Explore the collection ↗
        </Link>
      </section>
    );
  }

  return (
    <section className="container section-pad">
      <div className="forma-page-heading" data-aos="fade-up">
        <span className="forma-eyebrow">YOUR SELECTION / 001</span>
        <h1>
          Considered
          <br />
          <em>choices.</em>
        </h1>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {cart.map((item) => (
            <article className="forma-cart-item" key={item.id}>
              <img src={img(item.image)} alt={item.name} />

              <div className="forma-cart-details">
                <span className="forma-eyebrow">{item.category}</span>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString("en-IN")}</p>

                <div className="forma-quantity">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="forma-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <strong className="forma-line-total">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </article>
          ))}
        </div>

        <div className="col-lg-4">
          <aside className="forma-summary">
            <span className="forma-eyebrow">ORDER OVERVIEW</span>
            <h2>Summary.</h2>

            <div className="forma-summary-line">
              <span>Items</span>
              <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>

            <div className="forma-summary-line">
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>

            <p>
              Delivery, installation and applicable taxes will be confirmed
              during your enquiry.
            </p>

            <Link to="/contact" className="forma-button w-100 text-center">
              Enquire about my order ↗
            </Link>

            <Link to="/products" className="forma-continue">
              Continue exploring
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}