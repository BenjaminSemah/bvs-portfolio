import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  function handleFormChange(event: any) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value,
      };
    });
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <section className="contact--section">
      <div>
        <h2 className="form--title">Get In Touch</h2>
        <p className="form--desc">Let's work together!</p>
      </div>
      <form className="contact--form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={handleFormChange}
          value={formData.name}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={handleFormChange}
          value={formData.email}
        />
        <textarea
          placeholder="Your Message"
          name="comment"
          onChange={handleFormChange}
          value={formData.comment}
        />
        <button className="form--btn">Send Message</button>
      </form>
    </section>
  );
}
