import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb, ModelsFit } from "../components/UI";
import { SITE_URL, MODELS } from "../lib/content";

export default function Pricing({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Get a Quote — Sanitary Napkin Incinerator | SMART Kojin"
        description="Request a free, personalized quote for SMART Kojin's automatic sanitary napkin incinerator, sized for your school, office, hospital or mall."
        canonical={SITE_URL + "/pricing"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Get a Quote</h1>
          <p>Pricing depends on your facility size and expected daily usage — tell us about your space and we&apos;ll send a personalized quote.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Three Models</p>
          <h2>Which one fits your space?</h2>
          <ModelsFit models={MODELS} />
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          {/*
            Netlify-style forms don't work on Vercel. This form posts to
            Formspree instead (https://formspree.io) — free tier, no backend
            code needed. Replace YOUR_FORM_ID with the ID Formspree gives you
            after you create a free account and add this site's domain.
          */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact-form">
            <label>Name<input type="text" name="name" required /></label>
            <label>Organization<input type="text" name="organization" /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Phone<input type="tel" name="phone" required /></label>
            <label>
              Facility Type
              <select name="facility_type">
                <option>School / College</option>
                <option>Corporate Office</option>
                <option>Hospital / Clinic</option>
                <option>Mall / Gym</option>
                <option>Municipal Corporation</option>
                <option>Factory / Industrial Site</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Model Interested In
              <select name="model">
                {MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} — {m.capacity}
                  </option>
                ))}
                <option value="not-sure">Not sure — recommend one for me</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows={4} /></label>
            <button type="submit" className="btn btn-primary">Request a Quote</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
