import React from "react";
import { Link } from "react-router-dom";

const img = (name) => `/src/assets/image/${name}`;

export default function About() {
  return (
    <>
      <section className="forma-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="forma-eyebrow">THE STUDIO / 001</span>
          <h1>
            Space to think.
            <br />
            <em>Room to feel.</em>
          </h1>
          <p>
            A contemporary interior design studio focused on natural materials,
            meaningful objects and the art of living well.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="forma-about-image"
              src={img("living-room.jpg")}
              alt="Forma contemporary living room"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <span className="forma-eyebrow">01 / OUR PHILOSOPHY</span>
            <h2>
              Beauty through
              <br />
              <em>consideration.</em>
            </h2>
            <p>
              Forma Living Studio is built around a simple idea: interiors
              should support the way people live, without unnecessary clutter.
            </p>
            <p>
              We balance clean architectural lines with tactile finishes,
              natural colours and furniture that feels as good as it looks.
              Every choice contributes to the larger experience of a room.
            </p>
            <Link to="/products" className="forma-button">
              Explore our objects ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="forma-values section-pad">
        <div className="container">
          <div className="forma-section-heading" data-aos="fade-up">
            <div>
              <span className="forma-eyebrow">02 / WHAT MATTERS</span>
              <h2>Principles, not trends.</h2>
            </div>
          </div>

          <div className="row g-0">
            {[
              ["01", "Material honesty", "Stone, wood, linen and finishes chosen for their texture and character."],
              ["02", "Thoughtful function", "Layouts and furniture that make everyday movement feel natural."],
              ["03", "Lasting forms", "Proportions and silhouettes that remain relevant beyond a season."],
            ].map(([number, title, text]) => (
              <div className="col-md-4" key={number} data-aos="fade-up">
                <article className="forma-value-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2" data-aos="fade-left">
            <img
              className="forma-about-image"
              src={img("modular-kitchen.jpg")}
              alt="Contemporary kitchen design"
            />
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <span className="forma-eyebrow">03 / OUR PROCESS</span>
            <h2>
              From first thought
              <br />
              to <em>finished space.</em>
            </h2>

            <div className="forma-process-item">
              <span>01</span>
              <div>
                <h3>Listen</h3>
                <p>Understand your needs, lifestyle, space and preferences.</p>
              </div>
            </div>

            <div className="forma-process-item">
              <span>02</span>
              <div>
                <h3>Compose</h3>
                <p>Bring together layout, materials, finishes and furniture.</p>
              </div>
            </div>

            <div className="forma-process-item">
              <span>03</span>
              <div>
                <h3>Refine</h3>
                <p>Pay attention to the details that make the whole feel right.</p>
              </div>
            </div>

            <Link to="/contact" className="forma-underlined-link">
              Discuss your project ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}