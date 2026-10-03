export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  legalType: string;
  address: {
    building: string;
    hub: string;
    area: string;
    emirate: string;
    country: string;
    fullFormatted: string;
    mapsEmbedUrl: string;
    directionsUrl: string;
  };
  contact: {
    telephone: string;
    telephoneRaw: string;
    email: string;
    domain: string;
    websiteUrl: string;
    whatsappUrl: string;
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
  };
  mission: string;
  vision: string;
  coreValues: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  whyChooseUs: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  methodologySteps: Array<{
    step: string;
    title: string;
    shortDesc: string;
    detailDesc: string;
    keyDeliverables: string[];
    icon: string;
  }>;
  futureServices: string[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "BLUE SPHERE FACILITIES MANAGEMENT – FZCO",
  shortName: "BLUE SPHERE",
  tagline: "Professional Facilities. Smarter Operations. Lasting Value.",
  legalType: "FZCO (Free Zone Company)",
  address: {
    building: "Building A1",
    hub: "Dubai Digital Park",
    area: "Dubai Silicon Oasis",
    emirate: "Dubai",
    country: "United Arab Emirates",
    fullFormatted: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.923835694291!2d55.3789498!3d25.1213454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f64790100435b%3A0x6b8723fcad599d14!2sDubai%20Digital%20Park!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    directionsUrl: "https://maps.google.com/?q=Dubai+Digital+Park+Building+A1+Dubai+Silicon+Oasis",
  },
  contact: {
    telephone: "+971 50 743 7972",
    telephoneRaw: "+971507437972",
    email: "info@bluespherefzco.com",
    domain: "bluespherefzco.com",
    websiteUrl: "https://bluespherefzco.com",
    whatsappUrl: "https://wa.me/971507437972?text=Hello%20Blue%20Sphere%2C%20I%20would%20like%20to%20discuss%20a%20facility%20management%20requirement.",
    whatsappDisplay: "+971 50 743 7972",
    whatsappDefaultMessage: "Hello Blue Sphere, I would like to discuss a facility management requirement.",
  },
  mission:
    "To provide professional advice, comprehensive facility management, and operational support to a diverse range of facilities, including clubs, parks, hospitals, industrial establishments, and commercial properties. We are committed to ensuring operational excellence, safety, efficiency, and regulatory compliance while enhancing the value and performance of the facilities entrusted to us.",
  vision:
    "To be a trusted and leading provider of facility management and advisory services, recognized for excellence, innovation, and integrity in managing diverse facilities, creating sustainable environments, and delivering exceptional value to our clients and the communities we serve.",
  coreValues: [
    {
      id: "excellence",
      title: "Excellence",
      description:
        "We pursue high standards across facility management, operational support, and client service.",
    },
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We believe in responsible, transparent, and professional business practices that build long-term trust.",
    },
    {
      id: "safety",
      title: "Safety",
      description:
        "The safety of people, facilities, and operations remains central to our approach.",
    },
    {
      id: "efficiency",
      title: "Efficiency",
      description:
        "We focus on practical solutions that improve operational effectiveness and responsible resource utilization.",
    },
    {
      id: "compliance",
      title: "Compliance",
      description:
        "We recognize the importance of maintaining facilities in accordance with relevant operational and regulatory requirements.",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      description:
        "We support approaches designed to improve resource efficiency, asset performance, and long-term environmental responsibility.",
    },
    {
      id: "client-focus",
      title: "Client Focus",
      description:
        "Every facility has different priorities. We begin by understanding each client's requirements and operational objectives.",
    },
  ],
  whyChooseUs: [
    {
      id: "tailored-solutions",
      title: "Tailored Solutions",
      description:
        "Every facility has different requirements. Our approach is designed around the client's operational priorities.",
      icon: "Sliders",
    },
    {
      id: "operational-focus",
      title: "Operational Focus",
      description:
        "Solutions are developed with practical facility performance and day-to-day operations in mind.",
      icon: "Activity",
    },
    {
      id: "safety-conscious",
      title: "Safety Conscious",
      description:
        "Safety considerations remain central to effective facility-management planning and operations.",
      icon: "ShieldCheck",
    },
    {
      id: "compliance-awareness",
      title: "Compliance Awareness",
      description:
        "We recognize the importance of structured processes and relevant regulatory requirements.",
      icon: "FileCheck",
    },
    {
      id: "performance-driven",
      title: "Performance Driven",
      description:
        "Our approach focuses on improving efficiency, coordination, reliability, and long-term facility performance.",
      icon: "TrendingUp",
    },
    {
      id: "long-term-perspective",
      title: "Long-Term Perspective",
      description:
        "Facility decisions should protect both present operations and future facility value.",
      icon: "Building2",
    },
  ],
  methodologySteps: [
    {
      step: "01",
      title: "Discovery & Understanding",
      shortDesc: "Understand the facility, environment, operational requirements, priorities, and expectations.",
      detailDesc: "We begin by conducting an exhaustive review of your physical asset, operational dynamics, occupant profiles, vendor touchpoints, and organizational expectations. This foundational stage guarantees that our strategies reflect the true daily realities and strategic goals of your environment.",
      keyDeliverables: [
        "Stakeholder priority alignment",
        "Operational boundary mapping",
        "Initial facility baseline assessment"
      ],
      icon: "Compass",
    },
    {
      step: "02",
      title: "Facility Assessment",
      shortDesc: "Review operational requirements and identify risks, priorities, inefficiencies, and improvement opportunities.",
      detailDesc: "A rigorous examination of facility processes, asset conditions, compliance frameworks, and workflow friction points. We evaluate where operational gaps exist and identify immediate and long-range enhancement opportunities.",
      keyDeliverables: [
        "Risk and vulnerability identification",
        "Operational workflow gap analysis",
        "Resource utilization review"
      ],
      icon: "SearchCheck",
    },
    {
      step: "03",
      title: "Strategy & Planning",
      shortDesc: "Develop an appropriate management and operational support approach.",
      detailDesc: "Based on empirical assessment findings, we formulate tailored facility-management frameworks, operational protocols, communication channels, and governance structures designed for sustained reliability.",
      keyDeliverables: [
        "Structured facility operational plan",
        "Governance and accountability models",
        "Service coordination standards"
      ],
      icon: "FileText",
    },
    {
      step: "04",
      title: "Mobilization & Implementation",
      shortDesc: "Support structured execution with clearly defined priorities and coordination.",
      detailDesc: "Seamless transition into structured operational support. We implement clear procedures, establish rigorous coordination protocols, and align all operational stakeholders with the established standards.",
      keyDeliverables: [
        "Structured stakeholder onboarding",
        "Clear operational procedures deployment",
        "Active service alignment"
      ],
      icon: "Layers",
    },
    {
      step: "05",
      title: "Performance Monitoring",
      shortDesc: "Observe performance and identify areas requiring attention or improvement.",
      detailDesc: "Systematic oversight across facility workflows, vendor coordination, and adherence to safety and compliance guidelines. We provide leadership with clear operational visibility.",
      keyDeliverables: [
        "Regular operational reviews",
        "Service delivery oversight",
        "Compliance checkpoint audits"
      ],
      icon: "Eye",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      shortDesc: "Continuously pursue better safety, efficiency, reliability, sustainability, and facility value.",
      detailDesc: "Facility management is a dynamic discipline. We refine processes, optimize resource use, and introduce ongoing operational efficiencies to protect and enhance facility value over time.",
      keyDeliverables: [
        "Ongoing process optimization",
        "Lifecycle value enhancement recommendations",
        "Periodic strategic reviews"
      ],
      icon: "RefreshCw",
    },
  ],
  /* Future services architecture preserved cleanly for future enablement */
  futureServices: [
    "Technical Operations & Maintenance",
    "MEP Coordination",
    "Cleaning & Soft Services",
    "Energy Management",
    "Landscaping",
    "Security Coordination",
    "Project Management",
    "Fit-Out Support",
    "Asset Management",
    "Vendor Management",
  ],
};
