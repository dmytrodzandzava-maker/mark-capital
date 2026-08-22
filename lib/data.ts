export const SUPPORTING_LINE =
  "An independent real estate investment and asset manager, managing private real estate across Europe since 2004.";

export const navLinks = [
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "Team", href: "/#team" },
  { label: "Impact", href: "/#impact" },
  { label: "Verticals", href: "/#verticals" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Insights", href: "/#insights" },
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
  name: string;
  title: string;
  location: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Marcus Meijer",
    title: "Managing Partner & Chief Executive Officer",
    location: "London",
    image: "/images/team/marcus-meijer.jpg",
  },
  {
    name: "Philippe Bidaud",
    title: "Managing Partner & Chief Operating Officer",
    location: "Paris",
    image: "/images/team/philippe-bidaud.jpg",
  },
  {
    name: "Marco Riva",
    title: "Partner & CEO, Crossbay",
    location: "London",
    image: "/images/team/marco-riva.jpg",
  },
  {
    name: "Michelle Doran",
    title: "Senior Managing Director, Head of Client Solutions",
    location: "London",
    image: "/images/team/michelle-doran.jpg",
  },
  {
    name: "Matthew Armitage",
    title: "Chief Financial Officer",
    location: "London",
    image: "/images/team/matthew-armitage.jpg",
  },
  {
    name: "Matthew Ammirati",
    title: "Chief Marketing Officer",
    location: "New York",
    image: "/images/team/matthew-ammirati.jpg",
  },
  {
    name: "Nitin Aggarwal",
    title: "Chief Technology Officer",
    location: "London",
    image: "/images/team/nitin-aggarwal.jpg",
  },
  {
    name: "Eric van Duren",
    title: "Senior Managing Director",
    location: "London",
    image: "/images/team/eric-van-duren.jpg",
  },
  {
    name: "Nick Russell",
    title: "Managing Director, General Counsel",
    location: "London",
    image: "/images/team/nick-russell.jpg",
  },
  {
    name: "Jonathan Buchanan",
    title: "Board Director",
    location: "Guernsey",
    image: "/images/team/jonathan-buchanan.jpg",
  },
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
};

export const insights: Insight[] = [
  {
    tag: "MARK NEWS",
    title:
      "MARK's senior leadership team interviewed by PERE on asset granularity as a returns driver in Crossbay's urban logistics strategy",
    date: "2026",
  },
  {
    tag: "PRESS RELEASE",
    title: "Crossbay secures one of West Yorkshire's largest logistics leases of 2025",
    date: "2025",
  },
  {
    tag: "MARK NEWS",
    title: "MARK Capital Management wins PERE “Logistics Investor of the Year”",
    date: "2025",
  },
  {
    tag: "PRESS RELEASE",
    title: "MARK appoints new Head of Asset Management for Crossbay",
    date: "2025",
  },
  {
    tag: "PRESS RELEASE",
    title: "MARK strengthens Crossbay and Client Solutions team with two new hires",
    date: "2025",
  },
  {
    tag: "PRESS RELEASE",
    title:
      "Crossbay expands French portfolio to over 150,000 sqm following a sale-and-leaseback",
    date: "2025",
  },
  {
    tag: "PRESS RELEASE",
    title: "Crossbay and Kryalos acquire a last-mile logistics asset in Fiumicino",
    date: "2024",
  },
  {
    tag: "PRESS RELEASE",
    title: "Assembly and Eternam to deliver office-to-PBSA conversions in western Paris",
    date: "2024",
  },
  {
    tag: "PRESS RELEASE",
    title: "World's oldest department store in Oslo sees a surge in tax-free sales",
    date: "2024",
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
};

export const offices: Office[] = [
  { name: "London (HQ)", address: "141 Wardour Street, London, W1F 0UT, UK", phone: "+44 (0) 207 355 8300" },
  { name: "Paris", address: "79 Boulevard Malesherbes, 75008 Paris", phone: "+33 (0) 1 85 73 71 11" },
  { name: "Madrid", address: "Calle Alcalá 54, 4º izquierda, 28014 Madrid, Spain" },
  { name: "Luxembourg", address: "12C Impasse Drosbach, L-1882 Luxembourg", phone: "+352 277 234 12" },
  { name: "Frankfurt", address: "Goethestrasse 14, 60313 Frankfurt am Main", phone: "+49 69 80883470" },
  { name: "Guernsey", address: "Oak House, Hirzel Street, St Peter Port, GY1 3RH" },
  { name: "Amsterdam", address: "J.J. Viottastraat 35, 1071 JP Amsterdam, Netherlands" },
  { name: "Oslo", address: "Nedre Slottsgate 8, 0157 Oslo, Norway" },
];

export const footerNav = [
  { label: "About Us", href: "/#who-we-are" },
  { label: "Team", href: "/#team" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Verticals", href: "/#verticals" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];
