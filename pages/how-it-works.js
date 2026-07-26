import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb, CtaBand, StepIcon } from "../components/UI";
import { SITE_URL } from "../lib/content";

const STEPS = [
  { title: "1. Load", text: "Place the used napkin in a brown paper pouch and insert it into the Loading Bin." },
  { title: "2. Sense", text: "Built-in sensors detect the napkin and automatically activate the incineration process." },
  { title: "3. Incinerate", text: "The chamber reaches 800–900°C internally while the exterior stays a cool, safe 37°C." },
  { title: "4. Collect", text: "Treated air exits through the exhaust with zero harmful emissions, and ash collects in the tray for easy disposal." },
];

export default function HowItWorks({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="How SMART Kojin's Sanitary Napkin Incinerator Works"
        description="See the 4-step process: load, sense, incinerate at 800–900°C, and collect ash. Fully automatic, emission-free, done in 3 minutes."
        canonical={SITE_URL + "/how-it-works"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>How SMART Kojin Works</h1>
          <p>Fully automatic, done in about 3 minutes, no buttons required.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
      <section className="section">
        <div className="container">
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div className="card step-card" key={s.title}>
                <StepIcon index={i} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt-bg">
        <div className="container narrow">
          <h2>Why it&apos;s different</h2>
          <p>
            No buttons, no operator, no manual sorting. SMART Kojin is
            fully automatic — the whole cycle from load to ash takes about
            3 minutes, and the machine can process 25–30 napkins per hour,
            which is enough for continuous use in high-traffic washrooms.
          </p>
        </div>
      </section>
      <CtaBand heading="See It In Person" sub="Book a free, no-obligation demo at your facility." />
    </Layout>
  );
}
