import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NAV, SMARTENVIRO } from "../lib/content";

export default function Header({ activePath }) {
  const [open, setOpen] = useState(false);
  const clicksRef = useRef(0);
  const timerRef = useRef(null);

  // Two small easter eggs: a friendly console message for anyone poking
  // around dev tools, and a playful reveal if you click the logo 5 times
  // quickly. Neither affects real navigation beyond a brief delay.
  useEffect(() => {
    console.log(
      "%c\u{1F44B} Hey there, curious developer.",
      "font-size:16px;font-weight:700;color:#4f7a1f;"
    );
    console.log(
      "%cWe built SMART Kojin because disposal shouldn't be the hardest part of someone's day. Want to help us build better tech for real problems? enquiry@smartenvirosystems.com",
      "color:#5b6b52;font-size:13px;"
    );
  }, []);

  function handleLogoClick(e) {
    e.preventDefault();
    clicksRef.current += 1;
    clearTimeout(timerRef.current);
    if (clicksRef.current >= 5) {
      clicksRef.current = 0;
      const toast = document.createElement("div");
      toast.textContent =
        "\u{1F33F} Easter egg! Every SMART Kojin unit means one less pad in a landfill for 500+ years.";
      toast.style.cssText =
        "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#2f4a17;color:#fff;padding:14px 22px;border-radius:12px;font-size:14px;max-width:340px;text-align:center;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.25)";
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = "opacity .5s";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
      }, 3500);
      return;
    }
    timerRef.current = setTimeout(() => {
      clicksRef.current = 0;
      window.location.href = "/";
    }, 450);
  }

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <img src={SMARTENVIRO.logo} alt={SMARTENVIRO.name + " logo"} />
          <span>
            Powered by{" "}
            <a href={SMARTENVIRO.url} target="_blank" rel="noopener noreferrer">
              {SMARTENVIRO.name}
            </a>{" "}
            — 10+ years in waste management, ISO &amp; CE certified
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" onClick={handleLogoClick}>
            <img src="/images/smart-kojin-logo.png" alt="SMART Kojin logo" className="site-logo-img" />
          </Link>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>

          <nav className={open ? "main-nav main-nav--open" : "main-nav"}>
            <ul>
              {NAV.map((item) =>
                item.external ? (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={activePath === item.href ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link href="/pricing" className="btn btn-primary nav-cta">
              Get A Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
