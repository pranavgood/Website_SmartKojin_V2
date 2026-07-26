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
export function Statement({ eyebrow, heading, children, photoCaption, photoSize, reverse }) {
  return (
    <div className={`statement-grid ${reverse ? "reverse" : ""}`.trim()}>
      <div className="statement-text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{heading}</h2>
        {children}
      </div>
      <div className="statement-photo">
        <PhotoSlot caption={photoCaption} size={photoSize} />
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
