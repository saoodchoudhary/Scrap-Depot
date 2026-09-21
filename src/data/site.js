/**
 * Central brand + contact configuration.
 * NOTE: addresses and registration numbers below are SAMPLE placeholders —
 * replace with the live details before going to production. Phone numbers and
 * the email address are live.
 */

export const site = {
  name: "Scrap Depot",
  legalName: "Scrap Depot Recycling Pvt. Ltd.",
  domain: "scrapdepot.in",
  url: "https://scrapdepot.in",
  tagline: "Scrap ka sahi daam. Planet ka sahi haq.",
  shortDesc:
    "MPCB-authorised recycler for e-waste, fluorescent lamps and industrial metal scrap — transparent weighing, same-day pickup and audit-ready compliance documentation.",
  founded: 2011,
  established: "Established 2011 · Mumbai",

  phones: [
    { label: "Sales & pickup", value: "+91 72786 66686", tel: "+917278666686" },
    { label: "Corporate desk", value: "+91 97681 55039", tel: "+919768155039" },
  ],
  whatsapp: { value: "+91 72786 66686", link: "https://wa.me/917278666686" },

  email: "thescrapdepot@gmail.com",
  emails: [{ label: "All enquiries", value: "thescrapdepot@gmail.com" }],

  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
    { days: "Sunday", time: "Pickup on prior appointment" },
  ],

  offices: [
    {
      type: "Corporate Office",
      name: "Scrap Depot — Head Office",
      lines: [
        "4th Floor, Sterling Trade Centre",
        "Plot 22, Road No. 16, MIDC Andheri East",
        "Mumbai 400 093, Maharashtra",
      ],
      phone: "+91 72786 66686",
      tel: "+917278666686",
    },
    {
      type: "Recycling Facility",
      name: "Taloja Recovery Plant",
      lines: [
        "Plot G-14/2, MIDC Taloja Industrial Area",
        "Panvel, Navi Mumbai 410 208",
        "Maharashtra, India",
      ],
      phone: "+91 97681 55039",
      tel: "+919768155039",
    },
    {
      type: "Collection Hub",
      name: "Pune Aggregation Centre",
      lines: [
        "Warehouse 7, Chakan MIDC Phase II",
        "Khed, Pune 410 501",
        "Maharashtra, India",
      ],
      phone: "+91 72786 66686",
      tel: "+917278666686",
    },
  ],

  registrations: [
    { label: "CIN", value: "U37100MH2011PTC221450" },
    { label: "GSTIN", value: "27AABCS1429R1ZP" },
    { label: "MPCB Authorisation", value: "MPCB/EW/R-4/2024/SD-1187" },
    { label: "MPCB Consent to Operate", value: "MPCB/RO-RAIGAD/CC-4402" },
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/services",
    children: [
      { label: "E-Waste Recycling", href: "/services/e-waste-recycling", desc: "R4 dismantling & recovery" },
      { label: "Lamp Recycling", href: "/services/lamp-recycling", desc: "Tubes, CFLs & mercury capture" },
      { label: "Metal Scrap Trading", href: "/services/metal-scrap", desc: "Ferrous & non-ferrous" },
      { label: "Office Dismantling", href: "/services/office-dismantling", desc: "Fit-outs, furniture & IT" },
      { label: "Industrial & Plant Scrap", href: "/services/industrial-scrap", desc: "Dismantling & clearance" },
      { label: "Secure Data Destruction", href: "/services/data-destruction", desc: "Shredding with certificate" },
      { label: "EPR & Compliance", href: "/services/epr-compliance", desc: "Targets, filings, audits" },
    ],
  },
  { label: "Materials", href: "/materials" },
  { label: "Process", href: "/process" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "Infrastructure", href: "/infrastructure", desc: "Plant, lines & capacity" },
      { label: "Sustainability", href: "/sustainability", desc: "Impact & ESG reporting" },
      { label: "Clients", href: "/clients", desc: "Who we work with" },
      { label: "Resources", href: "/resources", desc: "Insights & guides" },
      { label: "Careers", href: "/careers", desc: "Open roles" },
      { label: "Policies", href: "/policies", desc: "Governance documents" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Solutions",
    links: [
      { label: "E-Waste Recycling", href: "/services/e-waste-recycling" },
      { label: "Lamp Recycling", href: "/services/lamp-recycling" },
      { label: "Metal Scrap Trading", href: "/services/metal-scrap" },
      { label: "Office Dismantling", href: "/services/office-dismantling" },
      { label: "Industrial & Plant Scrap", href: "/services/industrial-scrap" },
      { label: "Secure Data Destruction", href: "/services/data-destruction" },
      { label: "EPR & Compliance", href: "/services/epr-compliance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Scrap Depot", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Clients", href: "/clients" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Materials & Rates", href: "/materials" },
      { label: "Insights & Guides", href: "/resources" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "E-Waste Policy", href: "/policies/e-waste-policy" },
    ],
  },
];
