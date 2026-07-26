import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "why-incineration-beats-the-alternatives";
const title = "Why On-Site Incineration Beats Landfill and Uncontrolled Burning";
const description =
  "A detailed, data-backed look at what sanitary napkins are made of, why they're hard to dispose of safely, and how controlled on-site incineration compares to landfill and traditional burning on real emissions numbers.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-07-26",
  author: { "@type": "Organization", name: "SMART Kojin" },
  publisher: { "@type": "Organization", name: "SMART Kojin" },
  mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
};

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
            "Just burn it" and "just recycle it" both sound simple until
            you look at what a sanitary napkin is actually made of, and
            what burning or landfilling it actually produces. We&apos;ve
            sat across the table from facilities managers who&apos;d heard
            both claims from different vendors and had no way to tell
            which one was true. So here&apos;s the detailed version — the
            one with real numbers in it, not the marketing-brochure
            version.
          </p>

          <h2>What a sanitary napkin actually is</h2>
          <p>
            A conventional sanitary napkin is a layered product, not a
            single material — which is exactly why it&apos;s hard to
            dispose of safely. A typical pad includes a perforated plastic
            top layer (polypropylene and polyethylene), synthetic
            fragrance and dye chemicals, a synthetic-fibre or
            cellulose-pulp transfer layer, a sodium polyacrylate
            super-absorbent core, a polyurethane hot-melt adhesive, a
            petrochemical-based polyethylene bottom layer, and a
            silicone-coated release paper. Put simply: most of a pad, by
            volume, is plastic and petrochemical material — which is why
            it takes an estimated 500 to 800 years to degrade in a
            landfill, and why open burning at low, uncontrolled
            temperatures releases genuinely harmful smoke.
          </p>

          <h2>The scale of the problem</h2>
          <p>
            India has an estimated 336 million menstruating women and
            girls. Of those who use sanitary pads rather than other
            materials, that works out to roughly 121 million regular pad
            users — at an average of 8 pads per cycle, that&apos;s
            somewhere around 1 billion pads used every month, or 12
            billion a year. Sanitary waste is estimated to make up around
            0.65% of India&apos;s total solid waste stream by weight —
            roughly 925 tonnes generated daily. That sounds small as a
            percentage, but 925 tonnes a day of material that&apos;s
            mostly plastic, handled inconsistently, and often mixed with
            general waste, is not a small problem in practice.
          </p>

          <h2>What official guidance actually says</h2>
          <p>
            Menstrual hygiene management (MHM) guidance in India ranks
            disposal practices on a rough safety spectrum. At the unsafe
            end: throwing sanitary waste loose into fields or onto
            rooftops, or wrapping it in paper or plastic and discarding it
            with general trash. In the middle: burying it to decompose, or
            burning it in the open in rural and peri-urban areas — both
            better than the unsafe end, but still uncontrolled. At the
            safe end: using small-scale incinerators at the community or
            school level, or managing waste through a proper municipal
            solid-waste system. The guidance is consistent: incineration,
            done properly, sits at the safe end of that spectrum — open
            burning does not.
          </p>
          <p>
            That "done properly" qualifier matters enormously, and it&apos;s
            the whole reason this article exists. Incineration in general
            is not automatically safe. Uncontrolled, low-temperature
            burning of plastic-heavy material produces genuinely toxic
            emissions. Controlled, high-temperature incineration with air
            treatment does not. Those are two very different things that
            both get called "incineration," and the difference between
            them is the entire point.
          </p>

          <h2>The numbers: landfill vs. traditional incineration vs. SMART Kojin</h2>
          <p>
            Figures below are from SMART Kojin&apos;s own product testing,
            shown per pad or in parts per million (PPM) as measured, and
            compared against landfill disposal (no incineration) and
            generic uncontrolled traditional incineration.
          </p>
          <div className="models-table-wrap">
            <table className="models-table">
              <thead>
                <tr>
                  <th>Pollutant</th>
                  <th>Landfill</th>
                  <th>Traditional Incineration</th>
                  <th>SMART Kojin</th>
                </tr>
              </thead>
              <tbody>
                <tr><td data-label="Pollutant">CO₂</td><td data-label="Landfill">21.4 g/pad</td><td data-label="Traditional">10–12 g/pad</td><td data-label="SMART Kojin">≤0.5 g/pad</td></tr>
                <tr><td data-label="Pollutant">CH₄ (Methane)</td><td data-label="Landfill">0.009 g/pad<br />(225× CO₂ impact)</td><td data-label="Traditional">0 g/pad</td><td data-label="SMART Kojin">0 g/pad</td></tr>
                <tr><td data-label="Pollutant">CO</td><td data-label="Landfill">N/A</td><td data-label="Traditional">~2744 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">SO₂</td><td data-label="Landfill">N/A</td><td data-label="Traditional">~332 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">NOx</td><td data-label="Landfill">N/A</td><td data-label="Traditional">~65 PPM</td><td data-label="SMART Kojin">≤1 PPM</td></tr>
                <tr><td data-label="Pollutant">Dioxins &amp; Furans</td><td data-label="Landfill">Released</td><td data-label="Traditional">Present</td><td data-label="SMART Kojin">Not detected</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The pattern across every pollutant is the same: landfill
            avoids combustion emissions but generates methane and leaves
            plastic to persist for centuries; uncontrolled traditional
            incineration burns the material but without proper
            temperature or air treatment, producing high levels of carbon
            monoxide, sulfur dioxide, nitrogen oxides and dioxins;
            controlled incineration with high operating temperature and
            air treatment — the approach SMART Kojin is built on —
            addresses both problems, destroying the material completely
            while keeping emissions at or near detection limits.
          </p>
          <blockquote className="pull-quote">
            "Incineration" isn&apos;t one thing with one safety profile.
            An open fire and a controlled 800–900°C chamber with treated
            air both get called incineration — one produces the toxic
            smoke people fear, the other doesn&apos;t produce it at all.
          </blockquote>

          <h2>What to actually check before choosing an incinerator</h2>
          <p>
            If you&apos;re evaluating any sanitary napkin incinerator, not
            just ours, two things matter more than anything else: the
            actual operating temperature of the combustion chamber (SMART
            Kojin runs at 800–900°C, which is what achieves complete
            rather than partial combustion), and whether exhaust air is
            genuinely treated before release rather than just vented. Ask
            for emissions data, not just a temperature spec — a hot
            chamber with no air treatment can still produce the exact
            smoke and odor problems people associate with "burning pads."
          </p>

          <p>
            <Link href="/how-it-works">See exactly how SMART Kojin&apos;s cycle works →</Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="See the emissions data for your facility"
        sub="Request a free demo and we'll walk through the numbers together."
      />
    </Layout>
  );
}
