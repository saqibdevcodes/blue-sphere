import { COMPANY_INFO } from "@/data/company";

export interface FAQItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    q: "What services does Blue Sphere provide?",
    a: "Blue Sphere provides comprehensive facility management solutions including Integrated Facility Management, FM Advisory & Strategic Consultancy, Day-to-Day Operational Support, Safety & Compliance Oversight, Performance & Resource Optimization, and Sustainability & Lifecycle Asset Preservation.",
  },
  {
    q: "Which sectors and property types do you support across the UAE?",
    a: "We support diverse sectors including Commercial Office Towers & Business Parks, Industrial Compounds & Logistics Hubs, Hospitals & Healthcare Environments, Clubs & Leisure Facilities, and Parks & Public Open Spaces across Dubai and the wider UAE.",
  },
  {
    q: "Are Blue Sphere's operational practices compliant with Dubai municipal regulations?",
    a: "Yes. Blue Sphere is a registered Free Zone Company (FZCO) operating from Dubai Silicon Oasis, strictly adhering to UAE federal codes, Dubai Municipality standards, Civil Defense safety mandates, and international FM best practices.",
  },
  {
    q: "How does the onboarding and facility assessment process work?",
    a: "We follow a structured 6-stage methodology: Discovery & Initial Consultation, Detailed On-Site Assessment, Strategic FM Proposal, Execution & Transition, Active Operational Governance, and Continuous Performance Review.",
  },
  {
    q: "How can we request a consultation or operational review?",
    a: `You can reach out directly via our contact form, call our team at ${COMPANY_INFO.contact.telephone}, or email us at ${COMPANY_INFO.contact.email}. Our directors will arrange an initial review meeting to discuss your facility priorities.`,
  },
];
