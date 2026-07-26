import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";
import { Breadcrumb, Card, CtaBand, ModelsFit, BadgeStrip, PhotoSlot } from "../components/UI";
import { FEATURES, MODELS, MODEL_BADGES, SITE_URL } from "../lib/content";

export default function SmartKojin({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="SMART Kojin Sanitary Pad Incinerator — Fully Automatic & Safe"
        description="Burns napkins at 800–900°C with a cool 37°C exterior, zero emissions & a 3-minute cycle. See how the SMART Kojin incinerator works."
        canonical={SITE_URL + "/smart-kojin"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>SMART Kojin Sanitary Pad Incinerator</h1>
          <p>Fully automatic, emission-free, built for high-traffic shared spaces.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Smart Kojin" }]} />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            SMART Kojin is a state-of-the-art sanitary napkin incinerator
            designed to revolutionize hygiene in shared spaces such as gyms,
            hostels, hospitals, malls, corporate offices, and more. It
            combines advanced technology with an eco-friendly design to
            ensure the safe and efficient disposal of sanitary napkins. With
            its user-friendly and emission-free operation, SMART Kojin is
            the ultimate solution for modern sanitary waste management.
          </p>
        </div>
      </section>

      {/* Product gallery — real photography needed here more than almost
          anywhere else; buyers want to see the actual object before reading
          specs. Swap each slot for a real shot once available. */}
      <section className="section">
        <div className="container">
          <div className="photo-grid">
            <PhotoSlot caption="Front view, loading bin open" size="square" />
            <PhotoSlot caption="Side profile, showing full housing" size="square" />
            <PhotoSlot caption="Close-up of the loading slot" size="square" />
            <PhotoSlot caption="Installed in a real washroom setting" size="square" />
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <h2>Product Highlights</h2>
          <div className="card-grid">
            {FEATURES.map((f) => (
              <Card key={f.title} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Models</p>
          <h2>Three sizes, same technology</h2>
          <ModelsFit models={MODELS} />
          <BadgeStrip badges={MODEL_BADGES} />
          <p style={{ marginTop: 20 }}>
            <Link href="/pricing" className="btn btn-primary">Get a Quote</Link>
          </p>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <p className="eyebrow">Why Incineration</p>
          <h2>How SMART Kojin compares on emissions</h2>
          <p className="lead">
            Figures below are from Smart Kojin&apos;s own product testing,
            compared against landfill disposal and uncontrolled traditional
            incineration.
          </p>
          <div className="models-table-wrap">
            <table className="models-table">
              <thead>
                <tr>
                  <th>Pollutant</th>
                  <th>Landfill (No Incineration)</th>
                  <th>Traditional Incineration</th>
                  <th>SMART Kojin</th>
                </tr>
              </thead>
              <tbody>
                <tr><td data-label="Pollutant">CO₂ (Carbon Dioxide)</td><td data-label="Landfill">21.4 g/pad</td><td data-label="Traditional">10–12 g/pad</td><td data-label="SMART Kojin">≤0.5 g/pad (near-zero)</td></tr>
                <tr><td data-label="Pollutant">CH₄ (Methane)</td><td data-label="Landfill">0.009 g/pad (225× CO₂ impact)</td><td data-label="Traditional">0 g/pad</td><td data-label="SMART Kojin">0 g/pad</td></tr>
                <tr><td data-label="Pollutant">CO (Carbon Monoxide)</td><td data-label="Landfill">Not applicable</td><td data-label="Traditional">~2744 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">SO₂ (Sulfur Dioxide)</td><td data-label="Landfill">Not applicable</td><td data-label="Traditional">~332 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">NOx (Nitrogen Oxides)</td><td data-label="Landfill">Not applicable</td><td data-label="Traditional">~65 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">Dioxins &amp; Furans</td><td data-label="Landfill">Released (incomplete combustion)</td><td data-label="Traditional">Present</td><td data-label="SMART Kojin">Not detected</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16 }}>
            Read the full breakdown of why controlled, on-site incineration
            outperforms both landfill and uncontrolled burning in our{" "}
            <Link href="/blog/why-incineration-beats-the-alternatives">detailed blog post</Link>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>Full Specifications</h2>
          <p>
            <em>
              Add each model&apos;s exact dimensions, power draw, and
              warranty terms here — pull these from your product datasheet
              so buyers see specifics without needing to ask.
            </em>
          </p>
        </div>
      </section>
      <CtaBand
        heading="Take the First Step Toward Hygiene"
        sub="See SMART Kojin in action with a free, no-obligation demo."
      />
    </Layout>
  );
}
