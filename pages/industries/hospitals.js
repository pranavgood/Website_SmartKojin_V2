import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, SITE_URL } from "../../lib/content";

export default function Hospitals({ activePath }) {
  const t = TESTIMONIALS.hospital;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Incinerator for Hospitals & Clinics | SMART Kojin"
        description="Reduce infection risk in maternity wards & washrooms with SMART Kojin's safe, automatic sanitary napkin disposal machine for hospitals."
        canonical={SITE_URL + "/industries/hospitals"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Hospitals &amp; Clinics</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Hospitals & Clinics" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Maternity wards, gynecology units, and general hospital
            washrooms all generate sanitary waste that needs fast,
            hygienic, on-site disposal to reduce infection risk. SMART
            Kojin&apos;s fully automatic incineration cycle — 800–900°C
            internally, a cool 37°C exterior — makes it safe for continuous
            use in clinical environments.
          </p>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <PhotoSlot caption="SMART Kojin installed in a hospital/clinic washroom or ward" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Facility"
        sub="See how SMART Kojin fits your facility, free of charge."
      />
    </Layout>
  );
}
