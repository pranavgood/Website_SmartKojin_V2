import { DefaultSeo } from "next-seo";
import Script from "next/script";
import SEO from "../next-seo.config";
import "../styles/globals.css";

// Google Analytics 4 — no analytics were installed on the previous site
// (flagged as a HIGH priority gap in the July 2026 SEO audit). Replace
// GA_MEASUREMENT_ID below with your real GA4 ID (starts with "G-") once
// you've created a property at analytics.google.com — tracking won't fire
// until you do.
const GA_MEASUREMENT_ID = "G-L8G51XQZG4";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXXX") && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} activePath={router.pathname} />
    </>
  );
}
