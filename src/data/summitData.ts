export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SummitStatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface FocusAreaItem {
  id: string;
  index: string;
  title: string;
  shortTag: string;
  image: string;
  imageAlt: string;
  summary: string;
  sessionFormat: string;
  keyThemes: string[];
  layoutVariant: 'wide' | 'tall' | 'standard';
}

export interface SpeakerPlaceholderItem {
  id: string;
  slotNumber: string;
  name: string;
  designation: string;
  organisation: string;
  category: string;
  portrait: string;
  bioPlaceholder: string;
  isPlaceholder: boolean;
}

export interface LegacyEditionItem {
  id: string;
  editionNumber: string;
  year: string;
  title: string;
  location: string;
  attendanceNote: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Focus Areas', href: '#focus-areas' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Hero background configuration.
 * To enable a background video later, set `videoUrl` to your hosted MP4/WebM URL.
 * The high-resolution editorial photograph acts as both the video poster and fallback.
 */
export const HERO_CONTENT = {
  eyebrow: '2027 Edition · Women’s Leadership Summit · Kochi',
  headline: 'SHE POWER',
  statement: 'HER WORLD. HER WAY. HER POWER.',
  description:
    'Convening founders, technologists, creators, homemakers turned entrepreneurs and changemakers across India.',
  primaryCta: 'EXPLORE THE SUMMIT',
  secondaryCta: 'BECOME A PARTNER',
  media: {
    videoUrl: '' as string,
    posterImage: '/src/assets/images/hero_she_power_1795594228862.jpg',
    imageAlt:
      'Indian woman leader wearing an ivory handloom Kerala kasavu saree inside a sunlit glass architectural pavilion in Kochi',
  },
};

export const STATS_HEADER = {
  kicker: 'Summit Scale · Kochi 2027',
  heading: 'A thousand voices, one architectural room.',
  supportingText:
    'Built intentionally as a high-trust leadership convergence rather than a conventional conference floor.',
};

export const SUMMIT_STATS: SummitStatItem[] = [
  {
    id: 'edition',
    value: '05th',
    label: 'EDITION',
    description: 'Returning to Kochi with renewed ambition and a wider vision.',
  },
  {
    id: 'speakers',
    value: '20+',
    label: 'INSPIRING SPEAKERS',
    description: 'Founders, technologists, creators and influential voices.',
  },
  {
    id: 'participants',
    value: '1,000+',
    label: 'EXPECTED PARTICIPANTS',
    description: 'Entrepreneurs, emerging leaders and changemakers across India.',
  },
  {
    id: 'domains',
    value: '08',
    label: 'LEADERSHIP DOMAINS',
    description: 'Curated conversations spanning business, technology and society.',
  },
];

export const ABOUT_CONTENT = {
  kicker: '01 — What Is She Power',
  heading: 'More Than a Summit.\nA Movement of Possibilities.',
  paragraphs: [
    'Conceived and curated by Channeliam, She Power exists to dissolve the artificial boundaries between boardrooms, neighbourhood workshops, research labs and cultural salons.',
    'Here, established enterprise founders sit beside homemakers launching their first ventures, senior public administrators, restaurateurs and literary voices.',
    'A platform for women to exchange ideas, build meaningful relationships, access opportunities and turn ambition into measurable progress.',
  ],
  ctaLabel: 'DISCOVER OUR STORY',
  image: '/src/assets/images/about_kerala_roundtable_1795594230424.jpg',
  imageAlt:
    'Diverse Indian women leaders conversing around a handcrafted teakwood table inside a sunlit Kerala architectural pavilion',
  caption: 'Channeliam Curatorial Dialogue · Kochi, Kerala',
  storyModal: {
    title: 'The Channeliam Vision for She Power 2027',
    subtitle: 'From Regional Conversations to a National Leadership Architecture',
    pillars: [
      {
        title: 'Cross-Sector Dialogue',
        body: 'Unlike siloed industry conferences, She Power intentionally places grassroots builders, technologists, investors and cultural creators at the same table.',
      },
      {
        title: 'Measurable Opportunity',
        body: 'Every keynote, clinic and peer roundtable is structured around tangible outcomes — capital access, market linkages, mentorship and policy visibility.',
      },
      {
        title: 'Rooted in Kochi',
        body: 'Hosted in the cosmopolitan port city of Kochi, the summit draws from Kerala’s rich history of literacy, craftsmanship, global trade and community resilience.',
      },
    ],
  },
};

export const FOCUS_AREAS_HEADER = {
  kicker: '02 — Focus Areas',
  heading: 'Conversations That Create Real Change.',
  supportingText:
    'Eight leadership domains that reflect the ambitions, challenges and opportunities of women today.',
  ctaLabel: 'View All Focus Areas',
};

export const FOCUS_AREAS: FocusAreaItem[] = [
  {
    id: 'entrepreneurship',
    index: '01',
    title: 'Entrepreneurship & Innovation',
    shortTag: 'Venture Building',
    image: '/src/assets/images/focus_entrepreneurship_1795594231272.jpg',
    imageAlt: 'Indian woman founder reviewing product prototypes and design sketches at an oak studio table',
    summary:
      'From category-defining D2C brands to manufacturing enterprises, exploring how women founders build durable, high-margin businesses.',
    sessionFormat: 'Founder Firesides · Product Clinics',
    keyThemes: [
      'Product-market clarity across Tier-1 & Tier-2 India',
      'Supply chain resilience and ethical manufacturing',
      'Building leadership teams beyond the founder stage',
    ],
    layoutVariant: 'wide',
  },
  {
    id: 'creativity',
    index: '02',
    title: 'Creativity & Culture',
    shortTag: 'Design & Heritage',
    image: '/src/assets/images/focus_creativity_1795594231263.jpg',
    imageAlt: 'Indian creative director inspecting woven textiles and design monographs in a Kochi studio',
    summary:
      'Where architecture, cinema, literature, craft and contemporary design intersect with sustainable commercial ecosystems.',
    sessionFormat: 'Curatorial Dialogues · Salon Talks',
    keyThemes: [
      'Taking regional craft and handloom heritage global',
      'Independent media, publishing and cinema leadership',
      'Creative direction as strategic enterprise value',
    ],
    layoutVariant: 'tall',
  },
  {
    id: 'technology',
    index: '03',
    title: 'Technology & Impact',
    shortTag: 'Deep Tech & AI',
    image: '/src/assets/images/focus_technology_1795594231412.jpg',
    imageAlt: 'Indian woman technology executive collaborating over architectural interfaces in a glass studio',
    summary:
      'Examining applied artificial intelligence, climate engineering, health-tech and inclusive digital infrastructure led by women.',
    sessionFormat: 'Keynote Briefings · Technical Panels',
    keyThemes: [
      'Ethical AI adoption across healthcare and education',
      'Women leading engineering & R&D organisations',
      'Digital public infrastructure for grassroots access',
    ],
    layoutVariant: 'standard',
  },
  {
    id: 'policy',
    index: '04',
    title: 'Public Policy & Leadership',
    shortTag: 'Civic Architecture',
    image: '/src/assets/images/focus_policy_1795594232349.jpg',
    imageAlt: 'Indian woman public policy leader addressing a sunlit modern civic auditorium',
    summary:
      'Bringing administrators, legal scholars and civic leaders together to shape equitable institutional frameworks.',
    sessionFormat: 'Policy Roundtables · Civic Debates',
    keyThemes: [
      'Gender-responsive municipal & state procurement',
      'Governance, urban sustainability and public trust',
      'Bridging policy design and grassroots implementation',
    ],
    layoutVariant: 'tall',
  },
  {
    id: 'hospitality',
    index: '05',
    title: 'Food & Hospitality',
    shortTag: 'Culinary Enterprise',
    image: '/src/assets/images/focus_hospitality_1795594233235.jpg',
    imageAlt: 'Indian woman chef plating artisanal South Indian coastal cuisine in a modern kitchen',
    summary:
      'Spotlighting chefs, boutique hoteliers and specialty food entrepreneurs transforming regional gastronomy.',
    sessionFormat: 'Culinary Conversations · Brand Stories',
    keyThemes: [
      'Farm-to-table sourcing and agricultural partnerships',
      'Scaling artisanal food brands without losing craft',
      'Designing conscious hospitality spaces in South India',
    ],
    layoutVariant: 'standard',
  },
  {
    id: 'homemakers',
    index: '06',
    title: 'Homemakers to Entrepreneurs',
    shortTag: 'First-Time Founders',
    image: '/src/assets/images/focus_homemakers_1795594233210.jpg',
    imageAlt: 'Indian woman entrepreneur packaging small-batch botanical spices on a sunlit veranda',
    summary:
      'Practical pathways for women transitioning household mastery and community networks into registered, thriving enterprises.',
    sessionFormat: 'Mentorship Clinics · Peer Circles',
    keyThemes: [
      'Formalising home-based businesses and digital commerce',
      'First-step credit, micro-logistics and brand packaging',
      'Building confidence and peer accountability networks',
    ],
    layoutVariant: 'tall',
  },
  {
    id: 'startups',
    index: '07',
    title: 'Startups & Business Growth',
    shortTag: 'Scale & Strategy',
    image: '/src/assets/images/focus_startups_1795594233545.jpg',
    imageAlt: 'Two Indian women startup co-founders discussing business growth in a bright glass boardroom',
    summary:
      'Tactical conversations on customer acquisition, cross-border expansion, unit economics and institutional readiness.',
    sessionFormat: 'Growth Workshops · Investor Q&A',
    keyThemes: [
      'Transitioning from founder-led sales to revenue engines',
      'Strategic partnerships and B2B enterprise distribution',
      'Preparing governance and metrics for Series A+',
    ],
    layoutVariant: 'wide',
  },
  {
    id: 'finance',
    index: '08',
    title: 'Finance & Wealth Creation',
    shortTag: 'Capital & Agency',
    image: '/src/assets/images/focus_finance_1795594234472.jpg',
    imageAlt: 'Indian woman venture partner seated in a stone and timber architectural lounge',
    summary:
      'Demystifying venture capital, private wealth stewardship, angel syndicates and long-term financial independence.',
    sessionFormat: 'Capital Panels · Wealth Briefings',
    keyThemes: [
      'Closing the early-stage institutional funding gap',
      'Women as angel investors and fund managers',
      'Long-horizon wealth governance and equity literacy',
    ],
    layoutVariant: 'standard',
  },
];

export const SPEAKERS_HEADER = {
  kicker: '03 — Speakers',
  heading: 'Meet the Voices of She Power.',
  supportingText:
    'A curated line-up of leaders, builders and changemakers from across sectors.',
  ctaLabel: 'Explore All Speakers',
  note: '2027 Line-up · Confirmed speakers will be announced in curated waves (20–25 voices total).',
};

/**
 * Clearly identifiable placeholder speaker entries until official 2027 speaker names are confirmed.
 */
export const SPEAKERS_PLACEHOLDERS: SpeakerPlaceholderItem[] = [
  {
    id: 'sp-01',
    slotNumber: 'Voice 01',
    name: 'Keynote Speaker 01',
    designation: 'Founder & Chief Executive [Placeholder]',
    organisation: 'Technology Enterprise · Announcement Pending',
    category: 'Technology & Impact',
    portrait: '/src/assets/images/speaker_portrait_01_1795594234313.jpg',
    bioPlaceholder:
      'Placeholder profile for a senior technology founder leading applied AI and enterprise systems across India.',
    isPlaceholder: true,
  },
  {
    id: 'sp-02',
    slotNumber: 'Voice 02',
    name: 'Keynote Speaker 02',
    designation: 'Author & Social Entrepreneur [Placeholder]',
    organisation: 'Cultural Foundation · Announcement Pending',
    category: 'Creativity & Culture',
    portrait: '/src/assets/images/speaker_portrait_02_1795594236366.jpg',
    bioPlaceholder:
      'Placeholder profile for an acclaimed literary voice and institution builder championing grassroots craft.',
    isPlaceholder: true,
  },
  {
    id: 'sp-03',
    slotNumber: 'Voice 03',
    name: 'Featured Speaker 03',
    designation: 'Principal Architect & Founder [Placeholder]',
    organisation: 'Design Practice · Announcement Pending',
    category: 'Entrepreneurship & Innovation',
    portrait: '/src/assets/images/speaker_portrait_03_1795594236320.jpg',
    bioPlaceholder:
      'Placeholder profile for a contemporary design studio founder redefining sustainable urban spaces.',
    isPlaceholder: true,
  },
  {
    id: 'sp-04',
    slotNumber: 'Voice 04',
    name: 'Featured Speaker 04',
    designation: 'Chef-Founder & Restaurateur [Placeholder]',
    organisation: 'Culinary Collective · Announcement Pending',
    category: 'Food & Hospitality',
    portrait: '/src/assets/images/speaker_portrait_04_1795594236244.jpg',
    bioPlaceholder:
      'Placeholder profile for a South Indian culinary entrepreneur building farmer-connected dining ventures.',
    isPlaceholder: true,
  },
  {
    id: 'sp-05',
    slotNumber: 'Voice 05',
    name: 'Keynote Speaker 05',
    designation: 'Managing Partner [Placeholder]',
    organisation: 'Venture Capital Fund · Announcement Pending',
    category: 'Finance & Wealth Creation',
    portrait: '/src/assets/images/speaker_portrait_05_1795594327447.jpg',
    bioPlaceholder:
      'Placeholder profile for an institutional investor backing early-stage women-led startups across India.',
    isPlaceholder: true,
  },
  {
    id: 'sp-06',
    slotNumber: 'Voice 06',
    name: 'Featured Speaker 06',
    designation: 'Senior Public Administrator [Placeholder]',
    organisation: 'State Policy Council · Announcement Pending',
    category: 'Public Policy & Leadership',
    portrait: '/src/assets/images/focus_policy_1795594232349.jpg',
    bioPlaceholder:
      'Placeholder profile for a civic policy leader shaping inclusive economic corridors and entrepreneurship grants.',
    isPlaceholder: true,
  },
  {
    id: 'sp-07',
    slotNumber: 'Voice 07',
    name: 'Featured Speaker 07',
    designation: 'Co-Founder & COO [Placeholder]',
    organisation: 'Growth-Stage Startup · Announcement Pending',
    category: 'Startups & Business Growth',
    portrait: '/src/assets/images/focus_entrepreneurship_1795594231272.jpg',
    bioPlaceholder:
      'Placeholder profile for an operational leader scaling consumer hardware and manufacturing out of South India.',
    isPlaceholder: true,
  },
  {
    id: 'sp-08',
    slotNumber: 'Voice 08',
    name: 'Community Voice 08',
    designation: 'Founder, Artisanal Foods [Placeholder]',
    organisation: 'Homegrown Venture · Announcement Pending',
    category: 'Homemakers to Entrepreneurs',
    portrait: '/src/assets/images/focus_homemakers_1795594233210.jpg',
    bioPlaceholder:
      'Placeholder profile for a homemaker-turned-entrepreneur whose home kitchen enterprise now exports nationally.',
    isPlaceholder: true,
  },
  {
    id: 'sp-09',
    slotNumber: 'Voice 09',
    name: 'Featured Speaker 09',
    designation: 'Textile & Craft Curator [Placeholder]',
    organisation: 'Heritage Collective · Announcement Pending',
    category: 'Creativity & Culture',
    portrait: '/src/assets/images/focus_creativity_1795594231263.jpg',
    bioPlaceholder:
      'Placeholder profile for a design researcher bridging Kerala weaving guilds with international buyers.',
    isPlaceholder: true,
  },
  {
    id: 'sp-10',
    slotNumber: 'Voice 10',
    name: 'Featured Speaker 10',
    designation: 'Investment Strategist [Placeholder]',
    organisation: 'Wealth Advisory · Announcement Pending',
    category: 'Finance & Wealth Creation',
    portrait: '/src/assets/images/focus_finance_1795594234472.jpg',
    bioPlaceholder:
      'Placeholder profile for a capital strategist advising founders on treasury management and angel syndication.',
    isPlaceholder: true,
  },
];

export const LEGACY_HEADER = {
  kicker: '04 — The Journey So Far',
  heading: 'Four Editions.\nA Growing Movement.',
  supportingText: 'A look back at the ideas, people and moments that built She Power.',
  ctaLabel: 'EXPLORE THE LEGACY',
};

export const LEGACY_EDITIONS: LegacyEditionItem[] = [
  {
    id: 'ed-01',
    editionNumber: 'Edition 01',
    year: 'Inaugural Chapter',
    title: 'The First Circle',
    location: 'Fort Kochi, Kerala',
    attendanceNote: 'Intimate Leadership Salon',
    image: '/src/assets/images/legacy_edition_01_1795594347396.jpg',
    imageAlt: 'Inaugural intimate leadership salon of Indian women founders in a heritage Kochi hall',
    summary:
      'Launched by Channeliam as an intimate fireside gathering of thirty women founders, educators and local business builders in Fort Kochi.',
    highlights: [
      'First cross-industry dialogue for women founders in Kerala',
      'Established peer mentorship circles across sectors',
      'Laid the editorial blueprint for She Power',
    ],
  },
  {
    id: 'ed-02',
    editionNumber: 'Edition 02',
    year: 'Chapter Two',
    title: 'Voices Across Sectors',
    location: 'Ernakulam, Kochi',
    attendanceNote: 'Multi-Track Forum',
    image: '/src/assets/images/legacy_edition_02_1795594347449.jpg',
    imageAlt: 'Four Indian women leaders speaking on stage during a packed Kochi summit panel',
    summary:
      'Expanded into curated panel conversations connecting technology leaders, public officials, and emerging startup teams.',
    highlights: [
      'Introduced Homemakers-to-Entrepreneurs showcase clinics',
      'Hosted 12+ keynote and panel voices from South India',
      'Forged early institutional and banking partnerships',
    ],
  },
  {
    id: 'ed-03',
    editionNumber: 'Edition 03',
    year: 'Chapter Three',
    title: 'Collaborative Momentum',
    location: 'Bolgatty, Kochi',
    attendanceNote: 'Roundtable Convergence',
    image: '/src/assets/images/legacy_edition_03_1795594347658.jpg',
    imageAlt: 'Indian women professionals collaborating around sunlit roundtable desks in Kochi',
    summary:
      'Transformed the summit format around participatory roundtables, investor office hours and curated marketplace showcases.',
    highlights: [
      'Launched live venture pitch and advisory tables',
      'Welcomed cross-state delegations across South India',
      'Strengthened women-led D2C and hospitality networks',
    ],
  },
  {
    id: 'ed-04',
    editionNumber: 'Edition 04',
    year: 'Chapter Four',
    title: 'A National Stage',
    location: 'Kochi, Kerala',
    attendanceNote: 'Full-House Plenary',
    image: '/src/assets/images/legacy_edition_04_1795594348492.jpg',
    imageAlt: 'Grand plenary auditorium filled with women leaders watching a keynote speaker in Kochi',
    summary:
      'Cemented She Power as one of South India’s premier women’s leadership platforms, setting the architectural ambition for 2027.',
    highlights: [
      'Full-capacity plenary auditorium with national speakers',
      'Eight curated leadership tracks across two stages',
      'Created the momentum toward 1,000+ delegates in 2027',
    ],
  },
];

export const FOOTER_CONTENT = {
  brand: 'SHE POWER',
  organiser: 'Organised by Channeliam',
  editionLine: '5th Edition · Women’s Leadership Summit 2027 · Kochi, Kerala',
  motto: 'HER WORLD. HER WAY. HER POWER.',
  contactEmail: 'summit@channeliam.com',
  partnerEmail: 'partners@channeliam.com',
  location: 'Kochi, Kerala, South India',
  copyright: '© 2027 Channeliam · She Power Women’s Leadership Summit. All rights reserved.',
};
