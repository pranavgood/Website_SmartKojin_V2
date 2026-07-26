import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "why-every-school-needs-a-sanitary-napkin-incinerator";
const title = "Why Every School Needs a Sanitary Napkin Incinerator";
const description =
  "A girl who starts skipping school on her period isn't a statistic you notice until you go looking. Government guidelines, state mandates, and a 2026 Supreme Court ruling all point the same direction — here's what schools actually need, and why the disposal step is the one everyone forgets.";

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
        <div className="container">
          <h1>{title}</h1>
        </div>
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
            Most schools that talk to us about menstrual hygiene didn&apos;t
            start with a policy question. They started with a smell. A
            washroom nobody wanted to walk past. A bin that had to be
            emptied by hand, by someone who didn&apos;t sign up for that
            part of the job. A student who quietly stopped using the
            washroom on certain days of the month, and a teacher who
            noticed only months later that attendance for a handful of
            girls dipped in a pattern nobody had bothered to graph.
          </p>
          <p>
            That&apos;s the part that doesn&apos;t make it into most
            compliance memos: disposal isn&apos;t a facilities footnote.
            It&apos;s the difference between a girl using the washroom
            normally on day two of her period, and a girl deciding it&apos;s
            easier to just stay home. If you run facilities for a school,
            this is worth reading in full before your next inspection — not
            because an inspector will ask about it, but because a student
            already has an opinion about it.
          </p>

          <h2>The policy backdrop</h2>
          <p>
            The Government of India&apos;s Swachh Bharat Mission (Gramin)
            guidelines, under the Swachh Vidyalaya programme, formally
            recommend a sanitary napkin incinerator in every school toilet.
            That&apos;s not a suggestion buried in an annexure — it&apos;s
            treated as a baseline expectation for what a functioning school
            washroom looks like. States including Karnataka, Maharashtra,
            and Rajasthan have gone further and made installation a formal
            requirement for schools above a minimum student strength, and
            compliance is increasingly checked during school inspections
            and tied to funding eligibility.
          </p>
          <p>
            In January 2026, the Supreme Court went further still, holding
            that menstrual hygiene is integral to the right to life under
            Article 21, and directing states to ensure every school
            provides sanitary products — which, in practice, means schools
            also need a safe, on-site way to dispose of them. You
            can&apos;t hand a student a pad and stop there; the same
            institution that provides it has to own what happens to it
            afterward.
          </p>
          <div className="callout">
            <span className="callout-label">Why this changes the conversation</span>
            <p>
              Before 2026, menstrual hygiene in schools was largely a state
              and department-level guideline — important, but easy for an
              individual school to treat as aspirational. A Supreme Court
              ruling grounding it in a fundamental right changes what
              "we&apos;ll get to it eventually" actually costs an
              institution to say out loud.
            </p>
          </div>

          <h2>Why on-site incineration specifically</h2>
          <p>
            Schools face a specific, compounding version of this problem.
            Volume is high and concentrated — hundreds of students sharing
            a handful of washroom blocks, all on overlapping cycles.
            Storage space is limited, and nobody wants a room for holding
            used sanitary waste for days. And outside major cities, waste
            collection schedules are inconsistent at best, which means
            anything you store is stored on faith that someone will
            eventually come for it.
          </p>
          <p>
            An on-site incinerator like SMART Kojin solves for exactly
            that combination. No need to store used napkins for days
            awaiting pickup. No transport of hazardous waste off campus,
            which is its own liability question most schools have never
            had to think through. No manual handling by staff or
            students — which matters as much for dignity as for hygiene.
            The napkin goes in, and within about 3 minutes it&apos;s
            reduced to ash. Nothing waits. Nothing gets forgotten in a
            back room over a long weekend.
          </p>
          <blockquote className="pull-quote">
            The real cost of getting this wrong isn&apos;t a fine. It&apos;s
            a student who quietly decides the school building isn&apos;t a
            place she can fully be in, five days out of every month.
          </blockquote>

          <h2>What to actually look for</h2>
          <p>
            Not every product marketed as a "sanitary napkin incinerator"
            does what that name implies. If you&apos;re evaluating options
            for your institution, we&apos;d push you to confirm three
            things before anything else:
          </p>
          <ol>
            <li>
              <strong>It&apos;s genuinely automatic.</strong> No buttons,
              no operator, nothing a staff member needs to be trained to
              switch on correctly every single time. If it needs a person
              to remember a step, it will eventually fail on the one day
              that person is out.
            </li>
            <li>
              <strong>It&apos;s emission-free, not just low-emission.</strong>{" "}
              Ask for actual emissions data, not a marketing claim. There is
              a real, measurable difference between a hot chamber with no
              air treatment and one that&apos;s genuinely clean — see our{" "}
              <Link href="/blog/why-incineration-beats-the-alternatives">
                detailed emissions comparison
              </Link>{" "}
              if you want the numbers.
            </li>
            <li>
              <strong>It&apos;s sized for your peak, not your average.</strong>{" "}
              SMART Kojin&apos;s smallest model handles 30 napkins an hour —
              for a large campus with several washroom blocks and a busy
              break period, sizing this correctly matters more than the
              headline price ever will.
            </li>
          </ol>
          <p>
            Get those three right, and disposal stops being a thing anyone
            in your building has to think about at all — which, for a
            problem this quietly disruptive, is exactly the point.
          </p>

          <p>
            <Link href="/industries/schools-colleges">
              See SMART Kojin&apos;s dedicated page for schools &amp; colleges →
            </Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="Ready to bring your school into compliance?"
        sub="Request a free demo sized for your campus."
      />
    </Layout>
  );
}
