import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand, StepIcon } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "how-sanitary-napkin-incinerators-work";
const title = "How Sanitary Napkin Incinerators Actually Work";
const description =
  "A plain-language, step-by-step walkthrough of the load-sense-incinerate-collect cycle inside a modern sanitary napkin incinerator — why temperature and air treatment both matter, and what to check before buying one.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-07-24",
  dateModified: "2026-07-28",
  author: { "@type": "Organization", name: "SMART Kojin" },
  publisher: { "@type": "Organization", name: "SMART Kojin" },
  mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
};

const steps = [
  {
    h: "1. Load",
    p: "The used napkin goes into a brown paper pouch and is placed in the Loading Bin. That's the entire interaction — no direct handling of the used product by anyone, at any point, ever.",
  },
  {
    h: "2. Sense",
    p: "Built-in sensors detect the napkin has been loaded and automatically start the cycle. There's no button to press, no switch to flip, and nothing for a tired or rushed staff member to forget on a busy day.",
  },
  {
    h: "3. Incinerate",
    p: "The internal chamber reaches 800–900°C — hot enough for complete combustion rather than partial burning — while the exterior housing stays a safe, cool 37°C to the touch, the same as a resting hand.",
  },
  {
    h: "4. Collect",
    p: "Treated air exits through the exhaust with no harmful emissions, and what's left is a small amount of fine ash in a tray, emptied periodically. That's it. That's the whole cycle.",
  },
];

export default function Post({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo title={title} description={description} canonical={`${SITE_URL}/blog/${slug}`} />
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <div className="container"><h1>{title}</h1></div>
      </section>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />
      <section className="section">
        <div className="container narrow blog-post-body">
          <p>
            The word &quot;incinerator&quot; does a lot of unearned damage
            to this conversation. Say it out loud and most people picture
            an industrial furnace, an open flame, something with a
            chimney. In practice, the modern version sitting quietly in a
            washroom corner is a compact, fully sealed appliance — closer
            in footprint and feel to a large microwave than anything
            resembling a furnace. Here&apos;s exactly what happens inside
            one, from the moment a napkin goes in to the moment it&apos;s
            gone.
          </p>

          <div className="card-grid" style={{ margin: "28px 0" }}>
            {steps.map((s, i) => (
              <div className="card step-card" key={s.h}>
                <StepIcon index={i} />
                <h3 style={{ marginTop: 8 }}>{s.h}</h3>
                <p style={{ marginBottom: 0 }}>{s.p}</p>
              </div>
            ))}
          </div>

          <h2>Why the details matter more than the marketing</h2>
          <p>
            Two numbers determine whether an incinerator is actually safe,
            and almost nobody asks about the second one. The first is
            internal chamber temperature — it has to be high enough
            (800–900°C in SMART Kojin&apos;s case) to fully combust the
            material rather than scorching it. Partial combustion at lower
            temperatures is exactly what produces the visible smoke and
            odor that gives incineration its bad name. The second, less
            obvious number is exterior surface temperature — a completely
            separate engineering problem from the internal burn, and the
            one that determines whether the unit is actually safe to have
            in a public washroom at all. SMART Kojin&apos;s housing stays
            around 37°C even while the chamber runs at 800–900°C
            internally — you could rest your hand on it mid-cycle.
          </p>
          <blockquote className="pull-quote">
            A furnace that&apos;s only safe from the outside isn&apos;t
            safe. The housing has to stay cool while the chamber runs
            hot enough to fully destroy the material — both, at the same
            time, every single cycle.
          </blockquote>
          <p>
            The other thing worth checking is cycle time and real-world
            throughput, not just the per-cycle number in isolation. SMART
            Kojin completes a full cycle in about 3 minutes and can handle
            25–30 napkins an hour on its base model — the figure that
            actually determines whether a unit keeps up during a busy
            break period in a high-traffic washroom, not just whether it
            works at all in a quiet demo.
          </p>

          <p>
            <Link href="/smart-kojin">See full specifications and model options →</Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="Want to see it in person?"
        sub="Book a free, no-obligation demo at your facility."
      />
    </Layout>
  );
}
