export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Integrated Facility Management",
        href: "/services/integrated-facility-management",
        description: "Coordinated operational oversight & multi-service management",
      },
      {
        label: "FM Advisory & Consultancy",
        href: "/services/fm-advisory-consultancy",
        description: "Strategic assessments and operational framework development",
      },
      {
        label: "Operational Support",
        href: "/services/operational-support",
        description: "Structured workflows, coordination, & stakeholder liaison",
      },
      {
        label: "Safety & Compliance Support",
        href: "/services/safety-compliance",
        description: "Operational controls, documentation, & safety awareness",
      },
      {
        label: "Performance & Efficiency",
        href: "/services/performance-efficiency",
        description: "Process strengthening & facility resource optimization",
      },
      {
        label: "Sustainability & Value Enhancement",
        href: "/services/sustainability",
        description: "Resource efficiency & proactive asset preservation",
      },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      {
        label: "Clubs & Leisure Facilities",
        href: "/sectors/clubs-leisure",
        description: "Recreation centers, athletic facilities, & social clubs",
      },
      {
        label: "Parks & Public Spaces",
        href: "/sectors/parks-public-spaces",
        description: "Civic open spaces, plazas, & community landscapes",
      },
      {
        label: "Hospitals & Healthcare Facilities",
        href: "/sectors/healthcare",
        description: "High-reliability clinical & medical environments",
      },
      {
        label: "Industrial Establishments",
        href: "/sectors/industrial",
        description: "Warehouses, logistics parks, & manufacturing compounds",
      },
      {
        label: "Commercial Properties",
        href: "/sectors/commercial",
        description: "Office towers, business parks, & corporate properties",
      },
    ],
  },
  {
    label: "Our Approach",
    href: "/our-approach",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Integrated Facility Management", href: "/services/integrated-facility-management" },
    { label: "FM Advisory & Consultancy", href: "/services/fm-advisory-consultancy" },
    { label: "Operational Support", href: "/services/operational-support" },
    { label: "Safety & Compliance", href: "/services/safety-compliance" },
    { label: "Performance & Efficiency", href: "/services/performance-efficiency" },
    { label: "Sustainability", href: "/services/sustainability" },
  ],
  sectors: [
    { label: "Clubs & Leisure", href: "/sectors/clubs-leisure" },
    { label: "Parks & Public Spaces", href: "/sectors/parks-public-spaces" },
    { label: "Healthcare", href: "/sectors/healthcare" },
    { label: "Industrial", href: "/sectors/industrial" },
    { label: "Commercial", href: "/sectors/commercial" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
