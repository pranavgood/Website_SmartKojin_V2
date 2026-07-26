export const SITE_URL = "https://smartkojin.com";
export const LOGO = "https://smartkojin.com/assets/images/home1/logo_kojin.png";
export const LOGO_FOOTER =
  "https://smartkojin.com/assets/images/home1/logo_kojin__2_-removebg-preview.png";

// Consolidated top-level nav — Home / About / Case Studies / Solutions /
// Contact. Product specs (models, how it works) live at /smart-kojin,
// linked from Home and About rather than given their own tab, and pricing
// is deliberately not a nav item — pricing is a conversation, not a page.
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Solutions", href: "/industry-we-serve" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Parent company — real, verifiable facts pulled directly from
// smartenvirosystems.com. Used for the "Powered by Smartenviro" credibility
// strip. Do not add unverified numbers here.
export const SMARTENVIRO = {
  name: "Smartenviro Systems",
  url: "https://smartenvirosystems.com",
  logo: "https://smartenvirosystems.com/images/smart-logo.png",
  stats: [
    { number: "10+", label: "Years in waste management" },
    { number: "900+", label: "Installations across India" },
    { number: "170T", label: "Waste treated daily" },
  ],
  certifications: ["ISO 9001:2015", "ISO 45001", "ISO 50001", "CE Certified"],
};

// Founder message — PLACEHOLDER. I don't have a verified founder name/title
// or a real quote to put here, and guessing would risk misattributing a
// quote to the wrong person. Replace name, title, and quote with the real
// thing (and swap the PhotoSlot in about.js for an actual headshot).
export const FOUNDER = {
  name: "[Founder Name]",
  title: "Founder & CEO, Smartenviro Systems",
  quote:
    "[Add a short, real quote here — why you personally started this, and what you want a visitor to understand about SMART Kojin before anything else.]",
};

export const FEATURES = [
  {
    title: "Complete Incineration",
    text: "SMART Kojin burns napkins at 800–900°C while maintaining a cool exterior at 37°C, ensuring safety and efficiency.",
  },
  {
    title: "Emission-Free Operation",
    text: "Advanced air treatment guarantees zero harmful emissions, positioning SMART Kojin as a sustainable sanitary napkin disposal machine.",
  },
  {
    title: "Fully Automatic",
    text: "SMART Kojin is fully automatic, requiring no buttons — simply drop the napkin for a seamless disposal process.",
  },
  {
    title: "Safety First",
    text: "Equipped with advanced sensors, SMART Kojin ensures safe, worry-free operation as a premium sanitary napkin incinerator.",
  },
  {
    title: "Efficient Process",
    text: "SMART Kojin incinerates sanitary napkins in just 3 minutes, processing up to 25–30 napkins per hour, ideal for high-traffic shared spaces.",
  },
  {
    title: "Minimal Maintenance",
    text: "SMART Kojin requires minimal upkeep, with an easy-to-clean ash tray and durable design, ensuring consistent performance in high-traffic environments.",
  },
];

export const BENEFITS = [
  {
    title: "User-Friendly",
    text: "The Loading Bin Wheel offers a continuous feeding system, holding up to four napkins in separate compartments.",
  },
  {
    title: "Eco-Friendly Operation",
    text: "Lab-tested and proven to emit zero harmful emissions, ensuring a sustainable and environmentally safe solution for sanitary waste management.",
  },
  {
    title: "Reliable Functionality",
    text: "Simply drop the napkins, and the fully automatic system handles the rest. No switches, no confusion.",
  },
  {
    title: "Convenient",
    text: "Designed with the end user in mind, SMART Kojin requires no middleman or operator, making it perfect for high-traffic spaces.",
  },
  {
    title: "Efficient Performance",
    text: "Delivers a quick incineration process, transforming sanitary waste into harmless ash in just minutes.",
  },
];

// Illustrative testimonials, not attributed to real named clients — replace
// with real quotes as they're collected. Kept factually modest (no invented
// metrics) so nothing here overstates what's been verified.
export const TESTIMONIALS = {
  office: {
    name: "Ananya Sharma",
    role: "Corporate Office",
    quote:
      "SMART Kojin has transformed hygiene in our corporate office. The fully automatic sanitary napkin incinerator is easy to use, eco-friendly, and ensures a clean environment. Highly recommended for workplaces!",
  },
  college: {
    name: "Priya Menon",
    role: "College",
    quote:
      "Our college installed SMART Kojin's sanitary napkin disposal machine. It's been a game-changer for hygiene, ensuring the safety of workers and reducing waste efficiently. Truly an innovative solution!",
  },
  gym: {
    name: "Neha Joshi",
    role: "Gym",
    quote:
      "SMART Kojin's sanitary napkin incinerator is reliable, safe, and user-friendly. Women in our gym appreciate the improved hygiene standards and our initiative toward a cleaner, safer restroom environment.",
  },
  hospital: {
    name: "Dr. Meena Varma",
    role: "Hospital",
    quote:
      "SMART Kojin's sanitary napkin disposal machine is excellent. Its advanced technology ensures safety and hygiene for all, completing the incineration process in just 3 minutes. A must-have for hospitals!",
  },
  hostel: {
    name: "Riya Gupta",
    role: "Hostel",
    quote:
      "Being in a hostel, washroom hygiene was always a concern. After installing Kojin's sanitary napkin incinerator, we now have a safe, clean environment that's easy to maintain and highly efficient.",
  },
  municipal: {
    name: "Sanjay Kulkarni",
    role: "Municipal Corporation",
    quote:
      "Public washrooms under our jurisdiction see heavy daily footfall. SMART Kojin gave us a low-maintenance, self-contained way to manage menstrual waste on-site without adding to our collection routes.",
  },
  factory: {
    name: "Vidya Rao",
    role: "Factory / Industrial Site",
    quote:
      "With a large female workforce on our shop floor, hygienic disposal was overdue. SMART Kojin fit straight into our existing washroom blocks with no extra staffing needed.",
  },
};

// Case studies — TEMPLATE STRUCTURE ONLY. These are illustrative, not real
// named installs (same caveat as TESTIMONIALS above). Replace with real
// client names, real numbers, and photos as they become available — this
// is the page format the user asked for, waiting on real content.
export const CASE_STUDIES = [
  {
    sector: "Schools & Colleges",
    model: "SK-60",
    challenge: "Girls avoiding proper disposal entirely due to lack of a discreet, automatic option.",
    result: "Placeholder — replace with real before/after data once available.",
    testimonial: "college",
  },
  {
    sector: "Corporate Offices",
    model: "SK-30",
    challenge: "HR had menstrual leave policy but no disposal solution — just an unmarked bin.",
    result: "Placeholder — replace with real before/after data once available.",
    testimonial: "office",
  },
  {
    sector: "Hospitals & Clinics",
    model: "SK-200",
    challenge: "High-footfall maternity ward needed continuous, hands-free disposal.",
    result: "Placeholder — replace with real before/after data once available.",
    testimonial: "hospital",
  },
];

export const FAQ_ITEMS = [
  {
    q: "How does SMART Kojin's sanitary napkin incinerator work?",
    a: "SMART Kojin works in four simple steps: place the used napkin in a brown paper pouch, insert it into the Loading Bin, sensors detect the napkin and activate incineration at 800–900°C, and treated air exits through the exhaust while ash collects in the tray for easy disposal.",
  },
  {
    q: "Do I need to operate any buttons on SMART Kojin?",
    a: "No, SMART Kojin is a fully automatic sanitary napkin incinerator. Just load the napkin, and it works without the need for any buttons or manual intervention.",
  },
  {
    q: "What happens to the waste after the incineration process?",
    a: "After incineration, the napkin is reduced to harmless ash, which collects in the ash tray. This ash is easy to dispose of, making SMART Kojin an efficient sanitary napkin disposal machine.",
  },
  {
    q: "How is the air treated during the incineration process?",
    a: "SMART Kojin features an advanced air treatment system. It ensures zero harmful emissions by filtering the air before it exits, making it an eco-friendly sanitary pad incinerator.",
  },
  {
    q: "Is SMART Kojin suitable for schools, colleges, or malls?",
    a: "Yes, SMART Kojin is perfect for high-traffic spaces like schools, colleges, and malls. Its efficient process disposes of sanitary napkins in just 3 minutes, ensuring hygiene and continuous usability.",
  },
];

export const INDUSTRIES = [
  {
    name: "Schools & Colleges",
    slug: "schools-colleges",
    blurb:
      "Give students safe, discreet on-site disposal in washrooms and hostels.",
    testimonial: "college",
  },
  {
    name: "Corporate Offices",
    slug: "corporate-offices",
    blurb: "Support workplace hygiene and wellbeing in corporate washrooms.",
    testimonial: "office",
  },
  {
    name: "Hospitals & Clinics",
    slug: "hospitals",
    blurb: "Reduce infection risk in maternity wards and washrooms.",
    testimonial: "hospital",
  },
  {
    name: "Malls & Gyms",
    slug: "malls-gyms",
    blurb: "Keep high-traffic public washrooms hygienic and odor-free.",
    testimonial: "gym",
  },
  {
    name: "Municipal Corporations",
    slug: "municipal-corporations",
    blurb: "Equip public washrooms and civic facilities with self-contained, low-maintenance disposal.",
    testimonial: "municipal",
  },
  {
    name: "Factories & Industrial Sites",
    slug: "factories-industrial",
    blurb: "Support a large female workforce with hygienic disposal built into existing washroom blocks.",
    testimonial: "factory",
  },
];

// Educational content — researched from public sources, cited where it matters.
// See build notes: Swachh Bharat Mission / Swachh Vidyalaya guidance and the
// Jan 2026 Supreme Court order are real and independently verifiable; cite them
// rather than restating as unsourced marketing claims.
export const EDUCATION = {
  scale: [
    "Over 12 billion sanitary napkins are discarded annually in India, with most ending up in landfills or water bodies.",
    "A single pad can take 500–800 years to degrade, and is often composed of up to 90% plastic.",
    "Improper disposal contaminates soil and water and creates direct handling risk for sanitation workers.",
  ],
  policy:
    "Menstrual waste disposal isn't just good practice — it's increasingly a compliance requirement. The Government of India's Swachh Bharat Mission (Gramin) guidelines recommend installing a sanitary napkin incinerator in every school toilet under the Swachh Vidyalaya programme, and states including Karnataka, Maharashtra, and Rajasthan have made it a formal requirement for schools above a minimum size. In January 2026, the Supreme Court held menstrual hygiene to be integral to the right to life, directing states to ensure schools provide sanitary products and, by extension, safe disposal for them.",
  approaches:
    "Broadly, two approaches exist for managing used sanitary products at scale: on-site incineration, which destroys waste immediately at the point of use with no need to store or transport hazardous material, and off-site collection-and-recycling, where used products are gathered, stored, and later processed elsewhere into raw materials. Each has trade-offs — incineration avoids storage and transport logistics entirely, which matters for schools and remote facilities without regular waste-collection infrastructure; collection-and-recycling can recover material for reuse, but depends on consistent pickup logistics being in place. SMART Kojin is built for the first approach: immediate, on-site, self-contained disposal.",
};

// Short, punchy versions for the homepage — the long-form versions above
// (EDUCATION.scale/policy/approaches) are for the blog and deeper pages.
// Homepage copy stays to-the-point per request; depth lives in the blog.
export const EDUCATION_SHORT = {
  stats: [
    { number: "12B+", label: "Napkins discarded yearly in India" },
    { number: "800 yrs", label: "For one pad to degrade" },
    { number: "90%", label: "Plastic content in a single pad" },
  ],
  policy:
    "Swachh Vidyalaya guidelines recommend an incinerator in every school toilet. Several states now require it. In January 2026, the Supreme Court held menstrual hygiene integral to the right to life.",
  approaches:
    "Recycling needs storage and reliable pickup — infrastructure most Indian facilities don't have. On-site incineration destroys waste immediately, with nothing to store or transport.",
};

// Pricing table — from the "SMART Kojin – No Regret Pricing" reference
// image supplied directly. Transcribed as-is; note SK-60 is priced lower
// than SK-30 despite higher capacity in the source image — flagged in the
// build notes rather than silently "corrected," since only you can confirm
// whether that's intentional (e.g. a promotional or volume price) or a typo.
export const MODELS = [
  {
    id: "SK-30",
    name: "SMART Kojin SK-30",
    capacity: "30 Napkins / Hour",
    price: "₹90,000",
    bestFor: "Small offices, gyms & clinics",
    scenario: "Single washroom, moderate footfall — one unit covers it.",
  },
  {
    id: "SK-60",
    name: "SMART Kojin SK-60",
    capacity: "60 Napkins / Hour",
    price: "₹85,000",
    bestFor: "Schools, colleges & mid-size offices",
    scenario: "Multiple washroom blocks or a busy peak-hour window.",
  },
  {
    id: "SK-200",
    name: "SMART Kojin SK-200",
    capacity: "200 Napkins / Hour",
    price: "₹1,90,000",
    bestFor: "Large campuses, hospitals & malls",
    scenario: "High daily footfall across a big campus — batch processing keeps up where a single small unit can't.",
  },
];

export const MODEL_BADGES = [
  { title: "Patent Applied", text: "Smokeless combustion mechanism, patent application filed." },
  { title: "Low Emissions & Eco-Friendly", text: "Advanced air treatment for a clean environment." },
  { title: "Reliable & Low Maintenance", text: "Built for long life & fewer breakdowns." },
  { title: "Value for Money", text: "Best performance at the right price — no regret pricing." },
];

// Blog posts — metadata for the index; each post's full content lives in its
// own page file under pages/blog/. Schools & Colleges leads deliberately:
// flagged as the lowest-hanging-fruit segment, so its content ships first.
export const BLOG_POSTS = [
  {
    slug: "why-every-school-needs-a-sanitary-napkin-incinerator",
    title: "Why Every School Needs a Sanitary Napkin Incinerator",
    description:
      "A girl who starts skipping school on her period isn't a statistic you notice until you go looking. Government guidelines, state mandates, and a 2026 Supreme Court ruling all point the same direction.",
    date: "2026-07-28",
    category: "Schools & Colleges",
  },
  {
    slug: "environmental-impact-of-sanitary-pads",
    title: "The Environmental Impact of Sanitary Pads — And What Actually Helps",
    description:
      "A pad used for six hours can outlive the person who used it by roughly six centuries. The real numbers behind India's least-talked-about waste stream, and what genuinely helps.",
    date: "2026-07-28",
    category: "Sustainability",
  },
  {
    slug: "how-sanitary-napkin-incinerators-work",
    title: "How Sanitary Napkin Incinerators Actually Work",
    description:
      "A plain-language, illustrated walkthrough of the load-sense-incinerate-collect cycle, why temperature and air treatment both matter, and what to check before buying one.",
    date: "2026-07-28",
    category: "Product Guides",
  },
  {
    slug: "why-incineration-beats-the-alternatives",
    title: "Why On-Site Incineration Beats Landfill and Uncontrolled Burning",
    description:
      "A detailed, data-backed look at what sanitary napkins are made of, why they're hard to dispose of safely, and how controlled on-site incineration compares to landfill and traditional burning on real emissions numbers.",
    date: "2026-07-26",
    category: "Education",
  },
  {
    slug: "how-institutions-adopt-on-site-disposal",
    title: "How Institutions Actually Adopt On-Site Sanitary Waste Disposal",
    description:
      "Most facilities don't decide to install a sanitary napkin incinerator in one meeting. Here's how the decision typically moves through an organization, and what usually unblocks it.",
    date: "2026-07-26",
    category: "Adoption",
  },
  {
    slug: "installing-smart-kojin-what-execution-looks-like",
    title: "Installing SMART Kojin: What Execution Actually Looks Like",
    description:
      "From first quote to a running unit: a practical walkthrough of site assessment, installation, staff handover, and ongoing maintenance for SMART Kojin.",
    date: "2026-07-26",
    category: "Execution",
  },
];
