import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb } from "../components/UI";
import { SITE_URL } from "../lib/content";

export default function Terms({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Terms & Conditions | SMART Kojin"
        description="Terms of use for the SMART Kojin website."
        canonical={SITE_URL + "/terms"}
        noindex
      />
      <section className="page-hero">
        <div className="container"><h1>Terms &amp; Conditions</h1></div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <section className="section">
        <div className="container narrow blog-post-body">
          <p>
            <em>
              Placeholder terms — replace with terms reviewed by counsel
              before this page goes live. Last updated: July 2026.
            </em>
          </p>
          <h2>Use of this site</h2>
          <p>
            This website is provided by Smartenviro Systems Private
            Limited to share information about SMART Kojin products and
            services, and to let visitors request quotes or demos.
            Content is provided for general informational purposes and
            does not constitute a binding offer; pricing and availability
            are confirmed directly through a quote.
          </p>
          <h2>Intellectual property</h2>
          <p>
            All content on this site — including text, images, and the
            SMART Kojin name and logo — is the property of Smartenviro
            Systems Private Limited unless otherwise noted, and may not be
            reproduced without permission.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:enquiry@smartenvirosystems.com">enquiry@smartenvirosystems.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
