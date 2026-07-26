import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb, Card, CtaBand, IndustryIcon } from "../components/UI";
import { INDUSTRIES, SITE_URL } from "../lib/content";

export default function IndustryWeServe({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Industries We Serve | Sanitary Napkin Disposal Solutions"
        description="SMART Kojin serves schools, colleges, hostels, hospitals, malls, gyms & corporate offices with automatic sanitary napkin disposal machines."
        canonical={SITE_URL + "/industry-we-serve"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>SMART Kojin&apos;s automatic sanitary napkin incinerator is built for any high-traffic shared washroom.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries We Serve" }]} />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {INDUSTRIES.map((ind) => (
              <Card
                key={ind.slug}
                title={ind.name}
                text={ind.blurb}
                href={`/industries/${ind.slug}`}
                icon={<IndustryIcon slug={ind.slug} />}
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        heading="Not sure which fits your space?"
        sub="Tell us about your facility and we'll recommend the right setup."
      />
    </Layout>
  );
}
