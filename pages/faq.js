import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";
import { Breadcrumb, FaqItem, CtaBand } from "../components/UI";
import { FAQ_ITEMS, SITE_URL } from "../lib/content";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Faq({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="FAQs | SMART Kojin Sanitary Napkin Incinerator"
        description="Answers to common questions on safety, maintenance, capacity & installation of SMART Kojin's sanitary napkin disposal machines."
        canonical={SITE_URL + "/faq"}
      />
      <JsonLd data={faqSchema} />
      <section className="page-hero">
        <div className="container"><h1>Frequently Asked Questions</h1></div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <section className="section">
        <div className="container narrow">
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        heading="Still have questions?"
        sub="Reach out and we'll get back to you personally."
        buttonText="Contact Us"
        href="/contact"
      />
    </Layout>
  );
}
