import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
  return (
    <React.Fragment>
      <Hero img={contactImg} />
      <Contact />
    </React.Fragment>
  );
}
