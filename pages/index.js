import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";
import {
  Card,
  CtaBand,
  Reveal,
  StatCounters,
  ModelsFit,
  Statement,
  LogoWall,
  IndustryIcon,
  IndianWomenIllustration,
  WhatWeFight,
  ThreeDignities,
} from "../components/UI";
import {
  EDUCATION_SHORT,
  INDUSTRIES,
  MODELS,
  SMARTENVIRO,
  SITE_URL,
  LOGO,
  BLOG_POSTS,
} from "../lib/content";

const BLOG_TEASER_SLUGS = [
  "why-every-school-needs-a-sanitary-napkin-incinerator",
  "why-incineration-beats-the-alternatives",
  "how-institutions-adopt-on-site-disposal",
];
const BLOG_TEASER_POSTS = BLOG_TEASER_SLUGS.map((slug) =>
  BLOG_POSTS.find((p) => p.slug === slug)
).filter(Boolean);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SMART Kojin",
  url: SITE_URL,
  logo: LOGO,
  description:
    "SMART Kojin manufactures automatic, eco-friendly sanitary napkin disposal machines and incinerators for schools, offices, hospitals and malls.",
  parentOrganization: {
    "@type": "Organization",
    name: SMARTENVIRO.name,
    url: SMARTENVIRO.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7720061676",
    contactType: "customer service",
    email: "enquiry@smartenvirosystems.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/smartenviro-systems-private-limited/",
    "https://www.youtube.com/channel/UCc04ftriK3UoGHVs5jS43Lw",
    SMARTENVIRO.url,
  ],
};

export default function Home({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Sanitary Napkin Incinerator & Disposal Machine"
        description="SMART Kojin's automatic sanitary napkin incinerator offers safe, eco-friendly disposal for offices, schools, hospitals & malls. Book a free demo today."
        canonical={SITE_URL + "/"}
      />
      <JsonLd data={organizationSchema} />

      <section className="video-hero">
        <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
          <source src="/videos/kojin-demo.mp4" type="video/mp4" />
        </video>
        <div className="video-hero-inner container">
          <h1>The Sanitary Napkin Incinerator That Solves Disposal On-Site</h1>
          <p className="hero-sub">
            An automatic sanitary napkin disposal machine and menstrual waste
            incinerator in one — no smoke, no manual handling, ash in under
            3 minutes.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Book a Free Demo</Link>
            <Link href="/smart-kojin" className="btn btn-outline">See How It Works</Link>
          </div>
        </div>
      </section>

      <section className="credibility-strip">
        <div className="container credibility-inner">
          <div className="credibility-brand">
            <img src="/images/smart-kojin-logo.png" alt="SMART Kojin logo" className="site-logo-img" />
          </div>
          {SMARTENVIRO.stats.map((s) => (
            <div className="credibility-item" key={s.label}>
              <span className="credibility-number">{s.number}</span>
              <span className="credibility-label">{s.label}</span>
            </div>
          ))}
          <div className="credibility-item">
            <span className="credibility-label">{SMARTENVIRO.certifications.join(" · ")}</span>
          </div>
        </div>
      </section>

      {/* Emotional opener — leads with the human reason this product exists,
          before any spec or feature talk. Apple/editorial-style split
          layout: one big idea, one big image. */}
      <section className="section alt-bg">
        <Reveal as="div" className="container">
          <Statement
            eyebrow="The Real Problem"
            heading="Disposal shouldn't be the hardest part of someone's day."
            photoNode={<IndianWomenIllustration />}
          >
            <p>
              For millions of women, safe and dignified disposal is still
              missing from the room — quietly avoided, badly handled, or
              simply not there. We built SMART Kojin because that gap
              shouldn&apos;t exist anywhere people are expected to show up
              and perform, every single day.
            </p>
          </Statement>
        </Reveal>
      </section>

      {/* The scale of the problem, in numbers — kept short; full depth lives on the blog */}
      <section className="section">
        <Reveal as="div" className="container narrow">
          <p className="eyebrow">Why This Matters</p>
          <h2>Menstrual waste is a growing problem, not a shrinking one</h2>
          <StatCounters stats={EDUCATION_SHORT.stats} />
          <p style={{ marginTop: 24 }}>{EDUCATION_SHORT.approaches}</p>
        </Reveal>
      </section>

      {/* What we're fighting — improper disposal today vs. SMART Kojin */}
      <section className="section">
        <Reveal as="div" className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">What We&apos;re Fighting</p>
          <h2>Across India, sanitary waste still goes nowhere good.</h2>
          <WhatWeFight />
        </Reveal>
      </section>

      {/* Direct objection-handling — short version; full FAQ page has more */}
      <section className="section">
        <Reveal as="div" className="container narrow">
          <p className="eyebrow">Common Doubts</p>
          <h2>What buyers usually ask before saying yes</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is a sanitary napkin incinerator actually safe?</summary>
              <p>
                Yes — SMART Kojin&apos;s exterior stays around 37°C even
                while the internal chamber runs at 800–900°C, verified with
                a handheld thermometer on our own units. Nothing to touch,
                nothing to get burned by.
              </p>
            </details>
            <details className="faq-item">
              <summary>Will people actually use it instead of a bin?</summary>
              <p>
                It&apos;s built to require zero decision-making — load the
                napkin, sensors do the rest. No button, no manual step to
                remember or skip, unlike an unmarked disposal bin.
              </p>
            </details>
            <details className="faq-item">
              <summary>What does it cost, and is it worth it?</summary>
              <p>
                Pricing depends on the model and your facility&apos;s size —{" "}
                <Link href="/contact">contact us for a quote</Link>. Increasingly,
                it&apos;s also a compliance requirement, not just a nice-to-have —
                see our <Link href="/blog">blog</Link> for the policy details.
              </p>
            </details>
          </div>
        </Reveal>
      </section>

      {/* Models, framed by scenario — no pricing here by design */}
      <section className="section">
        <Reveal as="div" className="container">
          <p className="eyebrow">Three Models</p>
          <h2>Which one fits your space?</h2>
          <p className="lead">
            Same technology, sized for your footfall — from a single
            washroom to a full campus.
          </p>
          <ModelsFit models={MODELS} />
          <p style={{ marginTop: 20 }}>
            <Link href="/contact" className="btn btn-primary">Contact Us for Pricing</Link>
          </p>
        </Reveal>
      </section>

      <section className="section alt-bg">
        <Reveal as="div" className="container">
          <p className="eyebrow">Solutions</p>
          <h2>Built for high-traffic washrooms</h2>
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
        </Reveal>
      </section>

      {/* Three Kinds of Dignity — the emotional payoff of the whole page */}
      <section className="section" style={{ background: "linear-gradient(135deg,#f1f8e8 0%,#e7f3d6 55%,#d9edc4 100%)" }}>
        <Reveal as="div" className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">What One Machine Changes</p>
          <h2>One incinerator. Three kinds of dignity.</h2>
          <p className="lead">A single SMART Kojin unit changes the room for everyone in it — not just the person using it.</p>
          <div style={{ marginTop: 32 }}>
            <ThreeDignities />
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal as="div" className="container narrow" style={{ textAlign: "center" }}>
          <p className="eyebrow">Proof</p>
          <h2>See it working across schools, offices &amp; hospitals</h2>
          <p className="lead">Real deployments, real challenges, real results.</p>
          <Link href="/case-studies" className="btn btn-primary">View Case Studies</Link>
        </Reveal>
      </section>

      <section className="section alt-bg">
        <Reveal as="div" className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">Trusted By</p>
          <h2>Installed across schools, offices &amp; hospitals nationwide</h2>
          <LogoWall names={["School / College", "Corporate Office", "Hospital", "Municipal Body", "Factory", "Mall / Gym"]} />
          <p style={{ marginTop: 16, color: "var(--grey)", fontSize: "0.85rem" }}>
            <em>Placeholder — replace with real, named client logos once cleared for public use.</em>
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal as="div" className="container">
          <p className="eyebrow">From the Blog</p>
          <h2>Compliance, environment, and adoption — explained</h2>
          <div className="card-grid">
            {BLOG_TEASER_POSTS.map((post) => (
              <div className="card blog-card" key={post.slug}>
                <span className="blog-category">{post.category}</span>
                <h4><Link href={`/blog/${post.slug}`}>{post.title}</Link></h4>
                <p>{post.description.slice(0, 120)}&hellip;</p>
                <Link href={`/blog/${post.slug}`}>Read more &rarr;</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, textAlign: "center" }}>
            <Link href="/blog" className="btn btn-outline">View All Posts</Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        heading="Prioritize Hygiene with SMART Kojin"
        sub="Get the best sanitary napkin disposal machine today."
        href="/contact"
        buttonText="Request a Free Demo"
      />
    </Layout>
  );
}
