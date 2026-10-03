export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroSubtitle: string;
  overview: string[];
  keyBenefits: string[];
  focusAreas: string[];
  operationalScope: string[];
  icon: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "integrated-facility-management",
    slug: "integrated-facility-management",
    title: "Integrated Facility Management",
    shortDescription:
      "Coordinated facility-management solutions focused on effective operations, service oversight, safety, efficiency, and facility performance.",
    heroSubtitle:
      "Unified operational oversight and structured coordination designed to keep modern facilities safe, reliable, and operating at peak performance.",
    overview: [
      "Blue Sphere provides a coordinated approach to facility management designed to support safe, efficient, and well-managed environments.",
      "Our focus is on bringing facility requirements, operational priorities, service coordination, performance monitoring, and management oversight together within a structured facility-management framework.",
      "The objective is to help clients maintain reliable facilities while allowing them to remain focused on their core business.",
    ],
    keyBenefits: [
      "Improved operational coordination across all facility processes",
      "Clearer facility-management structure and single-point accountability",
      "Greater management visibility into daily and strategic facility operations",
      "Better alignment with overall organizational and commercial objectives",
      "Disciplined focus on performance, safety standards, and continuous improvement",
    ],
    focusAreas: [
      "Operational framework design and execution",
      "Multi-service interface coordination",
      "Day-to-day facility workflow administration",
      "Performance governance and SLA tracking",
      "Stakeholder communication and reporting structures",
    ],
    operationalScope: [
      "Facility lifecycle oversight",
      "Routine operational coordination",
      "Service partner synchronization",
      "Standard operating procedure enforcement",
    ],
    icon: "Building",
    featuredImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Integrated Facility Management | Blue Sphere Dubai",
    metaDescription:
      "Comprehensive integrated facility management solutions in Dubai. Coordinated operations, service oversight, and high-performance facility environments.",
  },
  {
    id: "fm-advisory-consultancy",
    slug: "fm-advisory-consultancy",
    title: "FM Advisory & Consultancy",
    shortDescription:
      "Professional guidance to help organizations evaluate requirements, establish priorities, and develop practical facility-management strategies.",
    heroSubtitle:
      "Strategic advisory and objective operational evaluations to help leadership optimize facility investments and operational structures.",
    overview: [
      "Effective facility management starts with the right strategy.",
      "Blue Sphere provides professional advisory support to help organizations understand facility requirements, identify operational priorities, evaluate existing practices, and develop appropriate facility-management strategies.",
      "Our advisory team assists corporations, property owners, and institutional operators in creating resilient, scalable management blueprints that adapt to evolving business and regulatory landscapes in Dubai and the wider UAE.",
    ],
    keyBenefits: [
      "Clarity on operational gaps and efficiency opportunities",
      "Strategic alignment of facility investments with organizational goals",
      "Objective assessment of facility requirements and operational models",
      "Clear roadmaps for process optimization and management readiness",
      "Informed decision-making grounded in practical UAE operational realities",
    ],
    focusAreas: [
      "Facility-management strategy",
      "Operational review",
      "Facility requirements assessment",
      "Process improvement",
      "Management planning",
      "Performance frameworks",
      "Compliance considerations",
      "Efficiency opportunities",
    ],
    operationalScope: [
      "Strategic management reviews",
      "Operational health checks",
      "Resource allocation advisory",
      "Procurement and service level scoping",
    ],
    icon: "Briefcase",
    featuredImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Facility Management Advisory & Consultancy | Blue Sphere Dubai",
    metaDescription:
      "Professional facility management advisory and consultancy in Dubai. Strategic operational reviews, management planning, and practical performance frameworks.",
  },
  {
    id: "operational-support",
    slug: "operational-support",
    title: "Operational Support",
    shortDescription:
      "Structured support for facility processes, service coordination, operational requirements, and communication between stakeholders.",
    heroSubtitle:
      "Hands-on operational coordination that bridges strategy and daily execution across complex facility environments.",
    overview: [
      "Reliable facility operations depend upon structured processes and effective coordination.",
      "Blue Sphere supports clients in organizing facility activities, coordinating operational requirements, strengthening processes, and maintaining effective communication between relevant stakeholders.",
      "By establishing clear operational workflows and structured touchpoints, we ensure that facilities operate smoothly without unnecessary disruptions.",
    ],
    keyBenefits: [
      "Streamlined coordination among internal departments and external service providers",
      "Consistent execution of established standard operating procedures",
      "Reduced operational friction and rapid escalation resolution",
      "Enhanced transparent communication across all operational tiers",
      "Continuous supervision of service deliverables and expectations",
    ],
    focusAreas: [
      "Operational coordination",
      "Process organization",
      "Service requirement management",
      "Communication support",
      "Operational planning",
      "Performance oversight",
      "Continuous improvement",
    ],
    operationalScope: [
      "Stakeholder liaison and coordination",
      "Task tracking and operational schedules",
      "Daily procedural governance",
      "Operational reporting channels",
    ],
    icon: "Layers",
    featuredImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Facility Operational Support Services | Blue Sphere Dubai",
    metaDescription:
      "Structured facility operational support in Dubai. Process organization, stakeholder communication, and rigorous service coordination for better operations.",
  },
  {
    id: "safety-compliance",
    slug: "safety-compliance",
    title: "Safety & Compliance Support",
    shortDescription:
      "Supporting organized approaches to facility safety, operational controls, documentation, and relevant compliance requirements.",
    heroSubtitle:
      "Embedding rigorous safety awareness and structured operational controls to protect occupants, assets, and organizational reputation.",
    overview: [
      "Safe and compliant facilities protect people, organizations, and assets.",
      "Blue Sphere places strong emphasis on supporting organized facility procedures, operational controls, documentation, safety awareness, and appropriate compliance considerations.",
      "We help client organizations establish disciplined internal frameworks that promote safety mindfulness and ensure operational controls are systematically maintained.",
    ],
    keyBenefits: [
      "Heightened safety culture across operational personnel and occupants",
      "Structured documentation trails for operational and procedural records",
      "Consistent application of facility safety controls and operational procedures",
      "Identification of potential physical and operational safety hazards",
      "Confidence that facility practices reflect responsible operational standards",
    ],
    focusAreas: [
      "Facility safety procedural support",
      "Operational control frameworks",
      "Documentation and audit readiness support",
      "Safety awareness initiatives",
      "Relevant operational compliance tracking",
      "Hazard identification support",
    ],
    operationalScope: [
      "Procedural reviews and documentation systems",
      "Operational safety checklists",
      "Incident documentation protocols",
      "Routine safety control monitoring",
    ],
    icon: "ShieldAlert",
    featuredImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Safety & Regulatory Compliance Support | Blue Sphere Dubai",
    metaDescription:
      "Supporting disciplined facility safety, operational controls, documentation, and compliance readiness in Dubai and the UAE.",
  },
  {
    id: "performance-efficiency",
    slug: "performance-efficiency",
    title: "Facility Performance & Efficiency",
    shortDescription:
      "Identifying opportunities to strengthen facility processes, improve coordination, and increase operational effectiveness.",
    heroSubtitle:
      "Data-driven operational optimization designed to reduce friction, minimize resource waste, and elevate facility productivity.",
    overview: [
      "Facility management should contribute directly to organizational performance.",
      "Blue Sphere focuses on identifying opportunities to strengthen operational processes, improve service coordination, reduce inefficiencies, and enhance facility-resource utilization.",
      "Our methodologies diagnose operational bottlenecks and recommend targeted structural enhancements that maximize the output of facility teams and systems.",
    ],
    keyBenefits: [
      "Elimination of redundant operational procedures and administrative delays",
      "Optimized resource allocation and service provider scheduling",
      "Enhanced response times and issue turnaround across facility workflows",
      "Objective performance tracking and KPI clarity for leadership",
      "Measurable improvements in daily operational effectiveness",
    ],
    focusAreas: [
      "Operational efficiency",
      "Process improvement",
      "Facility performance",
      "Service coordination",
      "Resource optimization",
      "Performance monitoring",
    ],
    operationalScope: [
      "Workflow bottleneck diagnostics",
      "Resource utilization assessments",
      "Service performance metric formulation",
      "Operational productivity enhancement",
    ],
    icon: "Gauge",
    featuredImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Facility Performance & Operational Efficiency | Blue Sphere",
    metaDescription:
      "Optimize facility productivity and operational efficiency in Dubai. Process strengthening, resource optimization, and rigorous performance monitoring.",
  },
  {
    id: "sustainability",
    slug: "sustainability",
    title: "Sustainability & Value Enhancement",
    shortDescription:
      "Supporting resource efficiency, responsible facility practices, asset preservation, and sustainable long-term facility performance.",
    heroSubtitle:
      "Responsible stewardship practices that extend physical asset lifecycles and promote environmental responsibility across the built environment.",
    overview: [
      "Responsible facility management considers both current operational needs and long-term facility performance.",
      "Blue Sphere supports practical approaches to resource efficiency, operational optimization, facility preservation, sustainable operational practices, long-term facility performance, and facility value enhancement.",
      "We believe sustainable operations are not an afterthought, but an integral component of protecting asset longevity and reducing lifecycle ownership costs.",
    ],
    keyBenefits: [
      "Prudent resource consumption patterns that reduce operational waste",
      "Extended service life of facility infrastructure through proactive care",
      "Enhanced long-term commercial valuation of managed properties",
      "Alignment with modern corporate ESG principles and UAE green initiatives",
      "Responsible operational practices that benefit the wider community",
    ],
    focusAreas: [
      "Resource efficiency",
      "Operational optimization",
      "Facility preservation",
      "Sustainable operational practices",
      "Long-term facility performance",
      "Facility value enhancement",
    ],
    operationalScope: [
      "Responsible resource utilization plans",
      "Preventive asset preservation approaches",
      "Waste minimization procedural support",
      "Sustainable operational guidelines",
    ],
    icon: "Leaf",
    featuredImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Facility Sustainability & Value Enhancement | Blue Sphere",
    metaDescription:
      "Sustainable facility management and asset value enhancement in Dubai. Resource efficiency, asset preservation, and responsible operational stewardship.",
  },
];
