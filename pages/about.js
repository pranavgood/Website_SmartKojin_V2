import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb, CtaBand, StatCounters, PhotoSlot } from "../components/UI";
import { SITE_URL, SMARTENVIRO, FOUNDER } from "../lib/content";

export default function About({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="About SMART Kojin | Sanitary Napkin Incinerator Manufacturer"
        description="SMART Kojin is a product of Smartenviro Systems — 10+ years and 900+ installations in Indian waste management, now applied to sanitary napkin disposal."
        canonical={SITE_URL + "/about"}
      />
      <section className="page-hero">
        <div className="container"><h1>About SMART Kojin</h1></div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <section className="section">
        <div className="container narrow">
          <p>
            SMART Kojin is a product of{" "}
            <a href={SMARTENVIRO.url} target="_blank" rel="noopener noreferrer">
              Smartenviro Systems
            </a>
            , a Pune-based waste-management company with 10+ years and 900+
            installations across India, treating an estimated 170 tonnes of
            waste daily under ISO 9001:2015, ISO 45001, ISO 50001 and CE
            certification. We built SMART Kojin because menstrual waste
            disposal was the one high-traffic institutional waste stream
            still being handled badly — thrown loose, burned unsafely, or
            just left to accumulate. Our mission is to make dignified,
            stigma-free, on-site disposal the default in every school,
            office, hospital and public facility, not the exception.
          </p>
          <div className="mini-cards">
            <div className="card">
              <h4>Mission</h4>
              <p>
                To enable dignified and eco-conscious menstrual hygiene
                through safe, stigma-free sanitary waste disposal solutions
                for every institutional space.
              </p>
            </div>
            <div className="card">
              <h4>Vision</h4>
              <p>
                A future where menstrual dignity is universal, and sanitary
                waste leaves no mark on women&apos;s confidence or the
                environment.
              </p>
            </div>
            <div className="card">
              <h4>Approach</h4>
              <p>
                On-site incineration destroys waste immediately, with
                nothing to store, transport, or leave for someone else to
                deal with — built for facilities that need disposal to
                just work, every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <p className="eyebrow">Backed By Smartenviro Systems</p>
          <h2>Not a startup guessing at waste management</h2>
          <StatCounters stats={SMARTENVIRO.stats} />
          <p style={{ marginTop: 24 }}>
            {SMARTENVIRO.certifications.join(" · ")}
          </p>
        </div>
      </section>

      {/* Founder message — real quote/name/photo still needed, see
          lib/content.js FOUNDER for what to replace before launch. */}
      <section className="section">
        <div className="container">
          <div className="founder-block">
            <PhotoSlot caption="Founder headshot — professional, approachable, not a stock photo" size="square" />
            <div>
              <p className="eyebrow">A Message From Our Founder</p>
              <p className="founder-quote">{FOUNDER.quote}</p>
              <p className="founder-name">{FOUNDER.name}</p>
              <p className="founder-title">{FOUNDER.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company / facility photos — real photography needed here more
          than almost anywhere else on the site; this is what makes the
          company feel real rather than a template. */}
      <section className="section alt-bg">
        <div className="container">
          <p className="eyebrow">Inside Smartenviro Systems</p>
          <h2>A real facility, a real team</h2>
          <div className="photo-grid" style={{ marginTop: 24 }}>
            <PhotoSlot caption="Manufacturing facility, exterior or floor shot" />
            <PhotoSlot caption="Team at work — assembly, QA, or engineering" />
            <PhotoSlot caption="An installed SMART Kojin unit in the field" />
            <PhotoSlot caption="Founders or leadership team, on-site" />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want to know more about our story?"
        sub="Get in touch and we'll walk you through how SMART Kojin came to be."
        buttonText="Contact Us"
        href="/contact"
      />
    </Layout>
  );
}
