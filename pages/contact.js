import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";
import { Breadcrumb } from "../components/UI";
import { SITE_URL, LOGO } from "../lib/content";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SMART Kojin — Smartenviro Systems Private Limited",
  image: LOGO,
  telephone: "+91-7720061676",
  email: "enquiry@smartenvirosystems.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.357063, longitude: 73.84085 },
  url: SITE_URL,
};

export default function Contact({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Contact SMART Kojin | Pune, Maharashtra"
        description="Reach SMART Kojin in Pune, Maharashtra for a free demo or quote on sanitary napkin incinerators. Call, email or WhatsApp us today."
        canonical={SITE_URL + "/contact"}
      />
      <JsonLd data={localBusinessSchema} />
      <section className="page-hero">
        <div className="container"><h1>Contact SMART Kojin</h1></div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Get In Touch</h2>
            {/* See pricing.js comment: replace YOUR_FORM_ID with your Formspree form ID */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact-form">
              <label>Name<input type="text" name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Phone<input type="tel" name="phone" /></label>
              <label>Message<textarea name="message" rows={5} required /></label>
              <button type="submit" className="btn btn-primary">Submit Message</button>
            </form>
          </div>
          <div>
            <h2>Details</h2>
            <p><strong>Address:</strong> Pune, Maharashtra, India <em>(add full street address + PIN code here)</em></p>
            <p><strong>Phone:</strong> <a href="tel:+917720061676">+91 7720061676</a></p>
            <p><strong>Email:</strong> <a href="mailto:enquiry@smartenvirosystems.com">enquiry@smartenvirosystems.com</a></p>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=Smartenviro%20Systems%20Private%20Limited&t=m&z=10&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                title="SMART Kojin location map"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
