import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb, CtaBand, Reveal, PhotoSlot } from "../components/UI";
import { CASE_STUDIES, TESTIMONIALS, SITE_URL } from "../lib/content";

export default function CaseStudies({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Case Studies — SMART Kojin in Schools, Offices & Hospitals"
        description="How SMART Kojin's sanitary napkin incinerators are deployed across schools, corporate offices, and hospitals."
        canonical={SITE_URL + "/case-studies"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p>Real deployments, real challenges, real results.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />

      <section className="section">
        <div className="container narrow">
          <p style={{ color: "var(--grey)", fontStyle: "italic" }}>
            Note: the case studies below outline the deployment scenario and
            challenge for each sector. Specific client names and measured
            results will be added as they&apos;re confirmed for publication.
          </p>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="card-grid">
            {CASE_STUDIES.map((cs) => {
              const t = TESTIMONIALS[cs.testimonial];
              return (
                <Reveal as="div" className="card" key={cs.sector}>
                  <div style={{ margin: "-24px -24px 16px" }}>
                    <PhotoSlot caption={`Photo: SMART Kojin deployed at a ${cs.sector.toLowerCase()} site`} size="wide" />
                  </div>
                  <p className="eyebrow">{cs.sector}</p>
                  <h4>Model: {cs.model}</h4>
                  <p style={{ fontWeight: 600 }}>The Challenge</p>
                  <p>{cs.challenge}</p>
                  <p style={{ fontWeight: 600 }}>The Result</p>
                  <p style={{ color: "var(--grey)" }}>{cs.result}</p>
                  {t ? (
                    <div className="testimonial-card" style={{ marginTop: 16, borderTop: "1px solid #e6e6df", paddingTop: 16 }}>
                      <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                      <p className="testimonial-name">{t.name} <span>&mdash; {t.role}</span></p>
                    </div>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want results like these at your facility?"
        sub="Book a free, no-obligation demo."
        href="/contact"
        buttonText="Book a Demo"
      />
    </Layout>
  );
}
