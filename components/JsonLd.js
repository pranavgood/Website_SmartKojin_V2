import Head from "next/head";

// Renders one or more JSON-LD blocks via plain <script> tags in the document head.
// Deliberately NOT using next-seo's JSON-LD components here: those components
// vary between next-seo major versions, and this file couldn't be test-built in
// the environment it was written in. A raw <script type="application/ld+json">
// tag works identically across every Next.js and next-seo version, so this is
// the more reliable choice even though next-seo is still used for titles/meta.
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Head>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
