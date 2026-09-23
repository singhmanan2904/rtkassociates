export const site = {
  name: "RKT & Associates",
  shortName: "RKT",
  principal: "Rajesh Tripathi",
  tagline: "Company Secretary",
  description:
    "Independent practice of Rajesh Tripathi, FCS and law graduate. Secretarial compliance, board governance, capital raising, SEBI listing work and MCA filings, after 26 years in corporate secretarial roles. The practice opened on 8 September 2026.",
  url: "https://rktassociates.in",
  email: "tripathi.rk1@gmail.com",
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
  founded: 2026,
  practiceOpened: "8 September 2026",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "26+", label: "Years in corporate secretarial roles" },
  { value: "FCS", label: "Fellow member of the ICSI" },
  { value: "6", label: "Corporate appointments since 1999" },
  { value: "2026", label: "Independent practice opened" },
] as const;

export const services = [
  {
    title: "Corporate secretarial & MCA compliance",
    summary:
      "Statutory work under the Companies Act, 2013, including corporate actions, statutory registers, and filings on the MCA-21 V3 portal.",
    points: ["Companies Act, 2013 compliance", "Statutory registers and records", "MCA-21 V3 filings"],
  },
  {
    title: "Board & corporate governance",
    summary:
      "Board, committee and general meetings, with agendas, resolutions and minutes prepared to Secretarial Standards SS-1 and SS-2.",
    points: ["Board, committee and general meetings", "Agendas, resolutions and minutes", "Secretarial Standards SS-1 and SS-2"],
  },
  {
    title: "Charges, allotments & capital raising",
    summary:
      "Loan documentation and RoC charges, plus private placements and preferential allotments of equity, preference shares and non-convertible debentures.",
    points: ["CHG-1, CHG-4 and CHG-9", "PAS-3, PAS-4 and PAS-5", "Depository corporate actions"],
  },
  {
    title: "Private & family-held companies",
    summary:
      "Annual accounts, returns, minutes and registers, including programmes to bring delayed filings up to date for promoters and smaller companies.",
    points: ["MGT-7 and AOC-4", "Delayed filing regularisation", "Section 164(2) and DIN exposure"],
  },
  {
    title: "Strike-off (STK-2)",
    summary:
      "Voluntary strike-off of dormant or non-operational companies, including holding entities that no longer justify annual audit and maintenance cost.",
    points: ["STK-2 filings on MCA", "Dormant and non-operational companies", "Closure of surplus holding entities"],
  },
  {
    title: "SEBI & listing compliance",
    summary:
      "Advisory on LODR, insider trading, the takeover code and ICDR, including a structured digital database for unpublished price-sensitive information.",
    points: ["LODR, PIT, SAST and ICDR", "Listed-company board advisory", "Structured digital database"],
  },
  {
    title: "Insolvency & NCLT",
    summary:
      "Secretarial and procedural support for NCLT restructuring, rehabilitation steps, and resolution-plan papers after adjudication.",
    points: ["NCLT procedural support", "Restructuring steps", "Resolution plan documentation"],
  },
  {
    title: "Mergers & restructuring",
    summary:
      "Schemes of arrangement for listed and unlisted companies, from the due diligence file and the draft scheme through tribunal-convened meetings.",
    points: ["Schemes of arrangement", "Due diligence files", "Tribunal-convened meetings"],
  },
  {
    title: "Agreements & disputes",
    summary:
      "Drafting and review of business agreements, joint ventures, NDAs and contract-manufacturing arrangements, and support in proceedings before NCLT, courts and regulators.",
    points: ["Agreements, joint ventures and NDAs", "Contract manufacturing arrangements", "NCLT, court and regulatory matters"],
  },
] as const;

export const experience = [
  {
    year: "1999",
    title: "Dalmia Cement (Bharat) Ltd.",
    body: "Management trainee.",
  },
  {
    year: "2000",
    title: "Mega Plast Ltd.",
    body: "Assistant company secretary.",
  },
  {
    year: "2002",
    title: "Shakumbhri Straw Products Ltd.",
    body: "Manager, finance and company secretary.",
  },
  {
    year: "2006",
    title: "Spentex Industries Ltd.",
    body: "Assistant general manager, finance and company secretary.",
  },
  {
    year: "2010",
    title: "Ginni Filaments Ltd.",
    body: "Deputy general manager and company secretary.",
  },
  {
    year: "2017",
    title: "JK Paper Ltd.",
    body: "General manager, secretarial, at an NSE- and BSE-listed company, through to the move into independent practice.",
  },
  {
    year: "2026",
    title: "RKT & Associates",
    body: "Independent practice from 8 September 2026, for listed companies and for private family businesses.",
  },
] as const;

export const focusAreas = [
  "Companies Act, 2013",
  "Secretarial Standards",
  "MCA-21 V3",
  "SEBI LODR",
  "Listed companies",
  "Family businesses",
  "NCLT",
  "Charge management",
] as const;

export const values = [
  {
    title: "Minutes that follow the Standards",
    body: "Agendas, resolutions and minutes are prepared to Secretarial Standards SS-1 and SS-2.",
  },
  {
    title: "Filings taken through the portal",
    body: "MCA-21 V3 work, including charges, allotments and annual returns, is carried through to acknowledgement.",
  },
  {
    title: "Late filings brought current",
    body: "Delayed MGT-7, AOC-4 and other statutory updates are regularised before they turn into a DIN freeze or a disqualification under section 164(2).",
  },
  {
    title: "Listed-company habits",
    body: "LODR, insider-trading controls and the structured digital database, from someone who has run the secretarial function inside listed groups.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Confidential consultation",
    body: "A first discussion of the company and the matter you want handled.",
  },
  {
    step: "02",
    title: "Status of the file",
    body: "Filing history, registers, charges and any pending MCA or SEBI items are reviewed before drafting starts.",
  },
  {
    step: "03",
    title: "Drafting and filing",
    body: "Resolutions, minutes, agreements and e-forms are prepared and filed for that mandate.",
  },
  {
    step: "04",
    title: "Papers left in order",
    body: "Registers, minutes and filing acknowledgements are kept so the next board meeting or audit can use them.",
  },
] as const;

export const faqs = [
  {
    q: "Who runs the practice?",
    a: "Rajesh Tripathi, a Fellow Member of the Institute of Company Secretaries of India (FCS) and a law graduate. He opened RKT & Associates on 8 September 2026 after 26 years in secretarial, corporate finance and legal roles, most recently as General Manager, Secretarial at JK Paper Ltd.",
  },
  {
    q: "What work does the practice take?",
    a: "MCA and secretarial compliance, board process under the Secretarial Standards, charge creation and satisfaction, private placement and preferential allotment, SEBI listing work, strike-off under STK-2, NCLT support, schemes of arrangement, and commercial agreements.",
  },
  {
    q: "Can you take on annual filings that are already late?",
    a: "Yes. A regular part of the work for private and family-held companies is identifying delayed accounts and returns, including MGT-7 and AOC-4, and filing them so directors are less exposed to disqualification under section 164(2) or a frozen DIN.",
  },
  {
    q: "Do you advise listed companies?",
    a: "Yes. The practice advises on SEBI (LODR) Regulations, 2015, the prohibition of insider trading, the takeover code and ICDR, including structured digital databases. That follows secretarial leadership roles inside NSE- and BSE-listed companies, including JK Paper Ltd.",
  },
  {
    q: "Does the company need to be in Mumbai?",
    a: "MCA and SEBI filings are electronic. The company does not have to sit in the same city as the office. Meetings can be held over video unless a physical presence is required.",
  },
] as const;
