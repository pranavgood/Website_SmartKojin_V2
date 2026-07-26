import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { Breadcrumb, Testimonial, CtaBand, PhotoSlot } from "../../components/UI";
import { TESTIMONIALS, SITE_URL } from "../../lib/content";

export default function MallsGyms({ activePath }) {
  const t = TESTIMONIALS.gym;
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Disposal Machine for Malls & Gyms | SMART Kojin"
        description="Keep high-traffic public washrooms hygienic with SMART Kojin's fully automatic sanitary napkin incinerator for malls, gyms & public spaces."
        canonical={SITE_URL + "/industries/malls-gyms"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Sanitary Napkin Incinerator for Malls &amp; Gyms</h1>
        </div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industry-we-serve" },
          { label: "Malls & Gyms" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <p className="lead">
            Malls, gyms, and other public-facing venues see heavy washroom
            traffic and need a disposal solution that just works, without
            an attendant checking bins throughout the day. SMART Kojin
            processes up to 25–30 napkins per hour automatically, keeping
            public restrooms clean and odor-free.
          </p>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <PhotoSlot caption="SMART Kojin installed in a mall or gym washroom" size="wide" />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Testimonial name={t.name} role={t.role} quote={t.quote} />
        </div>
      </section>
      <CtaBand
        heading="Request a Demo for Your Venue"
        sub="See how SMART Kojin fits your facility, free of charge."
      />
    </Layout>
  );
}
