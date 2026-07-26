import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { Breadcrumb } from "../components/UI";
import { SITE_URL } from "../lib/content";

export default function PrivacyPolicy({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Privacy Policy | SMART Kojin"
        description="How SMART Kojin and Smartenviro Systems collect, use, and protect information submitted through this website."
        canonical={SITE_URL + "/privacy-policy"}
        noindex
      />
      <section className="page-hero">
        <div className="container"><h1>Privacy Policy</h1></div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container narrow blog-post-body">
          <p>
            <em>
              Placeholder policy — replace with your finalized privacy
              policy, reviewed against actual data practices (form
              submissions, analytics, cookies) before this page goes live.
              Last updated: July 2026.
            </em>
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit a form on this site (Contact, Get a Quote), we
            collect the information you provide directly — name,
            organization, email, phone number, and message content. If
            analytics tracking is enabled, we also collect standard usage
            data such as pages visited and general location.
          </p>
          <h2>How we use it</h2>
          <p>
            Information submitted through forms is used solely to respond
            to your inquiry, provide a quote, or schedule a demo. We do
            not sell your information to third parties.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:enquiry@smartenvirosystems.com">enquiry@smartenvirosystems.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
