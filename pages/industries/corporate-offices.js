import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, SITE_URL } from "../../lib/content";

export default function CorporateOffices({ activePath }) {
  const t = TESTIMONIALS.office;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Disposal Machine for Offices | SMART Kojin"
        description="Support workplace hygiene compliance with SMART Kojin's automatic sanitary napkin incinerator — built for corporate office washrooms."
        canonical={SITE_URL + "/industries/corporate-offices"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Corporate Offices</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Corporate Offices" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Workplace hygiene is increasingly part of how companies support
            their female employees — a simple, everyday part of dignity in
            shared washrooms. SMART Kojin gives corporate offices, call
            centers, and factories a clean, modern, emission-free way to
            handle sanitary waste without an operator or manual bin
            collection.
          </p>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <PhotoSlot caption="SMART Kojin installed in a corporate office washroom" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Office"
        sub="See how SMART Kojin fits your facility, free of charge."
      />
    </Layout>
  );
}
