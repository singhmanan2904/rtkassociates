export const site = {
  name: "RKT & Associates",
  shortName: "RKT",
  tagline: "Company Secretaries",
  description:
    "A practising company secretary firm advising founders, boards and listed entities on incorporation, ROC compliance, corporate governance and secretarial audit.",
  url: "https://rktassociates.in",
  email: "contact@rktassociates.in",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  address: {
    line1: "204, Corporate Chambers",
    line2: "Nariman Point, Mumbai 400021",
    country: "India",
    // Free-text search string used for the embedded map. Edit this if the
    // pin should point somewhere more precise than the lines above.
    mapQuery: "204 Corporate Chambers, Nariman Point, Mumbai 400021, India",
  },
  hours: "Mon – Fri · 10:00 to 19:00 IST",
  founded: 2009,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "16+", label: "Years in practice" },
  { value: "450+", label: "Companies advised" },
  { value: "2,800+", label: "ROC filings completed" },
  { value: "100%", label: "Statutory deadlines met" },
] as const;

export const services = [
  {
    title: "Company & LLP Incorporation",
    summary:
      "End-to-end formation — name approval, SPICe+ filing, DIN and DSC, PAN, TAN and the first board meeting kit.",
    points: ["Private, public & OPC setup", "LLP and partnership conversion", "Foreign subsidiary structuring"],
  },
  {
    title: "ROC & Annual Compliance",
    summary:
      "Your entire MCA calendar handled — annual returns, event-based filings and registers kept audit-ready year round.",
    points: ["AOC-4, MGT-7 & DIR-3 KYC", "Event-based e-forms", "Statutory register upkeep"],
  },
  {
    title: "Secretarial Audit",
    summary:
      "Independent MR-3 audits and health checks that surface gaps before a regulator, investor or acquirer does.",
    points: ["Section 204 secretarial audit", "Annual secretarial compliance report", "Remediation road-map"],
  },
  {
    title: "Corporate Governance Advisory",
    summary:
      "Board processes that hold up under scrutiny — agendas, minutes, committee charters and director obligations.",
    points: ["Board & committee support", "Related-party frameworks", "Policy drafting"],
  },
  {
    title: "FEMA & RBI Compliance",
    summary:
      "Cross-border filings done on time, from inbound investment reporting to overseas remittance documentation.",
    points: ["FC-GPR & FC-TRS", "ODI and ECB reporting", "Annual FLA return"],
  },
  {
    title: "SEBI & Listing Compliance",
    summary:
      "LODR obligations for listed and SME-listed companies, including disclosures, certifications and IPO readiness.",
    points: ["LODR quarterly filings", "Insider trading framework", "IPO & SME listing support"],
  },
  {
    title: "Mergers & Restructuring",
    summary:
      "Scheme documentation and NCLT process management for amalgamations, demergers and capital reduction.",
    points: ["Scheme drafting & filings", "NCLT representation support", "Capital restructuring"],
  },
  {
    title: "Due Diligence & Certification",
    summary:
      "Secretarial due diligence for funding rounds and acquisitions, with the certificates lenders and buyers ask for.",
    points: ["Transaction due diligence", "Search & status reports", "Net-worth and share certificates"],
  },
] as const;

export const experience = [
  {
    year: "2009",
    title: "The practice opens",
    body: "Founded in Mumbai with a single mandate — keep growing companies on the right side of the Companies Act.",
  },
  {
    year: "2014",
    title: "Governance advisory added",
    body: "Began advising boards on committee structures and minute-keeping as the 2013 Act reshaped compliance.",
  },
  {
    year: "2018",
    title: "Cross-border practice",
    body: "Built a dedicated FEMA desk supporting inbound investors and Indian subsidiaries of overseas groups.",
  },
  {
    year: "2021",
    title: "Listed-entity mandates",
    body: "Extended into SEBI LODR compliance and IPO readiness for SME-platform listings.",
  },
  {
    year: "Today",
    title: "A team of nine",
    body: "Company secretaries, paralegals and analysts serving 450+ entities across manufacturing, SaaS and financial services.",
  },
] as const;

export const sectors = [
  "Manufacturing",
  "SaaS & Technology",
  "NBFC & Fintech",
  "Healthcare",
  "Real Estate",
  "Logistics",
  "Retail & D2C",
  "Professional Services",
] as const;

export const values = [
  {
    title: "Deadline discipline",
    body: "Every mandate runs on a shared compliance calendar with reminders that start well before the statutory due date.",
  },
  {
    title: "One point of contact",
    body: "A named company secretary owns your file. You never re-explain your cap table to a new person.",
  },
  {
    title: "Plain-language advice",
    body: "Opinions arrive as a recommendation and its reasoning — not a wall of sections you still have to decode.",
  },
  {
    title: "Documentation that survives audit",
    body: "Registers, minutes and filings are maintained so a due-diligence request is a download, not a scramble.",
  },
] as const;

export const process = [
  { step: "01", title: "Discovery call", body: "A 30-minute review of your entity, its filing history and what is pending." },
  { step: "02", title: "Compliance map", body: "You receive a written scope with the calendar, owners and fees before work starts." },
  { step: "03", title: "Execution", body: "Filings, drafting and board support delivered against agreed dates, with status visible throughout." },
  { step: "04", title: "Ongoing review", body: "Quarterly check-ins to catch changes in law, shareholding or structure before they become notices." },
] as const;

export const faqs = [
  {
    q: "What does a practising company secretary actually do?",
    a: "We are the compliance function for your company — incorporation, every filing the Registrar of Companies expects, board and general meeting process, statutory registers, and certifications that only a practising CS can sign.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. A large share of our work is first-time founders — incorporation, ESOP pool creation, funding-round documentation and the filings that follow a share allotment.",
  },
  {
    q: "How are fees structured?",
    a: "Retainers for ongoing annual compliance, and fixed fees for defined mandates such as incorporation, an allotment or a secretarial audit. You get the number in writing before we begin.",
  },
  {
    q: "Can you take over compliance that is already behind?",
    a: "Regularly. We start with a status search, quantify the additional fees and penalties, then file in the order that limits exposure.",
  },
  {
    q: "Do you work with clients outside Mumbai?",
    a: "Most filings are electronic, so we serve clients across India and overseas groups with Indian subsidiaries. Meetings happen over video unless a physical presence is required.",
  },
] as const;
