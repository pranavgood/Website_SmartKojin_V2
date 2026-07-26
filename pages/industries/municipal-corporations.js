import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, EDUCATION, SITE_URL } from "../../lib/content";

export default function MunicipalCorporations({ activePath }) {
  const t = TESTIMONIALS.municipal;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Incinerator for Municipal Corporations | SMART Kojin"
        description="Equip public washrooms and civic facilities with SMART Kojin's self-contained, automatic sanitary napkin incinerator — no collection routes needed."
        canonical={SITE_URL + "/industries/municipal-corporations"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Municipal Corporations</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Municipal Corporations" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Public washrooms under municipal jurisdiction see some of the
            heaviest, most unpredictable footfall of any facility type —
            bus stands, markets, public toilets and civic buildings all
            need a disposal solution that doesn&apos;t depend on a
            collection schedule. SMART Kojin installs directly into
            existing washroom blocks and destroys waste on the spot, so
            there&apos;s no bin to empty, no route to plan, and no
            manual handling for sanitation staff.
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
          <PhotoSlot caption="SMART Kojin installed in a public/municipal washroom facility" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Facility"
        sub="See how SMART Kojin fits your public washrooms, free of charge."
      />
    </Layout>
  );
}
