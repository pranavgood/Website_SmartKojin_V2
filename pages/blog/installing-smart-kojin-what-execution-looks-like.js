import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import JsonLd from "../../components/JsonLd";
import { Breadcrumb, CtaBand } from "../../components/UI";
import { SITE_URL } from "../../lib/content";

const slug = "installing-smart-kojin-what-execution-looks-like";
const title = "Installing SMART Kojin: What Execution Actually Looks Like";
const description =
  "From first quote to a running unit: a practical walkthrough of site assessment, installation, staff handover, and ongoing maintenance for SMART Kojin.";

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
            Deciding to install a sanitary napkin incinerator is one thing.
            Actually getting a unit running, staff trained, and disposal
            working reliably day to day is another — and it&apos;s the
            part almost nobody asks about before signing off on a
            purchase, then worries about immediately afterward. Here&apos;s
            what that process actually involves, start to finish.
          </p>
          <blockquote className="pull-quote">
            The best sign an installation went well is that nobody
            notices it happened — the washroom just works differently
            from that day on, with nothing new to learn.
          </blockquote>

          <h2>1. Site assessment and sizing</h2>
          <p>
            Before anything ships, we work out how many units your
            facility actually needs and which model fits. This comes down
            to two things: footfall (how many people, how often) and
            layout (how many washroom blocks, how far apart). A single
            washroom with moderate footfall is a different sizing problem
            than a multi-block campus with a busy peak hour — see our{" "}
            <Link href="/smart-kojin">model line-up</Link> for how the
            three sizes map to different scenarios. Get this step wrong
            and you either overspend or end up with a bottleneck at peak
            times, so we&apos;d rather ask a few extra questions upfront.
          </p>

          <h2>2. Installation</h2>
          <p>
            SMART Kojin is designed to install into existing washroom
            infrastructure — it doesn&apos;t require structural changes,
            plumbing work, or a dedicated utility room. Installation is a
            matter of placement, power connection, and a functional check,
            typically completed in a single visit per site.
          </p>

          <h2>3. Staff and user handover</h2>
          <p>
            Because the unit is fully automatic — load the napkin, sensors
            do the rest, no buttons — there&apos;s minimal training
            required for end users. The handover that actually matters is
            with whoever will be responsible for the unit day to day:
            typically a facilities or housekeeping team member who empties
            the ash tray and does a basic visual check. This is a short,
            practical walkthrough, not a certification course.
          </p>

          <h2>4. The first few weeks</h2>
          <p>
            Adoption by end users tends to happen quickly precisely
            because there&apos;s no decision required — the unit works the
            same way every time, so there&apos;s nothing to learn or
            remember. The thing worth actually monitoring in the first few
            weeks is usage volume against your original sizing assumption,
            so you know early if a location is running hotter than
            expected.
          </p>

          <h2>5. Ongoing maintenance</h2>
          <p>
            SMART Kojin is built for minimal upkeep — the primary routine
            task is emptying the ash tray, which is designed to be simple
            and infrequent given the machine reduces each napkin to a
            small volume of ash. Beyond that, it&apos;s a periodic
            functional check, not a maintenance contract with recurring
            technician visits.
          </p>

          <h2>What to have ready before you request a quote</h2>
          <p>
            To get an accurate quote and installation timeline quickly,
            it helps to have on hand: the number of washroom blocks and
            approximate daily footfall per block, your facility type
            (school, office, hospital, and so on), and any timeline
            constraints (e.g. before a new term or audit). We&apos;ll
            handle sizing from there.
          </p>

          <p>
            <Link href="/pricing">Request a quote and we&apos;ll walk you through sizing →</Link>
          </p>
        </div>
      </section>
      <CtaBand
        heading="Ready to see it installed?"
        sub="Book a free demo and we'll walk through your specific site."
      />
    </Layout>
  );
}
