import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function StatCounters({ stats }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-counters" ref={ref}>
      {stats.map((s) => (
        <div key={s.label}>
          <div className="stat-counter-number">{started ? s.number : "0"}</div>
          <div className="stat-counter-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Breadcrumb({ items }) {
  // items: [{ label, href? }] — last item has no href
  return (
    <div className="breadcrumb container">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {i < items.length - 1 ? " › " : ""}
        </span>
      ))}
    </div>
  );
}

export function CtaBand({ heading, sub, buttonText = "Request a Free Demo", href = "/pricing" }) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{heading}</h2>
        <p>{sub}</p>
        <Link href={href} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export function Card({ title, text, href, linkText, photoCaption, icon }) {
  return (
    <div className="card">
      {photoCaption ? (
        <div style={{ margin: "-24px -24px 16px" }}>
          <PhotoSlot caption={photoCaption} size="wide" />
        </div>
      ) : null}
      {icon || null}
      <h4>{title}</h4>
      <p>{text}</p>
      {href ? <Link href={href}>{linkText || "Learn more →"}</Link> : null}
    </div>
  );
}

export function Testimonial({ name, role, quote }) {
  return (
    <div className="card testimonial-card">
      <p className="quote">&ldquo;{quote}&rdquo;</p>
      <p className="testimonial-name">
        {name} <span>&mdash; {role}</span>
      </p>
    </div>
  );
}

export function FaqItem({ q, a }) {
  return (
    <details className="faq-item">
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  );
}

export function ModelsTable({ models }) {
  return (
    <div className="models-table-wrap">
      <table className="models-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Capacity</th>
            <th>No Regret Price (INR)</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr key={m.id}>
              <td data-label="Model">{m.name}</td>
              <td data-label="Capacity">{m.capacity}</td>
              <td data-label="Price"><span className="price-pill">{m.price}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Model line-up framed by use case, deliberately no price shown — the
// homepage should sell "which model fits your scenario," not a price
// list; pricing is handled through Contact/quote instead.
export function ModelsFit({ models }) {
  return (
    <div className="card-grid">
      {models.map((m) => (
        <div className="card" key={m.id}>
          <h4>{m.name}</h4>
          <p style={{ fontWeight: 600, marginBottom: 4 }}>{m.capacity}</p>
          <p className="eyebrow" style={{ marginTop: 12 }}>Best For</p>
          <p>{m.bestFor}</p>
          <p style={{ color: "var(--grey)", fontSize: "0.92rem" }}>{m.scenario}</p>
        </div>
      ))}
    </div>
  );
}

// Placeholder for a real photo that hasn't been sourced yet. Renders as a
// clearly-labeled "PHOTO" slot with a caption describing what should go
// there, rather than a broken image — swap for a real <img> once the asset
// exists. `size` accepts "tall" | "wide" | "square" (default 4:3).
// Text wordmark fallback — the real logo file hotlinks to the old
// smartkojin.com hosting, which no longer reliably serves it (that domain
// now points at this new site). Use this until you send over the actual
// logo file to self-host in /public/images/.
export function Wordmark({ size = "md" }) {
  return <span className={`wordmark wordmark-${size}`}>SMART<span>Kojin</span></span>;
}

export function PhotoSlot({ caption, size = "" }) {
  return (
    <div className={`photo-slot ${size}`.trim()}>
      <svg className="photo-slot-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8a2 2 0 0 1 2-2h1.2l.9-1.5A1.5 1.5 0 0 1 9.4 4h5.2a1.5 1.5 0 0 1 1.3.75L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span className="photo-slot-caption">{caption}</span>
    </div>
  );
}

// Trusted-by logo wall — placeholder rows until real client logos are
// cleared for public use. Pass `names` (e.g. facility/sector types) to at
// least look intentional rather than empty.
export function LogoWall({ names }) {
  return (
    <div className="logo-wall">
      {names.map((n) => (
        <div className="logo-slot" key={n}>{n}</div>
      ))}
    </div>
  );
}

// Big image + text editorial block, Apple/press-kit style. `reverse` flips
// which side the photo sits on.
export function Statement({ eyebrow, heading, children, photoCaption, photoSize, reverse, photoNode }) {
  return (
    <div className={`statement-grid ${reverse ? "reverse" : ""}`.trim()}>
      <div className="statement-text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{heading}</h2>
        {children}
      </div>
      <div className="statement-photo">
        {photoNode || <PhotoSlot caption={photoCaption} size={photoSize} />}
      </div>
    </div>
  );
}

export function BadgeStrip({ badges }) {
  return (
    <div className="badge-grid">
      {badges.map((b) => (
        <div className="badge-item" key={b.title}>
          <h4>{b.title}</h4>
          <p>{b.text}</p>
        </div>
      ))}
    </div>
  );
}

// Small flat-illustration badge icons, same visual language as the "Three
// Kinds of Dignity" icons on the homepage — one per industry, drawn as
// simple original shapes (not stock/traced art) so there's no licensing
// question. `.icon-badge`/`.wiggle-on-hover` give a light hover animation.
const INDUSTRY_ICON_PATHS = {
  "schools-colleges": (
    <>
      <circle cx="36" cy="36" r="36" fill="#eef7e2" />
      <path d="M36 20 L60 30 L36 40 L12 30 Z" fill="#4f7a1f" />
      <path d="M20 34 L20 46 Q36 54 52 46 L52 34" fill="none" stroke="#4f7a1f" strokeWidth="2.5" />
      <line x1="60" y1="30" x2="60" y2="42" stroke="#4f7a1f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="45" r="2" fill="#8dc63f" />
    </>
  ),
  "corporate-offices": (
    <>
      <circle cx="36" cy="36" r="36" fill="#e3f0f7" />
      <rect x="24" y="18" width="24" height="38" rx="2" fill="#7fb8d6" />
      <rect x="29" y="24" width="5" height="5" fill="#f4faf7" />
      <rect x="38" y="24" width="5" height="5" fill="#f4faf7" />
      <rect x="29" y="33" width="5" height="5" fill="#f4faf7" />
      <rect x="38" y="33" width="5" height="5" fill="#f4faf7" />
      <rect x="29" y="42" width="5" height="5" fill="#f4faf7" />
      <rect x="38" y="42" width="5" height="5" fill="#f4faf7" />
      <rect x="32" y="49" width="8" height="7" fill="#3a6a8a" />
    </>
  ),
  hospitals: (
    <>
      <circle cx="36" cy="36" r="36" fill="#fbe4d9" />
      <circle cx="36" cy="36" r="20" fill="#e2565a" />
      <rect x="31" y="24" width="10" height="24" rx="2" fill="#fff" />
      <rect x="24" y="31" width="24" height="10" rx="2" fill="#fff" />
    </>
  ),
  "malls-gyms": (
    <>
      <circle cx="36" cy="36" r="36" fill="#f2e9d8" />
      <rect x="16" y="30" width="8" height="12" rx="2" fill="#c9973f" />
      <rect x="48" y="30" width="8" height="12" rx="2" fill="#c9973f" />
      <rect x="22" y="34" width="28" height="4" rx="2" fill="#8a6a2e" />
    </>
  ),
  "municipal-corporations": (
    <>
      <circle cx="36" cy="36" r="36" fill="#eef2e4" />
      <path d="M20 30 L36 18 L52 30 Z" fill="#6f8a4f" />
      <rect x="20" y="30" width="32" height="4" fill="#6f8a4f" />
      <rect x="23" y="34" width="4" height="18" fill="#8fa96b" />
      <rect x="31" y="34" width="4" height="18" fill="#8fa96b" />
      <rect x="39" y="34" width="4" height="18" fill="#8fa96b" />
      <rect x="47" y="34" width="4" height="18" fill="#8fa96b" />
      <rect x="18" y="52" width="36" height="4" fill="#6f8a4f" />
    </>
  ),
  "factories-industrial": (
    <>
      <circle cx="36" cy="36" r="36" fill="#e7f0e0" />
      <rect x="18" y="38" width="36" height="18" fill="#7a8f6a" />
      <path d="M22 38 L22 26 L30 32 L30 26 L38 32 L38 26 L46 32 L46 38 Z" fill="#8fa680" />
      <rect x="42" y="16" width="5" height="14" fill="#7a8f6a" />
      <circle cx="44.5" cy="14" r="3" fill="#c7d6bc" opacity="0.8" />
      <path d="M26 46 Q30 42 34 46 Q30 50 26 46Z" fill="#8dc63f" />
    </>
  ),
};

export function IndustryIcon({ slug, size = 48 }) {
  const inner = INDUSTRY_ICON_PATHS[slug];
  if (!inner) return null;
  return (
    <svg className="icon-badge wiggle-on-hover" width={size} height={size} viewBox="0 0 72 72">
      {inner}
    </svg>
  );
}

// One icon per "How It Works" step — load / sense / incinerate / collect.
const STEP_ICON_PATHS = [
  <>
    <circle cx="36" cy="36" r="36" fill="#eef7e2" />
    <rect x="24" y="30" width="24" height="18" rx="3" fill="#8dc63f" />
    <rect x="30" y="20" width="12" height="14" rx="2" fill="#4f7a1f" />
    <rect x="20" y="46" width="32" height="4" rx="2" fill="#4f7a1f" opacity="0.5" />
  </>,
  <>
    <circle cx="36" cy="36" r="36" fill="#e3f0f7" />
    <circle cx="36" cy="40" r="6" fill="#3a6a8a" />
    <path d="M36 24 L36 30" stroke="#7fb8d6" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 30 Q36 14 50 30" stroke="#7fb8d6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M16 36 Q36 8 56 36" stroke="#7fb8d6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
  </>,
  <>
    <circle cx="36" cy="36" r="36" fill="#fdece3" />
    <path d="M36 18 Q46 30 40 40 Q46 40 46 48 Q46 58 36 58 Q26 58 26 48 Q26 42 30 40 Q28 34 32 30 Q30 36 36 34 Q40 30 36 18Z" fill="#e2705a" />
    <path d="M36 40 Q40 46 36 52 Q32 46 36 40Z" fill="#f4b45a" />
  </>,
  <>
    <circle cx="36" cy="36" r="36" fill="#f2f0ea" />
    <path d="M20 34 L52 34 L47 50 Q47 52 45 52 L27 52 Q25 52 25 50 Z" fill="#9a9789" />
    <ellipse cx="36" cy="34" rx="16" ry="3" fill="#c7c4b7" />
    <circle cx="30" cy="40" r="1.6" fill="#6f6c60" />
    <circle cx="40" cy="42" r="1.6" fill="#6f6c60" />
    <circle cx="36" cy="46" r="1.6" fill="#6f6c60" />
  </>,
];

export function StepIcon({ index, size = 48 }) {
  const inner = STEP_ICON_PATHS[index];
  if (!inner) return null;
  return (
    <svg className="icon-badge floaty" width={size} height={size} viewBox="0 0 72 72">
      {inner}
    </svg>
  );
}

// Flat-illustration crowd of Indian women — original drawing (not traced
// from any reference image), warm radiant palette, used in the homepage
// "Real Problem" section. Approved direction: "Concept v4 — Indian Women,
// Illustration + Graffiti Accents."
export function IndianWomenIllustration() {
  return (
    <svg viewBox="0 0 900 220" width="100%" height="auto" style={{ display: "block", maxWidth: 820, margin: "0 auto" }} role="img" aria-label="Flat illustration of a group of Indian women, warm radiant color palette">
      <title>A group of Indian women, flat illustration style</title>
      <ellipse cx="450" cy="230" rx="480" ry="90" fill="#f6cdb4" opacity="0.55" />
      <g transform="translate(20,40)"><path d="M0 180 Q0 100 60 95 Q120 100 120 180 Z" fill="#e8927a" /><circle cx="60" cy="55" r="42" fill="#8a4a2f" /><path d="M20 40 Q60 4 100 40 Q104 60 92 66 L92 50 Q60 32 28 50 L28 66 Q16 60 20 40Z" fill="#241a12" /><path d="M88 66 Q98 100 92 150 Q86 152 84 148 Q90 100 80 68Z" fill="#241a12" /><circle cx="60" cy="58" r="2.6" fill="#b3242f" /></g>
      <g transform="translate(115,15)"><path d="M5 205 Q5 118 70 112 Q135 118 135 205 Z" fill="#7fb8d6" /><circle cx="70" cy="75" r="44" fill="#c97a52" /><path d="M20 66 Q70 14 120 66 Q132 130 104 156 Q116 96 70 84 Q24 96 36 156 Q8 130 20 66Z" fill="#f3ded0" /><path d="M104 96 Q128 120 118 170" stroke="#f3ded0" strokeWidth="14" fill="none" strokeLinecap="round" /><circle cx="70" cy="78" r="2.6" fill="#8a1f1f" /></g>
      <g transform="translate(245,0)"><path d="M8 220 Q8 128 78 122 Q148 128 148 220 Z" fill="#e2565a" /><path d="M110 128 Q150 150 138 210 L118 206 Q126 158 100 138Z" fill="#8dc63f" /><circle cx="78" cy="90" r="46" fill="#5c3420" /><circle cx="78" cy="56" r="30" fill="#1c130c" /><path d="M50 58 Q78 40 106 58 Q108 76 96 80 Q100 60 78 58 Q56 60 60 80 Q48 76 50 58Z" fill="#1c130c" /><circle cx="78" cy="94" r="2.8" fill="#b3242f" /></g>
      <g transform="translate(390,25)"><path d="M2 195 Q2 108 66 102 Q130 108 130 195 Z" fill="#8dc63f" /><circle cx="66" cy="66" r="42" fill="#f6ddc4" /><path d="M28 50 Q66 12 104 50 Q108 74 96 80 Q100 46 66 46 Q32 46 36 80 Q24 74 28 50Z" fill="#3a2a18" /><circle cx="66" cy="30" r="15" fill="#3a2a18" /><circle cx="66" cy="68" r="2.6" fill="#b3242f" /><circle cx="42" cy="120" r="3" fill="#e0c15a" /><circle cx="90" cy="120" r="3" fill="#e0c15a" /></g>
      <g transform="translate(515,10)"><path d="M5 210 Q5 120 72 114 Q139 120 139 210 Z" fill="#f2a9b8" /><circle cx="72" cy="78" r="45" fill="#e0a479" /><path d="M24 64 Q72 14 120 64 Q132 148 108 172 Q98 100 72 92 Q46 100 36 172 Q12 148 24 64Z" fill="#241a12" /></g>
      <g transform="translate(650,30)"><path d="M4 190 Q4 106 64 100 Q124 106 124 190 Z" fill="#e8927a" /><circle cx="64" cy="64" r="41" fill="#e7b98d" /><path d="M28 50 Q64 10 100 50 Q104 68 92 74 L92 56 Q64 40 36 56 L36 74 Q24 68 28 50Z" fill="#f4ede3" /><circle cx="64" cy="68" r="2.4" fill="#8a1f1f" /></g>
      <g transform="translate(770,45)"><path d="M2 180 Q2 100 58 94 Q114 100 114 180 Z" fill="#7fb8d6" /><circle cx="58" cy="60" r="38" fill="#8a4a2f" /><path d="M24 46 Q58 12 92 46 Q94 62 84 66 Q88 44 58 42 Q28 44 32 66 Q22 62 24 46Z" fill="#1c130c" /><circle cx="30" cy="72" r="3" fill="#e0c15a" /><circle cx="86" cy="72" r="3" fill="#e0c15a" /></g>
    </svg>
  );
}

// Two-panel "what we're fighting" — improper disposal today vs. SMART Kojin.
export function WhatWeFight() {
  return (
    <div className="what-we-fight-grid">
      <div className="what-we-fight-panel">
        <svg width="100%" height="110" viewBox="0 0 260 110">
          <ellipse cx="130" cy="98" rx="110" ry="9" fill="#d8d4c8" />
          <path d="M60 92 Q40 74 60 58 Q80 70 96 56 Q114 72 100 90 Q80 98 60 92Z" fill="#c7c2b3" />
          <path d="M150 36 Q158 26 168 34" stroke="#b7b0a0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M160 26 Q168 14 180 22" stroke="#b7b0a0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        <p className="eyebrow" style={{ marginTop: 16 }}>Today, mostly</p>
        <h3>Thrown loose. Buried. Burned in the open.</h3>
        <p style={{ color: "var(--grey)", fontSize: "0.95rem" }}>
          Most used sanitary waste in India is discarded with general trash or burned uncontrolled — releasing exactly the toxic smoke everyone&apos;s trying to avoid.
        </p>
      </div>
      <div className="what-we-fight-panel what-we-fight-panel--positive">
        <svg width="100%" height="110" viewBox="0 0 260 110">
          <ellipse cx="130" cy="98" rx="110" ry="9" fill="#cfe6a8" />
          <path d="M78 90 Q60 72 78 56 Q94 68 108 54 Q124 70 112 88 Q94 96 78 90Z" fill="#8dc63f" opacity="0.85" />
          <rect x="140" y="24" width="46" height="70" rx="8" fill="#4f7a1f" />
          <rect x="148" y="34" width="30" height="14" rx="3" fill="#eef7e2" />
          <path d="M112 60 Q128 50 146 48" stroke="#4f7a1f" strokeWidth="2.5" fill="none" strokeDasharray="3 4" strokeLinecap="round" />
        </svg>
        <p className="eyebrow" style={{ marginTop: 16, color: "var(--green-dark)" }}>With SMART Kojin</p>
        <h3>Destroyed on the spot. Gone in 3 minutes.</h3>
        <p style={{ color: "var(--grey)", fontSize: "0.95rem" }}>
          Load it, and it&apos;s incinerated immediately at 800–900°C with treated air — nothing stored, nothing transported, nothing left to bury or burn in the open.
        </p>
      </div>
    </div>
  );
}

// "Three Kinds of Dignity" — cleaning-staff dignity, women's dignity,
// environmental happiness. Same flat-illustration language as the industry
// and step icons above.
export function ThreeDignities() {
  return (
    <div className="card-grid" style={{ textAlign: "left" }}>
      <div className="card">
        <svg width="64" height="64" viewBox="0 0 72 72" style={{ marginBottom: 12 }}>
          <circle cx="36" cy="36" r="36" fill="#eef7e2" />
          <circle cx="17" cy="55" r="1.6" fill="#b8c9a3" /><circle cx="21" cy="57" r="1.2" fill="#b8c9a3" /><circle cx="14" cy="58" r="1" fill="#b8c9a3" />
          <line x1="50" y1="18" x2="27" y2="53" stroke="#a97c50" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M22 58 L27 53 L34 55 L27 62 Z" fill="#e0c15a" />
          <path d="M28 44 Q30 30 42 30 Q50 31 49 42 Q49 50 40 52 L30 50 Z" fill="#8dc63f" />
          <circle cx="41" cy="21" r="9" fill="#c97a52" />
          <path d="M33 18 Q41 8 49 18 Q50 24 46 25 Q47 17 41 16 Q35 17 36 25 Q32 24 33 18Z" fill="#2e2016" />
          <path d="M44 30 Q49 24 52 19" stroke="#c97a52" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
        <h4>Dignity for cleaning staff</h4>
        <p>No one has to touch, sort, or transport used waste by hand. A hard, humiliating part of the job simply disappears.</p>
      </div>
      <div className="card">
        <svg width="64" height="64" viewBox="0 0 72 72" style={{ marginBottom: 12 }}>
          <circle cx="36" cy="36" r="36" fill="#fbe4d9" />
          <path d="M18 58 Q18 40 36 38 Q54 40 54 58 Z" fill="#f2a9b8" />
          <circle cx="36" cy="26" r="14" fill="#8a4a2f" />
          <path d="M22 22 Q36 2 50 22 Q52 34 44 37 Q46 24 36 22 Q26 24 28 37 Q20 34 22 22Z" fill="#2e2016" />
          <circle cx="36" cy="30" r="1.8" fill="#b3242f" />
          <path d="M32 32 Q36 35 40 32" stroke="#8a4a2f" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M56 16 L57.5 20 L61.5 21.5 L57.5 23 L56 27 L54.5 23 L50.5 21.5 L54.5 20 Z" fill="#e2565a" />
        </svg>
        <h4>Dignity for women</h4>
        <p>Safe, private, stigma-free disposal in seconds — no bin to be seen near, no awkward walk, no second thought.</p>
      </div>
      <div className="card">
        <svg width="64" height="64" viewBox="0 0 72 72" style={{ marginBottom: 12 }}>
          <circle cx="36" cy="36" r="36" fill="#e3f0f7" />
          <circle cx="18" cy="16" r="2" fill="#a9dc63" /><circle cx="55" cy="14" r="1.6" fill="#a9dc63" /><circle cx="60" cy="34" r="1.6" fill="#a9dc63" />
          <circle cx="36" cy="38" r="20" fill="#7fb8d6" />
          <path d="M20 30 Q28 24 34 30 Q30 36 24 34 Q20 36 20 30Z" fill="#8dc63f" />
          <path d="M38 26 Q48 24 52 32 Q46 34 42 30 Q38 30 38 26Z" fill="#8dc63f" />
          <path d="M26 42 Q34 38 42 44 Q50 46 48 52 Q38 56 30 52 Q24 48 26 42Z" fill="#6fae2e" />
          <circle cx="30" cy="36" r="1.6" fill="#2e332d" /><circle cx="42" cy="36" r="1.6" fill="#2e332d" />
          <path d="M29 42 Q36 47 43 42" stroke="#2e332d" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <h4>A happier environment</h4>
        <p>No landfill plastic, no open burning, no toxic smoke — just ash, in about three minutes, with nothing left to bury.</p>
      </div>
    </div>
  );
}
