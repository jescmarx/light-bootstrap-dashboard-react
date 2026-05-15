export const countries = [
  { name: "China", focus: "Outbound policy, SOEs, technology platforms, development finance", risk: "Medium" },
  { name: "Iran", focus: "Energy, reconstruction, sanctions workarounds, rail and ports", risk: "High" },
  { name: "Saudi Arabia", focus: "AI, cloud, industrial policy, smart cities, petrochemicals", risk: "Medium" },
  { name: "United Arab Emirates", focus: "Logistics, ports, cloud, finance, sovereign wealth funds", risk: "Medium" },
  { name: "Qatar", focus: "LNG, finance, infrastructure, data centers", risk: "Medium" },
  { name: "Kuwait", focus: "Energy, construction, logistics corridors", risk: "Medium" },
  { name: "Oman", focus: "Ports, industrial zones, logistics corridors, energy", risk: "Medium" },
  { name: "Bahrain", focus: "Finance, cloud, logistics, regulatory signals", risk: "Low" }
];

export const sectors = [
  "AI",
  "cloud computing",
  "data centers",
  "telecommunications",
  "semiconductors",
  "critical minerals",
  "energy",
  "ports",
  "logistics corridors",
  "rail",
  "industrial zones",
  "finance",
  "sovereign wealth funds",
  "construction",
  "defense-adjacent dual-use technology",
  "smart cities",
  "renewable energy",
  "petrochemicals"
];

export const sourceCategories = [
  "Chinese government",
  "Iranian government",
  "GCC government",
  "sovereign wealth funds",
  "Chinese SOEs",
  "Gulf state-owned companies",
  "technology firms",
  "logistics and port operators",
  "energy companies",
  "banks and development finance institutions",
  "think tanks",
  "academic journals",
  "media",
  "stock exchange filings",
  "corporate press releases"
];

export const investmentTypes = [
  "announced project",
  "signed MOU",
  "financing agreement",
  "construction contract",
  "technology partnership",
  "infrastructure investment",
  "energy deal",
  "AI/cloud/data center agreement",
  "logistics corridor project",
  "trade agreement",
  "sanctions workaround",
  "stalled project",
  "cancelled project",
  "diplomatic signal",
  "regulatory change"
];

export const clientSegments = [
  "Gulf sovereign wealth funds",
  "Chinese SOEs",
  "U.S. investors",
  "development finance institutions",
  "energy firms",
  "AI/cloud firms",
  "logistics firms",
  "construction firms",
  "policy institutions",
  "sanctions-risk teams"
];

export const savedQueries = [
  "Chinese investment in Iran energy",
  "Chinese AI cooperation with Saudi Arabia",
  "Huawei Gulf data centers",
  "China UAE cloud infrastructure",
  "China Iran sanctions trade",
  "Chinese port investments in Oman",
  "Saudi Vision 2030 Chinese technology partnerships",
  "Gulf sovereign wealth funds China technology",
  "Chinese SOEs GCC infrastructure",
  "post-war Iran reconstruction Chinese companies"
];

export const sources = [
  {
    name: "NDRC Belt and Road Portal",
    language: "Mandarin",
    category: "Chinese government",
    method: "RSS/manual URL",
    compliance: "Public pages only; respect robots.txt and rate limits",
    cadence: "Daily"
  },
  {
    name: "Ministry of Energy Saudi Arabia",
    language: "English / Arabic",
    category: "GCC government",
    method: "Manual URL / API where available",
    compliance: "Public releases only",
    cadence: "Weekly"
  },
  {
    name: "AD Ports Group investor news",
    language: "English / Arabic",
    category: "logistics and port operators",
    method: "RSS/manual URL",
    compliance: "Public investor and press pages only",
    cadence: "Daily"
  },
  {
    name: "Shana / Iran oil ministry news",
    language: "English / Persian",
    category: "Iranian government",
    method: "RSS/manual URL",
    compliance: "Public pages only",
    cadence: "Daily"
  },
  {
    name: "Huawei Middle East newsroom",
    language: "English / Mandarin",
    category: "technology firms",
    method: "Manual URL",
    compliance: "Corporate press releases only",
    cadence: "Weekly"
  }
];

export const articles = [
  {
    id: "RRA-2026-001",
    title: "Chinese energy firms signal renewed interest in Iran upstream services",
    author: "Rihla analyst desk",
    date: "2026-05-03",
    originalLanguage: "English",
    institution: "Open-source monitor sample",
    countries: ["China", "Iran"],
    companies: ["CNPC", "Sinopec"],
    institutions: ["Iran Ministry of Petroleum"],
    url: "https://example.org/china-iran-energy-sample",
    sourceType: "media",
    collectionTimestamp: "2026-05-15T09:00:00Z",
    sectors: ["energy", "construction"],
    projectType: "upstream service restart",
    investmentType: ["energy deal", "sanctions workaround"],
    projectStatus: "Watchlist",
    riskLevel: "High",
    confidence: 72,
    sanctionsRelevance: "High",
    strategicAutonomyRelevance: "Medium",
    chinaIranRelevance: "High",
    chinaGccRelevance: "Low",
    usChinaCompetitionRelevance: "Medium",
    commercialOpportunityRelevance: "Medium",
    summary:
      "Chinese energy service providers are being monitored for signs of renewed engagement with Iran's upstream sector. The item is relevant because sanctions pressure may push arrangements toward smaller subcontracting, non-dollar settlement, or equipment service pathways rather than headline equity investments. Analysts should compare public announcements, shipping activity, and company disclosures before treating this as confirmed capital deployment.",
    keyPoints: [
      "Potentially sanctions-sensitive energy services rather than visible greenfield investment.",
      "Watch for references to maintenance, drilling equipment, and local partners.",
      "Useful early indicator for post-conflict reconstruction positioning.",
      "Requires corroboration from company filings and official Iranian releases.",
      "Relevant to sanctions-risk teams and energy competitors."
    ],
    whyItMatters:
      "Iran-facing Chinese activity can shift from formal mega-projects to lower-profile services when sanctions exposure rises.",
    whoShouldCare: ["sanctions-risk teams", "energy firms", "policy institutions"],
    clientRelevance: {
      "sanctions-risk teams": 95,
      "energy firms": 82,
      "policy institutions": 78,
      "Chinese SOEs": 68
    }
  },
  {
    id: "RRA-2026-002",
    title: "Saudi industrial policy partnerships expand China-facing AI and cloud channels",
    author: "Rihla analyst desk",
    date: "2026-04-24",
    originalLanguage: "English",
    institution: "Open-source monitor sample",
    countries: ["China", "Saudi Arabia"],
    companies: ["Huawei", "Alibaba Cloud"],
    institutions: ["Saudi Data and AI Authority", "Ministry of Investment"],
    url: "https://example.org/china-saudi-ai-cloud-sample",
    sourceType: "corporate press releases",
    collectionTimestamp: "2026-05-15T09:05:00Z",
    sectors: ["AI", "cloud computing", "data centers", "smart cities"],
    projectType: "AI and cloud partnership",
    investmentType: ["technology partnership", "AI/cloud/data center agreement"],
    projectStatus: "Active",
    riskLevel: "Medium",
    confidence: 81,
    sanctionsRelevance: "Low",
    strategicAutonomyRelevance: "High",
    chinaIranRelevance: "Low",
    chinaGccRelevance: "High",
    usChinaCompetitionRelevance: "High",
    commercialOpportunityRelevance: "High",
    summary:
      "Saudi technology partnerships with Chinese cloud and AI vendors are a central monitor priority because they connect Vision 2030 industrial policy, data localization, smart city procurement, and U.S.-China technology competition. Items in this lane should be tagged for cloud region buildout, AI training partnerships, cybersecurity requirements, and potential restrictions on advanced chips or dual-use workloads.",
    keyPoints: [
      "High strategic-autonomy relevance for Saudi digital infrastructure.",
      "Potential exposure to U.S. technology controls if advanced AI compute is involved.",
      "Commercial opportunity for cloud, cybersecurity, and data center vendors.",
      "Monitor procurement entities and joint venture structures.",
      "Strong fit for recurring country and sector briefs."
    ],
    whyItMatters:
      "Chinese cloud and AI presence in Saudi Arabia can reshape Gulf digital supply chains and strategic alignment choices.",
    whoShouldCare: ["AI/cloud firms", "U.S. investors", "policy institutions", "Gulf sovereign wealth funds"],
    clientRelevance: {
      "AI/cloud firms": 94,
      "U.S. investors": 88,
      "Gulf sovereign wealth funds": 82,
      "policy institutions": 86
    }
  },
  {
    id: "RRA-2026-003",
    title: "China-UAE logistics cooperation points to port, free-zone, and corridor integration",
    author: "Rihla analyst desk",
    date: "2026-04-18",
    originalLanguage: "English",
    institution: "Open-source monitor sample",
    countries: ["China", "United Arab Emirates"],
    companies: ["COSCO Shipping", "AD Ports Group"],
    institutions: ["Jebel Ali Free Zone"],
    url: "https://example.org/china-uae-logistics-sample",
    sourceType: "corporate press releases",
    collectionTimestamp: "2026-05-15T09:10:00Z",
    sectors: ["ports", "logistics corridors", "industrial zones", "finance"],
    projectType: "port and free-zone integration",
    investmentType: ["logistics corridor project", "infrastructure investment"],
    projectStatus: "Active",
    riskLevel: "Medium",
    confidence: 78,
    sanctionsRelevance: "Medium",
    strategicAutonomyRelevance: "High",
    chinaIranRelevance: "Medium",
    chinaGccRelevance: "High",
    usChinaCompetitionRelevance: "Medium",
    commercialOpportunityRelevance: "High",
    summary:
      "China-UAE logistics activity should be tracked as a hub-and-spoke system connecting ports, free zones, shipping lines, and financial services. Analysts should note whether projects support China-GCC trade, China-Iran transshipment risk, or alternative supply-chain routes after regional disruption. Corporate releases should be cross-checked against customs, shipping, and sanctions-risk indicators.",
    keyPoints: [
      "Links logistics, free-zone investment, and finance nodes.",
      "May affect supply-chain resilience after regional disruption.",
      "Sanctions teams should monitor transshipment exposure.",
      "Relevant for port operators and logistics investors.",
      "Useful for map and timeline views."
    ],
    whyItMatters:
      "UAE logistics hubs can amplify or constrain China's regional trade network across both GCC and Iran-facing channels.",
    whoShouldCare: ["logistics firms", "sanctions-risk teams", "U.S. investors", "Chinese SOEs"],
    clientRelevance: {
      "logistics firms": 92,
      "sanctions-risk teams": 75,
      "Chinese SOEs": 80,
      "U.S. investors": 70
    }
  },
  {
    id: "RRA-2026-004",
    title: "Qatar LNG and finance links remain a stable lane for China-Gulf engagement",
    author: "Rihla analyst desk",
    date: "2026-04-09",
    originalLanguage: "English",
    institution: "Open-source monitor sample",
    countries: ["China", "Qatar"],
    companies: ["QatarEnergy", "Bank of China"],
    institutions: ["Qatar Investment Authority"],
    url: "https://example.org/china-qatar-energy-finance-sample",
    sourceType: "media",
    collectionTimestamp: "2026-05-15T09:15:00Z",
    sectors: ["energy", "finance", "sovereign wealth funds", "petrochemicals"],
    projectType: "LNG and finance relationship",
    investmentType: ["energy deal", "financing agreement"],
    projectStatus: "Active",
    riskLevel: "Low",
    confidence: 84,
    sanctionsRelevance: "Low",
    strategicAutonomyRelevance: "Medium",
    chinaIranRelevance: "Low",
    chinaGccRelevance: "High",
    usChinaCompetitionRelevance: "Medium",
    commercialOpportunityRelevance: "High",
    summary:
      "Qatar-facing China activity is a comparatively stable monitor lane because it combines LNG offtake, petrochemical investment, and financial relationships. Analysts should track long-term purchase agreements, project finance, sovereign fund co-investment, and renminbi settlement signals. This coverage supports energy client briefs and regional comparison against Saudi and UAE technology-heavy engagement.",
    keyPoints: [
      "Energy and finance dominate the China-Qatar lane.",
      "Lower sanctions exposure than Iran-linked activity.",
      "Important benchmark for China-GCC commercial stability.",
      "Track sovereign fund co-investment signals.",
      "Useful for LNG, petrochemical, and finance stakeholders."
    ],
    whyItMatters:
      "Qatar provides a lower-risk China-GCC energy and finance baseline against higher-risk Iran and technology competition lanes.",
    whoShouldCare: ["energy firms", "Gulf sovereign wealth funds", "development finance institutions"],
    clientRelevance: {
      "energy firms": 91,
      "Gulf sovereign wealth funds": 83,
      "development finance institutions": 71,
      "U.S. investors": 67
    }
  }
];

export const pipelineSteps = [
  "Collect lawful public URLs, RSS feeds, APIs, newsletters, uploads, and manual links",
  "Extract raw HTML/PDF text with Playwright, BeautifulSoup, Trafilatura, or feedparser",
  "Normalize metadata, cleaned text, language, source category, and collection timestamp",
  "Use DeepSeek V4 Flash for Mandarin-to-English translation, summarization, tagging, entity extraction, and relevance scoring",
  "Generate BGE embeddings and store vectors in Supabase/PostgreSQL with pgvector",
  "Expose keyword, semantic, filtered search, saved alerts, exports, and brief-builder workflows",
  "Reserve DeepSeek V4 Pro, GPT, or Claude for final memos, scenario analysis, and high-stakes advisory writing"
];
