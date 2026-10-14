import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="forma-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="forma-eyebrow">PROJECT ENQUIRIES / 001</span>
          <h1>
            Let's make
            <br />
            <em>space for better.</em>
          </h1>
          <p>
            Have a room, a renovation or a new project in mind? Tell us a
            little about it.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="forma-eyebrow">START A CONVERSATION</span>
            <h2 className="forma-contact-heading">
              Good spaces start with good questions.
            </h2>
            <p>
              Share your ideas and requirements. We'll have a clearer picture
              of how we can help shape your space.
            </p>

            <div className="forma-contact-note">
              <span>01</span>
              <div>
                <h3>Interior design</h3>
                <p>Room planning, materials, finishes and complete interiors.</p>
              </div>
            </div>

            <div className="forma-contact-note">
              <span>02</span>
              <div>
                <h3>Furniture & objects</h3>
                <p>Questions about our collection, dimensions and finishes.</p>
              </div>
            </div>

            <div className="forma-contact-note">
              <span>03</span>
              <div>
                <h3>Project consultation</h3>
                <p>Tell us about your space and what you would like to achieve.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form className="forma-contact-form" onSubmit={handleSubmit}>
              <span className="forma-eyebrow">YOUR PROJECT / DETAILS</span>
              <h2>Tell us more.</h2>
              <p>Fields marked * are required.</p>

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="forma-name">Full name *</label>
                  <input
                    id="forma-name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="forma-email">Email address *</label>
                  <input
                    id="forma-email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="forma-phone">Phone number</label>
                  <input
                    id="forma-phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="forma-service">Project type *</label>
                  <select
                    id="forma-service"
                    name="service"
                    className="form-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select a project</option>
                    <option>Complete home interiors</option>
                    <option>Living room</option>
                    <option>Bedroom</option>
                    <option>Kitchen</option>
                    <option>Furniture and decor</option>
                    <option>Existing cart enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="forma-message">Project details *</label>
                  <textarea
                    id="forma-message"
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Tell us about the space, style and requirements..."
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="forma-button">
                    Submit enquiry ↗
                  </button>
                </div>
              </div>

              {submitted && (
                <p className="forma-success" role="status">
                  Thank you. Your enquiry has been prepared in this demo.
                  Connect a backend or form service to receive submissions.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}