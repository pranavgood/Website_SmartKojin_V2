import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Breadcrumb } from "../../components/UI";
import { BLOG_POSTS, SITE_URL } from "../../lib/content";

export default function BlogIndex({ activePath }) {
  return (
    <Layout activePath={activePath}>
      <NextSeo
        title="Blog | Sanitary Waste Management Insights — SMART Kojin"
        description="Guides on menstrual waste disposal, school and workplace hygiene compliance, and sustainable sanitary napkin management from SMART Kojin."
        canonical={SITE_URL + "/blog"}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Guides on menstrual waste management, compliance, and hygiene for institutions and workplaces.</p>
        </div>
      </section>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="section">
        <div className="container narrow">
          <div className="blog-list">
            {BLOG_POSTS.map((post) => (
              <article className="blog-card" key={post.slug}>
                <span className="blog-category">{post.category}</span>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-meta">{post.date}</p>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`}>Read more →</Link>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "30px" }}>
            <em>
              Looking for the original blog? Earlier posts are archived at{" "}
              <a href="https://smartkojin.com/blogs/" target="_blank" rel="noopener noreferrer">
                smartkojin.com/blogs
              </a>{" "}
              on the old hosting.
            </em>
          </p>
        </div>
      </section>
    </Layout>
  );
}
