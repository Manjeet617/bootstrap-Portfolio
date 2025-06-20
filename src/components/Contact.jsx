import React from "react";

function Contact() {
  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <h2 className="mb-4 text-center text-primary">Contact Me</h2>
      <form className="col-12 col-md-8 col-lg-6 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Your message here"
          ></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
