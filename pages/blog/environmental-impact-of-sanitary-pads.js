import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "environmental-impact-of-sanitary-pads";
const title = "The Environmental Impact of Sanitary Pads — And What Actually Helps";
const description =
  "12 billion pads a year. 500-800 years to degrade. Up to 90% plastic. The numbers behind India's least-talked-about waste stream, why 'just recycle it' isn't the easy answer it sounds like, and what genuinely helps.";

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
            Here&apos;s a number worth sitting with: a sanitary pad used for
            a few hours today will still be sitting in a landfill, largely
            intact, when your great-great-great-grandchildren are adults.
            Menstrual waste is one of those problems that&apos;s enormous
            in scale but almost invisible in everyday conversation — nobody
            posts about it, nobody protests it, and it just keeps
            accumulating, one quiet, ordinary use at a time. Here&apos;s
            what the numbers actually look like, and — more importantly —
            what genuinely helps, versus what just sounds like it does.
          </p>

          <h2>The scale of it</h2>
          <p>
            India generates well over 12 billion used sanitary napkins a
            year. Most of them end up in landfills or waterways — not
            because people don&apos;t care, but because safe disposal
            infrastructure is often simply missing at the exact point
            where it&apos;s needed: the washroom itself. A single pad can
            take 500 to 800 years to degrade, and is frequently composed of
            up to 90% plastic. That figure surprises most people the first
            time they hear it — a product that touches skin for a few
            hours is, materially, closer to a plastic bottle than a paper
            towel.
          </p>
          <p>
            That plastic content isn&apos;t just a "takes up space"
            problem. Over decades, it slowly sheds microplastics into soil
            and waterways. And when it&apos;s burned improperly — in an
            open fire, at low temperature, with no air treatment — it
            releases the exact fumes that give "burning pads" its bad
            reputation. That reputation is deserved for open burning. It
            is not, as we&apos;ll get to, the same thing as controlled
            incineration.
          </p>
          <blockquote className="pull-quote">
            A pad used for six hours can outlive the person who used it —
            by roughly six centuries.
          </blockquote>

          <h2>Two ways to handle it, and why neither is automatically right</h2>
          <p>
            Broadly, institutions managing sanitary waste at scale choose
            between two real approaches — and it&apos;s worth being honest
            that both have genuine trade-offs, because "recycle everything"
            is a much easier sentence to say than a plan to actually
            execute.
          </p>
          <p>
            <strong>On-site incineration</strong> destroys the waste
            immediately, at the point of use, with nothing to store or
            transport. This matters enormously for schools, hostels, and
            facilities in areas without reliable waste-collection
            logistics — which, in India, is most places outside a handful
            of large cities. <strong>Off-site collection-and-recycling</strong>{" "}
            gathers used products, stores them, and processes them later
            into raw materials elsewhere. Done well, it can recover
            material for reuse — but it depends entirely on consistent,
            reliable pickup being in place, week after week, which not
            every institution can count on, and which tends to quietly
            break down exactly when it&apos;s needed most.
          </p>
          <p>
            Neither approach is universally "correct" — the right choice
            depends on your facility&apos;s location, volume, and existing
            waste-management infrastructure. SMART Kojin is built for the
            first: safe, immediate, self-contained, on-site disposal, for
            the very large number of facilities where that logistics chain
            simply doesn&apos;t exist yet.
          </p>

          <h2>What &quot;safe&quot; actually requires</h2>
          <p>
            Not all incineration is equal, and this is the part most
            people never get told. The two things worth checking before
            choosing any incinerator are the operating temperature (SMART
            Kojin runs at 800–900°C internally, which is what achieves
            complete incineration rather than partial burning) and
            whether the exhaust air is actually treated before release,
            not just vented into the room or outside. Partial combustion
            at lower temperatures is what produces the harmful smoke
            people associate with "burning pads." Proper high-temperature
            incineration with genuine air treatment simply doesn&apos;t
            produce it — the difference isn&apos;t marginal, it&apos;s the
            entire safety case.
          </p>
          <div className="callout">
            <span className="callout-label">The honest bottom line</span>
            <p>
              Recycling infrastructure for sanitary waste barely exists at
              scale in India today. Landfilling is what happens by default
              when nothing else is in place. On-site incineration, done at
              the right temperature with real air treatment, is the one
              option that works immediately, everywhere, without depending
              on infrastructure that hasn&apos;t been built yet.
            </p>
          </div>

          <p>
            <Link href="/how-it-works">See exactly how SMART Kojin&apos;s cycle works →</Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="See the numbers for your facility"
        sub="Request a free demo and we'll walk through sizing and safety together."
      />
    </Layout>
  );
}
