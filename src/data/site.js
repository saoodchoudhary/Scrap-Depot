/**
 * Central brand + contact configuration.
 * NOTE: All contact details below are SAMPLE placeholders — replace with the
 * live details before going to production.
 */

export const site = {
  name: "Scrap Depot",
  legalName: "Scrap Depot Recycling Pvt. Ltd.",
  domain: "scrapdepot.in",
  url: "https://scrapdepot.in",
  tagline: "Scrap ka sahi daam. Planet ka sahi haq.",
  shortDesc:
    "CPCB-authorised recycler for e-waste, lithium-ion batteries and industrial metal scrap — transparent weighing, same-day pickup and audit-ready compliance documentation.",
  founded: 2011,
  established: "Established 2011 · Mumbai",

  phones: [
    { label: "Sales & pickup", value: "+91 98200 45120", tel: "+919820045120" },
    { label: "Corporate desk", value: "+91 98200 45121", tel: "+919820045121" },
  ],
  whatsapp: { value: "+91 98200 45120", link: "https://wa.me/919820045120" },

  emails: [
    { label: "General enquiries", value: "info@scrapdepot.in" },
    { label: "Bulk & corporate", value: "sales@scrapdepot.in" },
    { label: "EPR & compliance", value: "compliance@scrapdepot.in" },
    { label: "Careers", value: "careers@scrapdepot.in" },
  ],

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
      phone: "+91 98200 45120",
      tel: "+919820045120",
    },
    {
      type: "Recycling Facility",
      name: "Taloja Recovery Plant",
      lines: [
        "Plot G-14/2, MIDC Taloja Industrial Area",
        "Panvel, Navi Mumbai 410 208",
        "Maharashtra, India",
      ],
      phone: "+91 22 4890 5120",
      tel: "+912248905120",
    },
    {
      type: "Collection Hub",
      name: "Pune Aggregation Centre",
      lines: [
        "Warehouse 7, Chakan MIDC Phase II",
        "Khed, Pune 410 501",
        "Maharashtra, India",
      ],
      phone: "+91 90040 78120",
      tel: "+919004078120",
    },
  ],

  registrations: [
    { label: "CIN", value: "U37100MH2011PTC221450" },
    { label: "GSTIN", value: "27AABCS1429R1ZP" },
    { label: "CPCB Registration", value: "CPCB/EW/R-4/2024/SD-1187" },
    { label: "MPCB Consent", value: "MPCB/RO-RAIGAD/CC-4402" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/scrapdepot", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/scrapdepot.in", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/@scrapdepot", icon: "youtube" },
    { label: "X", href: "https://x.com/scrapdepot_in", icon: "x" },
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
      { label: "Li-Ion Battery Recycling", href: "/services/battery-recycling", desc: "Black mass & metal recovery" },
      { label: "Metal Scrap Trading", href: "/services/metal-scrap", desc: "Ferrous & non-ferrous" },
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
      { label: "Li-Ion Battery Recycling", href: "/services/battery-recycling" },
      { label: "Metal Scrap Trading", href: "/services/metal-scrap" },
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
