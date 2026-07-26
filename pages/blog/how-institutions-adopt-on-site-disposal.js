import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "how-institutions-adopt-on-site-disposal";
const title = "How Institutions Actually Adopt On-Site Sanitary Waste Disposal";
const description =
  "Most facilities don't decide to install a sanitary napkin incinerator in one meeting. Here's how the decision typically moves through an organization, and what usually unblocks it.";

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
            Sanitary waste disposal is a strange category to sell into.
            Almost everyone agrees it&apos;s a real problem. Almost no one
            has it on this quarter&apos;s priority list. We&apos;ve had the
            same conversation dozens of times: someone on a facilities or
            HR team says, almost apologetically, "we&apos;ve actually been
            meaning to sort this out for a while." Here&apos;s what
            we&apos;ve seen about how the decision actually moves through
            an organization after that sentence gets said, and what tends
            to unblock it.
          </p>
          <blockquote className="pull-quote">
            Nobody disagrees that this needs fixing. The problem is that
            "important but not urgent" is exactly the category of task
            that never quite makes it to the top of anyone&apos;s list.
          </blockquote>

          <h2>Why it stalls, even when everyone agrees</h2>
          <p>
            Menstrual waste disposal rarely has a single, obvious owner
            inside a facility. Facilities teams see it as a hygiene issue.
            HR sees it as a wellbeing or compliance issue. Admin sees it as
            a budget line with no urgent deadline attached. Because it
            touches several teams lightly rather than one team fully, it&apos;s
            easy for it to stay a known problem without becoming anyone&apos;s
            active project — not because it doesn&apos;t matter, but
            because "important but not urgent" items are exactly the ones
            that get deprioritized.
          </p>

          <h2>What actually moves it forward</h2>
          <p>
            In practice, three things tend to convert "we should look into
            this" into an actual purchase decision. First, a compliance
            trigger — a new state mandate, an audit finding, or guidance
            like the Swachh Vidyalaya recommendation that a sanitary
            napkin incinerator be installed in every school toilet, which
            turns a soft preference into a documented requirement.
            Second, a visible failure of the current approach — an
            overflowing bin, a complaint, a facility inspection that flags
            improper disposal — which makes the cost of doing nothing
            concrete rather than abstract. Third, someone internally
            deciding to own it end-to-end: gathering a quote, sizing the
            right model for the space, and taking it to whoever approves
            capex, rather than waiting for consensus to form on its own.
          </p>

          <h2>The questions that come up at each stage</h2>
          <p>
            Early on, the questions are usually about safety and
            legitimacy: is this actually safe to have in a washroom, does
            it require an operator, what happens to the ash. Once there&apos;s
            internal buy-in, the questions shift to sizing and fit: how
            many units for how many washrooms, what capacity for our
            footfall, what the installation actually involves. Right
            before approval, the questions are almost always about cost
            and ongoing responsibility: what it costs, what maintenance
            looks like, and who is responsible for it day to day. Knowing
            which stage you&apos;re at usually tells you which question to
            ask us first.
          </p>

          <h2>What we&apos;ve built to make adoption easier</h2>
          <p>
            We don&apos;t publish a fixed price list publicly, on purpose —
            sizing depends on your facility&apos;s footfall and layout, and
            a number without that context tends to create either sticker
            shock or false confidence. Instead, we size a recommendation
            to your actual space and give you a quote you can take
            directly to whoever approves the purchase. We also don&apos;t
            expect one person to have all the answers before reaching out
            — if you&apos;re still at the "is this legitimate" stage,{" "}
            <Link href="/faq">start with our FAQ</Link>; if you&apos;re
            past that and thinking about sizing,{" "}
            <Link href="/pricing">request a quote</Link> directly.
          </p>

          <p>
            <Link href="/blog/installing-smart-kojin-what-execution-looks-like">
              Once you&apos;re ready to move forward, here&apos;s what installation actually looks like →
            </Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="Not sure where you are in the decision?"
        sub="Tell us about your facility — we'll tell you what to ask next."
      />
    </Layout>
  );
}
