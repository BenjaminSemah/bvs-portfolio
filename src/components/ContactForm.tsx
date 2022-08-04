import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mgeqwzlp");
  return (
    <section className="contact--section">
      <div className="desc--title">
        <h2 className="form--title">Get In Touch</h2>
        <p className="form--desc">
          Let's build together. I'd love to hear from you!<br></br>
          Fill in the form below to shoot an email to me.
        </p>
      </div>
      <form className="contact--form" onSubmit={handleSubmit}>
        <input id="name" type="name" name="name" placeholder="Your name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input id="email" type="email" name="email" placeholder="Your email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Your message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {state.succeeded && (
          <p className="success--message">Message sent successfully!</p>
        )}
        <button className="form--btn" type="submit" disabled={state.submitting}>
          Send Email
        </button>
      </form>
    </section>
  );
}
