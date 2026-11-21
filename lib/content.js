// All site copy lives here so it can be edited without touching layout code.
// Source: the current saharagroup.org (Home, About, Services & Training, Contact),
// with typos fixed and placeholder counters replaced by real facts.

export const company = {
  name: "Sahara Group",
  tagline: "Your partner to success",
  email: "info@saharagroup.org",
  whatsapp: "201220218447",
  offices: [
    {
      id: "cairo",
      region: "North Africa & Middle East",
      city: "Cairo, Egypt",
      address: ["31 Omar Bakir St., Heliopolis", "Cairo 4470421, Egypt"],
      phones: ["+20 2 2774 4049", "+20 2 2774 4096", "+20 122 021 8447"],
      email: "info@saharagroup.org",
      hours: "Sunday to Thursday, 9:00 to 17:00", // TODO(confirm) office hours
      mapQuery: "31 Omar Bakir St, Heliopolis, Cairo, Egypt",
    },
    {
      id: "bratislava",
      region: "Europe",
      city: "Bratislava, Slovakia",
      address: ["Strazna 31", "831 01 Bratislava, Slovakia"],
      phones: ["+421 903 850 724"],
      email: "info@saharagroup.org",
      hours: "Monday to Friday, 9:00 to 17:00", // TODO(confirm) office hours
      mapQuery: "Strazna 31, 831 01 Bratislava, Slovakia",
    },
  ],
};

export const nav = [
  { href: "/about/", label: "About" },
  {
    href: "/solutions/",
    label: "Solutions",
    children: [
      { href: "/solutions/#automation", label: "Automation & SCADA" },
      { href: "/solutions/#power", label: "Power testing & commissioning" },
    ],
  },
  {
    href: "/products/",
    label: "Products",
    children: [
      { href: "/products/#automation", label: "Automation products" },
      { href: "/products/#power", label: "Power products" },
    ],
  },
  { href: "/training/", label: "Training" },
  { href: "/industries/", label: "Industries" },
  { href: "/news/", label: "News" },
  { href: "/contact/", label: "Contact" },
];

// Stats shown as facts, not animated "0" counters.
// TODO(confirm): founding year is not published on the current site.
export const stats = [
  { value: "30+", label: "Years of experience" },
  { value: "8", label: "Global partner brands" },
  { value: "45+", label: "Industrial clients" },
  { value: "2", label: "Offices, Egypt & EU" },
];

export const partners = [
  "Rockwell Automation",
  "Allen-Bradley",
  "Schneider Electric",
  "OMICRON",
  "DILO",
  "AMETEK",
  "Toshiba",
  "PPC",
];

// Curated row for the homepage; the full list is on /about/.
export const featuredClients = [
  "GUPCO", "Petrobel", "Khalda", "GASCO", "EGPC", "Shell",
  "Elsewedy Electric", "Ezz Steel", "Siemens", "EETC", "Suez Canal Authority", "Nestlé",
];

export const clients = {
  "Oil & gas": [
    "GUPCO", "AGIBA", "Bapetco", "Petrobel", "CORC", "SOPC", "Khalda", "GASCO",
    "Petrojet", "Enppi", "EGPC", "Petromaint", "Shell", "HFC", "LNG", "EPSCO",
    "Sidpec", "ERC", "ANRPC", "APC",
  ],
  "Power & utilities": [
    "NPC", "WEPCO", "EMC", "EETC", "Hydro Power Generation Company", "CEPC",
    "South Cairo Distribution", "Alexandria Distribution", "UEEPC", "MDEPC",
    "EDEPC", "WDEPC", "EGEMAC", "Veolia",
  ],
  "Industry & infrastructure": [
    "Air Liquide", "Suez Canal Authority", "City Stars", "Orascom", "Siemens",
    "Ezz Steel", "Elsewedy Electric", "EMAS",
  ],
  "Food & consumer": [
    "Edita", "El Rashidi El Mezan", "Chipsy", "Nestlé", "Danone", "Madkour",
  ],
};

export const about = {
  who:
    "Sahara Group is based in Europe and North Africa, with more than 30 years as a distributor and service provider for leading international manufacturers. We work in measuring, testing and automation (PLC and SCADA), and in the commissioning and start-up of power stations, substations and oil & gas facilities.",
  vision:
    "To be a world-class strategic solutions provider in Africa for control systems, SCADA, instrumentation, and substation testing and commissioning equipment and services.",
  mission:
    "To increase our customers' profitability by providing quality products and services that add value and improve their return on investment.",
  unique:
    "Every product we supply comes with the engineers who know it: commissioning on site, hands-on training and local support after start-up.",
  strategy: [
    { title: "Customer driven", text: "We start from the customer's site, schedule and outcome." },
    { title: "Innovative solutions", text: "We bring the latest test and automation technology to the region." },
    { title: "Quality", text: "Equipment from world-leading makers, delivered and supported properly." },
    { title: "Commitment & accountability", text: "We own our results, from tender to start-up." },
    { title: "Recognition", text: "We value the people and partners who make projects succeed." },
    { title: "Safety", text: "Safe working on energised and hazardous sites comes first." },
    { title: "Compliance & integrity", text: "We follow the standards, the law and our word." },
  ],
};

export const solutions = [
  {
    id: "automation",
    icon: "cpu",
    title: "Automation & SCADA",
    short: "PLC, HMI, DCS and SCADA design, supply, integration and support.",
    intro:
      "Our own automation services and training team, equipped with dedicated tools, takes control projects from design to start-up and keeps them running.",
    items: [
      "PLC programming and integration (Rockwell Automation / Allen-Bradley, Schneider Electric)",
      "SCADA, HMI and DCS systems",
      "Substation Automation Systems (SAS)",
      "Safety automation systems",
      "Instrumentation, alarm annunciators and sequence of event recorders",
      "Upgrades, migrations and on-call support",
    ],
  },
  {
    id: "power",
    icon: "bolt",
    title: "Power testing & commissioning",
    short: "Protection, transformer, breaker and CT testing with OMICRON equipment.",
    intro:
      "Our power services and training team tests, commissions and assesses MV and HV assets in power stations, substations and industrial plants.",
    items: [
      "Primary and secondary injection testing",
      "Protection relay testing and protection panel systems",
      "Power transformer, CT and VT diagnostics",
      "Circuit breaker analysis",
      "Partial discharge and insulation diagnostics",
      "SF6 gas handling, analysis and leak detection (DILO)",
      "Commissioning and start-up of substations and power plants",
    ],
  },
  {
    id: "training",
    icon: "cap",
    title: "Certified training",
    short: "OMICRON Certified Training Partner courses, hands-on with real equipment.",
    intro:
      "Knowledge goes out of date faster every year. Our courses keep engineers current on the equipment they use every day.",
    items: [],
  },
];

export const products = {
  automation: {
    title: "Automation products",
    brands: ["Rockwell Automation", "Allen-Bradley", "Schneider Electric"],
    families: [
      { name: "PLCs", text: "Programmable controllers and I/O from Allen-Bradley and Schneider Electric." },
      { name: "HMI", text: "Operator panels and visualisation software." },
      { name: "SCADA & DCS", text: "Supervisory control and distributed control systems." },
      { name: "Drives & motion", text: "Variable frequency drives and motor control." },
      { name: "Safety systems", text: "Safety PLCs and safety automation." },
      { name: "Annunciators & SOE", text: "Alarm annunciators and sequence of event recorders." },
    ],
  },
  power: {
    title: "Power products",
    brands: ["OMICRON", "DILO", "AMETEK", "Toshiba", "PPC"],
    families: [
      { name: "CPC 100 · CPX 200", text: "Multifunctional primary testing for commissioning, maintenance and condition assessment of MV/HV assets." },
      { name: "CMC 500 · CMC 356", text: "Secondary injection and protection relay testing." },
      { name: "CT Analyzer", text: "Current transformer testing and calibration." },
      { name: "CIBANO 500", text: "Circuit breaker analysis." },
      { name: "TESTRANO 600 · CP TD", text: "Power transformer testing and dielectric diagnostics." },
      { name: "COMPANO 100", text: "Basic testing for protection and primary assets." },
      { name: "DIRANA · FRANEO 800", text: "Dielectric response and frequency response analysis." },
      { name: "Partial discharge", text: "PD measurement and monitoring." },
      { name: "SF6 equipment", text: "DILO multi-analyzers, leak pointers and service carts." },
      { name: "Protection relays & fault recorders", text: "Relays, fault recorders and protection panels." },
    ],
  },
};

export const training = {
  credential:
    "OMICRON Certified Training Partner",
  courses: [
    { code: "CMC 356", text: "Protection relay testing with the CMC 356 test set." },
    { code: "COMPANO 100", text: "Basic primary and secondary testing." },
    { code: "CPC 100", text: "Primary testing of transformers, CTs, VTs and grounding systems." },
    { code: "TD1", text: "Tan delta and power factor measurement." },
    { code: "CIBANO 500", text: "Circuit breaker timing, motion and resistance testing." },
    { code: "CT Analyzer", text: "Current transformer testing and calibration." },
  ],
  automation: [
    "PLC programming fundamentals and advanced (Allen-Bradley, Schneider Electric)",
    "SCADA and HMI configuration",
    "Troubleshooting and maintenance of control systems",
  ],
};

export const industries = [
  {
    icon: "tower",
    title: "Power generation & substations",
    text: "Testing, protection and commissioning for power plants, transmission and distribution companies.",
    examples: ["EETC", "Hydro Power Generation Company", "Distribution companies"],
  },
  {
    icon: "drop",
    title: "Oil & gas",
    text: "Automation, instrumentation and electrical testing for upstream, gas and refining facilities.",
    examples: ["GUPCO", "Petrobel", "Khalda", "GASCO"],
  },
  {
    icon: "factory",
    title: "Heavy industry",
    text: "Control systems and electrical asset care for steel, cement and manufacturing plants.",
    examples: ["Ezz Steel", "Elsewedy Electric", "Siemens"],
  },
  {
    icon: "water",
    title: "Water & utilities",
    text: "SCADA and power reliability for water, waterways and municipal infrastructure.",
    examples: ["Veolia", "Suez Canal Authority"],
  },
  {
    icon: "box",
    title: "Food & consumer goods",
    text: "Production line automation and plant electrical maintenance.",
    examples: ["Nestlé", "Danone", "Edita"],
  },
];

export const news = [
  {
    date: "2026-02",
    tag: "Product launch",
    title: "Introducing OMICRON CPX 200",
    text: "A compact, multifunctional test system for commissioning, maintenance and condition assessment of medium and high voltage assets.",
  },
  {
    date: "2026-02",
    tag: "Product launch",
    title: "Introducing OMICRON CMC 500",
    text: "A new benchmark in protection testing for maximum security of supply.",
  },
  {
    date: "2026-02",
    tag: "Certification",
    title: "Sahara Group is now an OMICRON Certified Training Partner",
    text: "Certified to deliver courses on CMC 356, COMPANO 100, CPC 100, TD1, CIBANO 500 and CT Analyzer.",
  },
];

export const interests = [
  "Automation products (PLC, HMI, SCADA, DCS)",
  "Power testing equipment (OMICRON)",
  "SF6 equipment (DILO)",
  "Protection relays & fault recorders",
  "Testing & commissioning services",
  "Automation services",
  "Training course",
  "Other",
];

// Shown only when filled in. Add real quotes with name, title and company.
export const testimonials = [
  // { quote: "...", name: "...", title: "...", company: "..." },
];

// Shown on /projects/ when filled in: client, scope, result.
export const caseStudies = [
  // { client: "...", sector: "Oil & gas", title: "...", scope: "...", result: "..." },
];

// Upcoming course dates for /training/. Leave empty to show "on request".
export const courseDates = [
  // { course: "CPC 100", date: "2027-01-12", city: "Cairo", seats: 8 },
];

// Files placed in /public/downloads/ and listed here appear on /products/.
export const downloads = [
  // { title: "Company profile", file: "/downloads/sahara-company-profile.pdf", size: "2.4 MB" },
];

export const careers = {
  intro:
    "We hire engineers who like being on site: commissioning, testing and automation specialists, and the people who support them.",
  roles: [
    // { title: "Protection testing engineer", location: "Cairo", type: "Full time" },
  ],
};
