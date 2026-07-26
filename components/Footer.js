import Link from "next/link";
import { Wordmark } from "./UI";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><Wordmark size="lg" /></div>
          <p>
            Hygiene matters, and we&apos;ve made it smarter. SMART Kojin sets
            the benchmark in sanitary napkin disposal, ensuring safety for
            workers.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/smartenviro-systems-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UCc04ftriK3UoGHVs5jS43Lw/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/industry-we-serve">Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link href="/smart-kojin">Product &amp; How It Works</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us / Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Pune, Maharashtra, INDIA</p>
          <p><a href="tel:+917720061676">+91 7720061676</a></p>
          <p><a href="mailto:enquiry@smartenvirosystems.com">enquiry@smartenvirosystems.com</a></p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 12, display: "inline-block" }}>
            Request a Demo
          </Link>
        </div>
      </div>
      <div className="container copyright">
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <span aria-hidden="true"> · </span>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
        &copy; {new Date().getFullYear()} SMART Kojin, a Smartenviro Systems product. All rights reserved.
      </div>
    </footer>
  );
}
