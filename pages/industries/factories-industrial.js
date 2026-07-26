import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, EDUCATION, SITE_URL } from "../../lib/content";

export default function FactoriesIndustrial({ activePath }) {
  const t = TESTIMONIALS.factory;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Incinerator for Factories & Industrial Sites | SMART Kojin"
        description="Support a large female workforce with SMART Kojin's automatic sanitary napkin incinerator, built into existing factory washroom blocks."
        canonical={SITE_URL + "/industries/factories-industrial"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Factories &amp; Industrial Sites</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Factories & Industrial Sites" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Factories and industrial sites with a large female workforce
            face the same disposal problem as any high-traffic facility —
            multiplied across shift changes. SMART Kojin fits into
            existing washroom blocks on the shop floor, giving workers a
            safe, discreet, fully automatic way to dispose of used
            sanitary napkins without adding a manual collection step or
            extra staffing to your operations.
          </p>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <p className="eyebrow">Policy &amp; Compliance</p>
          <h2>Backed by Government Guidance</h2>
          <div className="policy-block">
            <p>{EDUCATION.policy}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <PhotoSlot caption="SMART Kojin installed in a factory/industrial washroom block" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Facility"
        sub="See how SMART Kojin fits your shop floor, free of charge."
      />
    </Layout>
  );
}
