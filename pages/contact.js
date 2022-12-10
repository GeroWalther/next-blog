import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact Gero for any kind of inquiries"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default Contact;
