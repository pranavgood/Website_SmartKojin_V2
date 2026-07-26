import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, EDUCATION, SITE_URL } from "../../lib/content";

export default function SchoolsColleges({ activePath }) {
  const t = TESTIMONIALS.college;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Incinerator for Schools & Colleges | SMART Kojin"
        description="Give students safe, discreet on-site disposal. SMART Kojin's automatic incinerator installs in girls' washrooms & hostels across India."
        canonical={SITE_URL + "/industries/schools-colleges"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Schools &amp; Colleges</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Schools & Colleges" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Menstrual hygiene management is a real challenge for schools,
            colleges and student hostels — overflowing bins, odor, and
            inconsistent disposal habits are common complaints. SMART Kojin
            installs directly in girls&apos; washrooms and hostel bathrooms,
            giving students a safe, discreet, fully automatic way to
            dispose of used sanitary napkins on the spot, with zero manual
            handling and zero harmful emissions.
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
          <PhotoSlot caption="SMART Kojin installed in a school/college washroom or hostel" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Campus"
        sub="See how SMART Kojin fits your facility, free of charge."
      />
    </Layout>
  );
}
