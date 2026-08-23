export const SUPPORTING_LINE =
  "An independent real estate investment and asset manager, managing private real estate across Europe since 2004.";

export const navLinks = [
  { label: "Who We Are", href: "/about-us" },
  { label: "Impact", href: "/#impact" },
  { label: "Verticals", href: "/#verticals" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/news-insights" },
  { label: "Contact", href: "/contact" },
];

export const recognitions = [
  {
    name: "PERE Awards 2024",
    detail: "Logistics Investor of the Year: Europe",
    image: "/images/awards/pere-awards.png",
  },
  {
    name: "IPE Top Five",
    detail: "Value Add Investment Manager, 2023 & 2024",
    image: "/images/awards/ipe-top-five.png",
  },
  {
    name: "RIBA London Award 2023",
    detail: "Winner",
    image: "/images/awards/riba-london.png",
  },
  {
    name: "LEAP 2023",
    detail: "Advancing Together",
    image: "/images/awards/leap.png",
  },
  {
    name: "PRI",
    detail: "Signatory of Principles for Responsible Investment",
    image: "/images/awards/pri.png",
  },
  {
    name: "GRESB Real Estate",
    detail: "Participant",
    image: "/images/awards/gresb.png",
  },
  {
    name: "INREV",
    detail: "Member",
    image: "/images/awards/inrev.png",
  },
  {
    name: "SFDR",
    detail: "Sustainable Finance Disclosure Regulation compliant",
    image: "/images/awards/sfdr.png",
  },
];

export const stats = [
  { value: "8", label: "Offices across Europe" },
  { value: "104", label: "Employees globally" },
  { value: "2004", label: "Firm founded" },
  { value: "€20bn", label: "Cumulatively managed since inception" },
];

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  location: string;
  image: string;
  investmentCommittee?: boolean;
  bio?: string[];
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    slug: "marcus-meijer",
    name: "Marcus Meijer",
    title: "Managing Partner & Chief Executive Officer",
    location: "London",
    image: "/images/team/marcus-meijer.jpg",
    investmentCommittee: true,
    bio: [
      "Marcus Meijer is the Founder and Chief Executive Officer of MARK and Chairman of Crossbay. Marcus has extensive corporate finance, real estate investment and development experience. He has originated, executed, and exited single asset, portfolio, and non-performing loan transactions across the United States, the U.K., and Continental Europe.",
      "Before founding MARK in 2004, Marcus served as CFO of MARK's predecessor, MAB Group, where he was responsible for the strategic restructuring of the business, culminating in the sale of the business to a global financial institution.",
      "Marcus began his career in 1995 at Hines in Chicago and London, before joining Goldman Sachs' Principal Investment Team in 1997. Marcus graduated from Leyden University with a Master's degree in law, and received his MBA in 2002 from INSEAD. He speaks six languages.",
    ],
    linkedin: "https://www.linkedin.com/in/marcus-meijer/",
  },
  {
    slug: "philippe-bidaud",
    name: "Philippe Bidaud",
    title: "Managing Partner & Chief Operating Officer",
    location: "Paris",
    image: "/images/team/philippe-bidaud.jpg",
    investmentCommittee: true,
    bio: [
      "Philippe Bidaud is Managing Partner and Chief Operating Officer at MARK, overseeing the management platform's operations. He is also an Executive Board Member and sits on all Investment Committees. With extensive experience in finance and real estate, his skillset is broad, spanning corporate finance, business development, acquisitions, and asset management across Europe, drawing on his strong investor network.",
      "Before joining MARK, Philippe was the M&A Director at HSBC, where he managed large real estate disposals and corporate finance deals in Continental Europe. He also held senior roles at Klepierre and Unibail Rodamco, overseeing acquisitions, asset management, and dispositions of retail assets in Western Europe.",
      "Philippe is a graduate of ESTP Civil Engineering School and ESSEC Business School in Paris and is fluent in both French and English.",
    ],
    linkedin: "https://www.linkedin.com/in/philippe-bidaud-b7901712/",
  },
  {
    slug: "marco-riva",
    name: "Marco Riva",
    title: "Partner & CEO, Crossbay",
    location: "London",
    image: "/images/team/marco-riva.jpg",
    investmentCommittee: true,
    bio: [
      "Marco Riva is the CEO of Crossbay, MARK's urban logistics platform.",
      "Marco has overall responsibility for the growth and management of MARK's industry-leading logistics platform, Crossbay. He leads a team of over 40 people responsible for the sourcing, acquisition, management and development of logistics assets across Europe. He brings almost 20 years of experience to MARK.",
      "His career began at KPMG, before moving to Goldman Sachs, where he was involved in acquisitions, restructuring and debt management, as well as leasing across the company's real estate investments in Italy.",
      "He then joined Logicor, Blackstone's pan-European logistics portfolio, which exited to the China Investment Corporation for €12.5bn. As director of acquisitions, Marco oversaw a 147 million sq. ft portfolio across 17 European countries, 70% of which was concentrated in the UK, Germany, France and Southern Europe. He oversaw over €2bn of investments for the platform.",
    ],
    linkedin: "https://uk.linkedin.com/in/marco-riva-95aba334",
  },
  {
    slug: "michelle-doran",
    name: "Michelle Doran",
    title: "Senior Managing Director, Head of Client Solutions",
    location: "London",
    image: "/images/team/michelle-doran.jpg",
    investmentCommittee: true,
    bio: [
      "Michelle is a Senior Managing Director in the Client Solutions team. She joined the firm in 2022, following 12 years at Tishman Speyer, where she served as Head of European Portfolio Management before becoming Managing Director for Global Equity Capital Markets. In this later role, Michelle was responsible for developing and managing strategic relationships with some of the world's most prominent pension funds, sovereign wealth funds, insurance companies and family offices across Europe, Israel and Asia.",
      "At MARK, Michelle oversees relationships with the firm's global investor base and spearheads fundraising efforts for both new and existing platforms.",
      "Michelle has been in the real estate investment industry since 2006. She worked at M3 Capital and CBRE before joining Tishman Speyer in 2010, gaining extensive capital markets and acquisitions experience in the process.",
      "Michelle has studied in both Hong Kong and the UK, where she obtained a Master's degree in real estate investment from Cass Business School and an MA (Oxon) in Modern History from the University of Oxford.",
    ],
    linkedin: "https://www.linkedin.com/in/michelle-doran-b760a053/",
  },
  {
    slug: "matthew-armitage",
    name: "Matthew Armitage",
    title: "Chief Financial Officer",
    location: "London",
    image: "/images/team/matthew-armitage.jpg",
    investmentCommittee: true,
    bio: [
      "Matthew Armitage joined MARK in 2016 and is focused on the structuring of new and existing investments.",
      "Prior to joining MARK, Matthew worked at PwC, where he gained significant experience in the financial and tax elements of real estate transactions.",
    ],
    linkedin: "https://www.linkedin.com/in/matthew-armitage-09850338/",
  },
  {
    slug: "matthew-ammirati",
    name: "Matthew Ammirati",
    title: "Chief Marketing Officer",
    location: "New York",
    image: "/images/team/matthew-ammirati.jpg",
    bio: [
      "Matthew Ammirati joined MARK in 2019 and focuses on branding, digital, social media and marketing initiatives for the business and investments.",
      "Prior to joining MARK, Matthew held senior roles at Newell Brands as Head of Marketing eCommerce, and founded and led Ammirati (subsequently renamed Resource/Ammirati) as CEO from 2001 to 2017.",
      "Matthew holds a BFA in Graphic Design and Marketing from the School of Visual Arts.",
    ],
    linkedin: "https://www.linkedin.com/in/matthewammirati/",
  },
  {
    slug: "nitin-aggarwal",
    name: "Nitin Aggarwal",
    title: "Chief Technology Officer",
    location: "London",
    image: "/images/team/nitin-aggarwal.jpg",
    bio: [
      "Nitin has overall responsibility for MARK's technology strategy across the firm's European platform, leading its IT, information security, and compliance functions, as well as the data and automation capabilities that support its investment and operational teams.",
      "He has led MARK's adoption of artificial intelligence, designing and delivering capability-building programmes for teams in London, Paris and Luxembourg, and across the firm's logistics platform, Crossbay. His focus has been on embedding practical AI tools into everyday workflows—from investment analysis through to finance and operations—and on automating processes to improve the speed, accuracy, and quality of decision-making.",
      "Nitin brings more than 20 years of experience across the financial services and real estate sectors. Prior to joining MARK, he provided technology consulting to financial services firms, including Generation Investment Management LLP and Crescent Credit Europe LLP.",
    ],
  },
  {
    slug: "eric-van-duren",
    name: "Eric van Duren",
    title: "Senior Managing Director",
    location: "London",
    image: "/images/team/eric-van-duren.jpg",
    investmentCommittee: true,
    bio: [
      "Eric van Duren joined MARK as Senior Managing Director and focuses on transaction execution.",
      "Prior to joining MARK, Eric held senior roles at Multi Corporation, including nine years as a member of the Board of Directors and Chief Investment Officer, with responsibility for overseeing investments and disposals of retail assets valued over €8 billion across Europe. He began his career in 1985 at NN Vastgoed in Delft.",
      "Eric holds a Master's in Architecture from Delft University. He is fluent in Dutch, English, French and German.",
    ],
    linkedin: "https://www.linkedin.com/in/eric-van-duren-41b88015/",
  },
  {
    slug: "nick-russell",
    name: "Nick Russell",
    title: "Managing Director, General Counsel",
    location: "London",
    image: "/images/team/nick-russell.jpg",
    investmentCommittee: true,
    bio: [
      "Nick Russell joined MARK as General Counsel in 2024, bringing more than two decades of legal experience.",
      "Before joining MARK, he served as General Counsel at Henderson Park, General Counsel at Cross Ocean Partners in London, and Senior Counsel at Capula Investment Management. Prior to working in alternative asset management, he spent 14 years at Goldman Sachs, where he acted as counsel to the European Special Situations Group.",
      "A Solicitor of the Senior Courts of England and Wales, Nick earned his LLB (Hons) in Law from Sheffield Hallam University.",
    ],
    linkedin: "https://www.linkedin.com/in/nick-russell-63761658/",
  },
  {
    slug: "jonathan-buchanan",
    name: "Jonathan Buchanan",
    title: "Board Director",
    location: "Guernsey",
    image: "/images/team/jonathan-buchanan.jpg",
    bio: [
      "Jonathan Buchanan joined MARK as Board Director in 2015 and has over 35 years of experience in real estate transactions, both domestic and international.",
      "Prior to joining MARK, Jonathan built his career in property investment and development, and has held various board positions in the UK and abroad, including six years on the board of Notting Hill Housing Trust (Notting Hill Genesis), where he also chaired The Group Development Committee.",
      "Jonathan holds a fiduciary licence with The Guernsey Financial Services Commission.",
    ],
    linkedin: "https://www.linkedin.com/in/jonathan-buchanan-ba722489/",
  },
];

export type TeamDirectoryEntry = {
  name: string;
  role: string;
  businessUnit: string;
  location: string;
};

export const teamDirectory: TeamDirectoryEntry[] = [
  { name: "Nnes Ajukwu", role: "Senior Associate", businessUnit: "Client Solutions", location: "London" },
  { name: "Baptiste Antier", role: "Associate", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "David Barnett", role: "UK PRS", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Jimmy Barnett", role: "UK PRS", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Matilde Corrêa De Barros", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Adam Benabbou", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Johana Bodart", role: "Senior Analyst", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Pietro Bucci", role: "Senior Vice President, Crossbay", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Laura Button", role: "Executive Assistant, Client Solutions & Investment Management", businessUnit: "Operations", location: "London" },
  { name: "Jack Chandler", role: "Corporate Financial Controller", businessUnit: "Finance", location: "London" },
  { name: "Maxime Clerc", role: "Vice President, Assembly", businessUnit: "Finance", location: "Paris" },
  { name: "Anushka Das", role: "Senior Analyst", businessUnit: "Finance", location: "London" },
  { name: "Tristan Jobbe Duval", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Maud Ecochard", role: "Associate, Assembly", businessUnit: "Finance", location: "Paris" },
  { name: "Tom Edet", role: "Deputy Program Director, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Kamil Elantri", role: "Analyst", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Jean-Charles Equoy", role: "CEO, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Roy Erkelens", role: "Managing Director, Crossbay", businessUnit: "Investment and Asset Management", location: "Amsterdam" },
  { name: "Pietro Faggion", role: "Analyst", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Aaron Fernandes", role: "ESG Manager", businessUnit: "ESG", location: "London" },
  { name: "Pierre Fontaine", role: "Vice President", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Isabella Fowler-Dewe", role: "Executive Assistant", businessUnit: "Operations", location: "London" },
  { name: "Frederic Gardeur", role: "Managing Director", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Aurore Gines", role: "Deputy Program Director, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Tomás Gonzalez", role: "Vice President", businessUnit: "Investment and Asset Management", location: "Madrid" },
  { name: "Antoine Le Gourrierec", role: "Senior Analyst", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Claire Haddon", role: "Head of Asset Management, Crossbay", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Jocelynn Harley", role: "Marketing Manager", businessUnit: "Marketing", location: "London" },
  { name: "Catherine Hine", role: "Executive Assistant", businessUnit: "Operations", location: "London" },
  { name: "Stuart Holligan", role: "Senior Vice President", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Rodney Hunt", role: "Vice President, Crossbay", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Sam Husken", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Nikos Iordanou", role: "Senior Analyst", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Nienke Jansen", role: "Senior Asset Manager", businessUnit: "Investment and Asset Management", location: "Amsterdam" },
  { name: "Bernat Just", role: "Associate", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Pauline Kerlo", role: "Program Director, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Arjan Kooman", role: "Managing Director", businessUnit: "Investment and Asset Management", location: "Amsterdam" },
  { name: "Edouard de Lanouvelle", role: "Directeur Général Adjoint", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Mathilde Lanoy", role: "Associate", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Thomas Ledoux", role: "Program Director, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Margarita Liasides", role: "Senior Analyst", businessUnit: "Finance", location: "London" },
  { name: "Katherine Lindop", role: "Vice President, Head of Operations & HR", businessUnit: "Operations", location: "London" },
  { name: "Maxim Lobes", role: "Vice President", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Alex Lowry", role: "Senior Associate, Crossbay", businessUnit: "Investment and Asset Management", location: "Frankfurt" },
  { name: "Etienne Lucas", role: "Program Manager, Assembly", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Marvin Marciano", role: "Head of Acquisition & Asset Management, France", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Tilly Martin-Redman", role: "Operations Assistant", businessUnit: "Operations", location: "London" },
  { name: "Hugo Maudsley", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Trung Nguyen", role: "Senior Vice President, Crossbay", businessUnit: "Investment and Asset Management", location: "Frankfurt" },
  { name: "Gonzalo Alcover Olaso", role: "Senior Vice President, Crossbay", businessUnit: "Investment and Asset Management", location: "Madrid" },
  { name: "Augustin Olivier", role: "Senior Vice President, France", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Keith Owiredu", role: "Senior Analyst", businessUnit: "Finance", location: "London" },
  { name: "Dimitri Peignois", role: "Vice President", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Catherine Picton-Turbervill", role: "Vice President, Crossbay", businessUnit: "Finance", location: "London" },
  { name: "Marie Pinard", role: "Analyst", businessUnit: "Finance", location: "Paris" },
  { name: "Devan du Plooy", role: "Managing Director", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Kristina Pramana", role: "Senior Vice President", businessUnit: "Finance", location: "London" },
  { name: "Louis Radiguet", role: "Partner", businessUnit: "Investment and Asset Management", location: "Paris" },
  { name: "Victor Ram", role: "Associate", businessUnit: "Investment and Asset Management", location: "Amsterdam" },
  { name: "Ariane Richardson", role: "Analyst", businessUnit: "Investment and Asset Management", location: "Frankfurt" },
  { name: "Carlo Rositani", role: "Senior Associate", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Penelope Röhrig", role: "Analyst", businessUnit: "Investment and Asset Management", location: "Frankfurt" },
  { name: "Maximilian von Rönne", role: "Vice President", businessUnit: "Investment and Asset Management", location: "Frankfurt" },
  { name: "James Shindler", role: "UK PRS", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Harry Soning", role: "UK PRS", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Reinier Stuyt", role: "Asset & Investment Manager", businessUnit: "Investment and Asset Management", location: "Amsterdam" },
  { name: "Walter Tocco", role: "Vice President", businessUnit: "Finance", location: "Luxembourg" },
  { name: "Alexandre Tuchmuntz", role: "Vice President", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Constance de Varax", role: "Head of Finance & Administration, France", businessUnit: "Finance", location: "Paris" },
  { name: "Sophie de la Vieuville", role: "Office Manager", businessUnit: "Operations", location: "Paris" },
  { name: "Harriet Walsh", role: "Vice President", businessUnit: "Client Solutions", location: "London" },
  { name: "James Watkins", role: "Senior Vice President", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Joy Yang", role: "Analyst", businessUnit: "Investment and Asset Management", location: "London" },
  { name: "Xing Zhang", role: "Executive Assistant", businessUnit: "Operations", location: "London" },
];

export const verticals = [
  {
    index: "01",
    slug: "logistics",
    name: "Logistics",
    subtitle: "Crossbay",
    description:
      "MARK's logistics platform, Crossbay, invests in single-tenant urban distribution centres near Europe's major gateway cities, giving institutional investors exposure to last-mile logistics.",
    description2:
      "A sector underpinned by long-term structural demand shifts, executed by local acquisitions, asset management, and development teams.",
  },
  {
    index: "02",
    slug: "residential",
    name: "Residential",
    subtitle: "UK PRS",
    description:
      "MARK's UK Private Rented Sector strategy aggregates newly built, mid-market multifamily housing across Greater London and the south east.",
    description2:
      "Sourced directly and often off-market through established housebuilder relationships, then repositioned into professionally managed rental homes.",
  },
  {
    index: "03",
    slug: "retail",
    name: "Retail",
    subtitle: "Mixed-use",
    description:
      "MARK manages and repositions retail and mixed-use assets across Europe, most notably Promenaden in Oslo — a prime shopping district redeveloped into one of the city's premier luxury retail destinations.",
    description2:
      "Promenaden is now home to nine of the world's ten most valuable luxury brands.",
  },
];

export type PortfolioHighlight = {
  slug: string;
  name: string;
  location: string;
  tag: string;
  description: string;
  image: string;
};

export const portfolioHighlights: PortfolioHighlight[] = [
  {
    slug: "mareterra",
    name: "Mareterra",
    location: "Monaco",
    tag: "Development",
    description:
      "A landmark waterfront extension of the Principality, combining residential, retail, and marina infrastructure on newly created land.",
    image: "/images/portfolio/mareterra.jpg",
  },
  {
    slug: "the-whiteley",
    name: "The Whiteley",
    location: "London, UK",
    tag: "Mixed-use",
    description:
      "The historic Bayswater department store reimagined as a luxury residential, retail, and hospitality destination.",
    image: "/images/portfolio/whiteley.jpg",
  },
  {
    slug: "toko",
    name: "TOKO",
    location: "Paris, France",
    tag: "Residential",
    description:
      "A newly delivered mixed residential scheme in the Paris metropolitan area, part of MARK's continental housing strategy.",
    image: "/images/portfolio/toko.jpg",
  },
  {
    slug: "borough-yards",
    name: "Borough Yards",
    location: "London, UK",
    tag: "Mixed-use",
    description:
      "A restored railway-arch quarter beside Borough Market, repositioned into a retail, dining, and workspace destination.",
    image: "/images/portfolio/borough-yards.jpg",
  },
  {
    slug: "corti-segreti",
    name: "Corti Segreti & Corso Buenos Aires 59",
    location: "Milan, Italy",
    tag: "Retail",
    description:
      "Two prime Milan retail assets repositioned for the city's high-street and courtyard retail circuits.",
    image: "/images/portfolio/corti-segreti.jpg",
  },
  {
    slug: "pershing-hall",
    name: "Pershing Hall",
    location: "Paris, France",
    tag: "Hospitality",
    description:
      "A landmark Champs-Élysées-adjacent hospitality asset repositioned within MARK's Paris portfolio.",
    image: "/images/portfolio/pershing-hall.jpg",
  },
  {
    slug: "richardstrasse",
    name: "Richardstrasse 20",
    location: "Berlin, Germany",
    tag: "Residential",
    description:
      "A German residential acquisition extending MARK's footprint into the Berlin housing market.",
    image: "/images/portfolio/richardstrasse.jpg",
  },
  {
    slug: "grafton-place",
    name: "Grafton Place & 60 Dawson Street",
    location: "Dublin, Ireland",
    tag: "Mixed-use",
    description:
      "Prime Dublin city-centre assets combining retail and office accommodation in the capital's core.",
    image: "/images/portfolio/grafton-place.jpg",
  },
  {
    slug: "bond-street-house",
    name: "Bond Street House",
    location: "London, UK",
    tag: "Retail",
    description:
      "A prime West End retail and office asset on one of London's most prestigious shopping streets.",
    image: "/images/portfolio/bond-street-house.jpg",
  },
  {
    slug: "promenaden",
    name: "Promenaden",
    location: "Oslo, Norway",
    tag: "Retail",
    description:
      "Oslo's premier luxury retail district, redeveloped into a destination now home to nine of the world's ten most valuable luxury brands.",
    image: "/images/portfolio/promenaden.jpg",
  },
];

export type Transaction = {
  name: string;
  location: string;
  figure?: string;
  tag: string;
  description: string;
};

export const transactions: Transaction[] = [
  {
    name: "Mareterra",
    location: "Monaco",
    tag: "Development",
    description:
      "A landmark waterfront extension of the Principality, combining residential, retail, and marina infrastructure on newly created land.",
  },
  {
    name: "The Whiteley",
    location: "London, UK",
    tag: "Mixed-use",
    description:
      "The historic Bayswater department store reimagined as a luxury residential, retail, and hospitality destination.",
  },
  {
    name: "Crossbay Fund I",
    location: "Pan-European",
    figure: "€1.6 billion",
    tag: "Logistics · Realisation",
    description:
      "The 2022 sale of Crossbay's first logistics fund, crystallising returns across a pan-European last-mile portfolio.",
  },
  {
    name: "TOKO",
    location: "Paris, France",
    tag: "Residential",
    description:
      "A newly delivered mixed residential scheme in the Paris metropolitan area, part of MARK's continental housing strategy.",
  },
  {
    name: "Crossbay II",
    location: "Pan-European",
    figure: "€660 million",
    tag: "Logistics · Fund raise",
    description:
      "Capital raised for Crossbay's second urban logistics vehicle, backing continued last-mile acquisitions across Europe.",
  },
  {
    name: "Borough Yards",
    location: "London, UK",
    tag: "Mixed-use",
    description:
      "A restored railway-arch quarter beside Borough Market, repositioned into a retail, dining, and workspace destination.",
  },
  {
    name: "Corti Segreti & Corso Buenos Aires 59",
    location: "Milan, Italy",
    tag: "Retail",
    description:
      "Two prime Milan retail assets repositioned for the city's high-street and courtyard retail circuits.",
  },
  {
    name: "Pershing Hall",
    location: "Paris, France",
    tag: "Hospitality",
    description:
      "A landmark Champs-Élysées-adjacent hospitality asset repositioned within MARK's Paris portfolio.",
  },
  {
    name: "Richardstrasse 20",
    location: "Berlin, Germany",
    tag: "Residential",
    description:
      "A German residential acquisition extending MARK's footprint into the Berlin housing market.",
  },
  {
    name: "Grafton Place & 60 Dawson Street",
    location: "Dublin, Ireland",
    tag: "Mixed-use",
    description:
      "Prime Dublin city-centre assets combining retail and office accommodation in the capital's core.",
  },
  {
    name: "Bond Street House",
    location: "London, UK",
    tag: "Retail",
    description:
      "A prime West End retail and office asset on one of London's most prestigious shopping streets.",
  },
  {
    name: "Promenaden",
    location: "Oslo, Norway",
    tag: "Retail",
    description:
      "Oslo's premier luxury retail district, redeveloped into a destination now home to nine of the world's ten most valuable luxury brands.",
  },
];

export const proofStats = [
  { value: "€1.6bn", label: "Crossbay Fund I sale, 2022" },
  { value: "€660m", label: "Crossbay II fund raise" },
  { value: "190+", label: "Assets transacted by Crossbay across 8 countries" },
];

export type Insight = {
  tag: "MARK NEWS" | "PRESS RELEASE";
  title: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
};

export const insights: Insight[] = [
  {
    tag: "MARK NEWS",
    title:
      "MARK's senior leadership team interviewed by PERE on asset granularity as a returns driver in Crossbay's urban logistics strategy",
    date: "2026",
    image: "/images/insights/pere-leadership-interview.jpg",
    href: "https://thisismark.com/marks-senior-leadership-team-was-interviewed-by-pere-on-how-asset-granularity-is-a-key-returns-driver-in-crossbays-urban-logistics-strategy/",
  },
  {
    tag: "PRESS RELEASE",
    title: "Crossbay secures one of West Yorkshire's largest logistics leases of 2025",
    date: "2025",
    image: "/images/insights/west-yorkshire-lease.jpg",
    href: "https://thisismark.com/crossbay-secures-one-of-west-yorkshires-largest-logistics-leases-of-2025/",
  },
  {
    tag: "MARK NEWS",
    title: "MARK Capital Management wins PERE “Logistics Investor of the Year”",
    date: "28 February 2025",
    image: "/images/insights/pere-logistics-investor.jpg",
    href: "https://thisismark.com/mark-capital-management-wins-pere-logistics-investor-of-the-year/",
    featured: true,
  },
  {
    tag: "PRESS RELEASE",
    title: "MARK appoints new Head of Asset Management for Crossbay",
    date: "2025",
    image: "/images/insights/head-of-asset-management.jpg",
    href: "https://thisismark.com/mark-appoints-new-head-of-asset-management-for-crossbay/",
  },
  {
    tag: "PRESS RELEASE",
    title: "MARK strengthens Crossbay and Client Solutions team with two new hires",
    date: "2025",
    image: "/images/insights/two-new-hires.jpg",
    href: "https://thisismark.com/mark-strengthens-crossbay-and-client-solutions-team-with-two-new-hires/",
  },
  {
    tag: "PRESS RELEASE",
    title:
      "Crossbay expands French portfolio to over 150,000 sqm following a sale-and-leaseback",
    date: "2025",
    image: "/images/insights/french-portfolio.jpg",
    href: "https://thisismark.com/crossbay-expands-french-portfolio-to-over-150000-sqm-following-portfolio-sale-and-leaseback/",
  },
  {
    tag: "PRESS RELEASE",
    title: "Crossbay and Kryalos acquire a last-mile logistics asset in Fiumicino",
    date: "2024",
    image: "/images/insights/fiumicino.jpg",
    href: "https://thisismark.com/kryalos-sgrs-bay-fund-acquires-a-last-mile-logistics-asset-in-fiumicino/",
  },
  {
    tag: "PRESS RELEASE",
    title: "Assembly and Eternam to deliver office-to-PBSA conversions in western Paris",
    date: "2024",
    image: "/images/insights/paris-pbsa.jpg",
    href: "https://thisismark.com/assembly-and-eternam-to-deliver-office-to-pbsa-conversions-in-western-paris/",
  },
  {
    tag: "PRESS RELEASE",
    title: "World's oldest department store in Oslo sees a surge in tax-free sales",
    date: "2024",
    image: "/images/insights/oslo-department-store.jpg",
    href: "https://thisismark.com/worlds-oldest-department-store-in-oslo-experiences-surge-in-tax-free-sales/",
  },
];

export const enquiryTypes = [
  "Investor enquiry",
  "Press / media enquiry",
  "Career enquiry",
  "Contractor enquiry",
  "Supplier enquiry",
  "Report an issue",
  "General enquiry",
];

export type Office = {
  name: string;
  address: string;
  phone?: string;
  image: string;
};

export const offices: Office[] = [
  {
    name: "London (HQ)",
    address: "141 Wardour Street, London, W1F 0UT, UK",
    phone: "+44 (0) 207 355 8300",
    image: "/images/offices/london.jpg",
  },
  {
    name: "Paris",
    address: "79 Boulevard Malesherbes, 75008 Paris",
    phone: "+33 (0) 1 85 73 71 11",
    image: "/images/offices/paris.jpg",
  },
  {
    name: "Madrid",
    address: "Calle Alcalá 54, 4º izquierda, 28014 Madrid, Spain",
    image: "/images/offices/madrid.jpg",
  },
  {
    name: "Luxembourg",
    address: "12C Impasse Drosbach, L-1882 Luxembourg",
    phone: "+352 277 234 12",
    image: "/images/offices/luxembourg.jpg",
  },
  {
    name: "Frankfurt",
    address: "Goethestrasse 14, 60313 Frankfurt am Main",
    phone: "+49 69 80883470",
    image: "/images/offices/frankfurt.jpg",
  },
  {
    name: "Guernsey",
    address: "Oak House, Hirzel Street, St Peter Port, GY1 3RH",
    image: "/images/offices/guernsey.jpg",
  },
  {
    name: "Amsterdam",
    address: "J.J. Viottastraat 35, 1071 JP Amsterdam, Netherlands",
    image: "/images/offices/amsterdam.jpg",
  },
  {
    name: "Oslo",
    address: "Nedre Slottsgate 8, 0157 Oslo, Norway",
    image: "/images/offices/oslo.jpg",
  },
];

export const footerNav = [
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Verticals", href: "/#verticals" },
  { label: "Insights", href: "/news-insights" },
  { label: "Contact", href: "/contact" },
];
