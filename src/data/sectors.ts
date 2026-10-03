export interface SectorItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  oneSentenceDesc: string;
  overview: string[];
  operationalPriorities: string[];
  keyConsiderations: string[];
  focusAreas: string[];
  image: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
}

export const SECTORS_DATA: SectorItem[] = [
  {
    id: "clubs-leisure",
    slug: "clubs-leisure",
    name: "Clubs & Leisure Facilities",
    tagline: "Enhancing Member Experiences Through Flawless Facility Presentation",
    oneSentenceDesc:
      "Supporting welcoming, safe, functional, and efficiently managed environments for members, visitors, staff, and operators.",
    overview: [
      "Clubs, athletic complexes, recreational centers, and private leisure facilities represent dynamic environments where member satisfaction, safety, aesthetic presentation, and operational continuity are closely intertwined.",
      "Blue Sphere provides tailored operational support and facility management designed to uphold the highest standards of presentation and functionality across indoor and outdoor leisure spaces.",
      "Our solutions respect the unique scheduling demands of hospitality and membership organizations, ensuring behind-the-scenes operational coordination never interrupts the guest or member journey.",
    ],
    operationalPriorities: [
      "Pristine amenity presentation and rigorous hygiene oversight",
      "Crowd movement and patron safety coordination during peak visitation",
      "Coordination of specialized recreational equipment maintenance schedules",
      "Event preparation and rapid turnaround support",
      "Proactive environmental and thermal comfort management",
    ],
    keyConsiderations: [
      "Discreet operational presence during member hours",
      "Vigilant safety protocols around recreational and aquatic amenities",
      "Coordination with hospitality, catering, and guest-service personnel",
      "Preservation of premium fixtures, flooring, and specialized surfaces",
    ],
    focusAreas: [
      "Recreational amenities management",
      "Member-focused facility coordination",
      "Operational scheduling and event support",
      "Safety and presentation standards",
    ],
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Facility Management for Clubs & Leisure Facilities | Blue Sphere",
    metaDescription:
      "Tailored facility management and operational support for clubs, sports complexes, and leisure facilities in Dubai and the UAE.",
  },
  {
    id: "parks-public-spaces",
    slug: "parks-public-spaces",
    name: "Parks & Public Spaces",
    tagline: "Stewardship of Community Assets and Vibrant Outdoor Environments",
    oneSentenceDesc:
      "Supporting the effective management of outdoor and community environments with consideration for safety, presentation, functionality, resource management, and operational coordination.",
    overview: [
      "Public parks, community plazas, botanical environments, and civic open spaces require dedicated management practices that balance heavy public traffic with natural resource conservation.",
      "Blue Sphere brings structured oversight to community environments, focusing on visitor safety, pristine visual presentation, efficient water and irrigation stewardship, and coordinated operational workflows.",
      "Our operational approach safeguards public assets while cultivating pleasant, accessible, and sustainably maintained surroundings for residents and visitors alike.",
    ],
    operationalPriorities: [
      "Public safety oversight across walkways, recreational zones, and gathering spots",
      "Responsible water utilization and environmental resource stewardship",
      "Structured waste containment and public amenity cleanliness coordination",
      "Lighting, barrier, and community infrastructure integrity monitoring",
      "Seasonal weather adaptation and landscape operational coordination",
    ],
    keyConsiderations: [
      "Uncompromising public safety and accessibility considerations",
      "Protection of community landscaping and architectural hardscaping",
      "Multi-stakeholder coordination with municipal and community bodies",
      "Minimizing operational disruptions during peak public usage hours",
    ],
    focusAreas: [
      "Community infrastructure oversight",
      "Resource and water management coordination",
      "Public area safety and wayfinding standards",
      "Operational coordination for civic gatherings",
    ],
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Parks & Public Spaces Facility Management | Blue Sphere Dubai",
    metaDescription:
      "Professional operational management and stewardship for parks, civic plazas, and community open spaces across Dubai and the UAE.",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Hospitals & Healthcare Facilities",
    tagline: "Disciplined Operational Reliability Where Precision Matters Most",
    oneSentenceDesc:
      "Supporting environments where reliability, coordination, safety, cleanliness considerations, continuity, and compliance awareness are particularly important.",
    overview: [
      "Healthcare institutions, medical centers, clinics, and wellness facilities operate under critical conditions where facilities management must deliver uninterrupted reliability and meticulous hygiene awareness.",
      "Blue Sphere provides structured operational support designed to support clinical teams by ensuring underlying facility workflows, vendor coordination, clean environment protocols, and utility continuity run seamlessly.",
      "Note: Blue Sphere focuses strictly on facility management, operational controls, and administrative coordination without making medical or clinical claims.",
    ],
    operationalPriorities: [
      "Zero-downtime operational support for critical utility infrastructure",
      "Strict procedural compliance with healthcare hygiene protocols",
      "Clear separation of service circulation paths and patient transit corridors",
      "Rigorous documentation and audit readiness for facility operations",
      "Rapid-response operational communication protocols",
    ],
    keyConsiderations: [
      "Heightened infection-control awareness in facility support processes",
      "Continuity of power, clean water, and controlled climate conditions",
      "Stringent access control coordination and visitor wayfinding support",
      "Adherence to relevant health authority regulatory expectations",
    ],
    focusAreas: [
      "Healthcare facility operational coordination",
      "Critical infrastructure continuity support",
      "Hygiene and procedural documentation support",
      "Service provider synchronization in sensitive areas",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Healthcare & Hospital Facility Management Support | Blue Sphere",
    metaDescription:
      "Disciplined facility management support and operational reliability for hospitals, clinics, and medical centers in Dubai.",
  },
  {
    id: "industrial",
    slug: "industrial",
    name: "Industrial Establishments",
    tagline: "Robust Management for Demanding Operational and Logistics Assets",
    oneSentenceDesc:
      "Supporting complex operational environments where safety, reliability, facility performance, efficiency, and structured management are essential.",
    overview: [
      "Industrial complexes, logistics hubs, manufacturing compounds, and warehousing facilities demand a disciplined approach to facilities management that emphasizes physical safety, structural resilience, and high operational throughput.",
      "Blue Sphere supports industrial operators by implementing structured facility processes, enforcing stringent safety awareness, coordinating service logistics, and maintaining operational continuity across demanding facilities.",
      "Our solutions help industrial clients reduce unplanned downtime, maintain orderly compounds, and support operational safety at every tier.",
    ],
    operationalPriorities: [
      "Heavy-duty infrastructure resilience and structural condition monitoring",
      "Strict enforcement of industrial safety controls and personal protective standards",
      "Loading dock, vehicular logistics, and compound traffic circulation management",
      "Spill prevention, hazardous material storage procedural oversight",
      "High-bay lighting, power distribution, and ventilation monitoring coordination",
    ],
    keyConsiderations: [
      "Rigorous environmental and occupational safety considerations",
      "High asset utilization rates requiring flexible off-peak scheduling",
      "Large-scale physical footprints requiring zoned operational management",
      "Coordination with supply chain and distribution schedules",
    ],
    focusAreas: [
      "Industrial facility coordination",
      "Logistics and yard management support",
      "Occupational safety procedural alignment",
      "Compound infrastructure resilience",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Industrial Facility Management & Support | Blue Sphere Dubai",
    metaDescription:
      "Structured facility management and operational support for industrial parks, warehouses, and manufacturing complexes in the UAE.",
  },
  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial Properties",
    tagline: "Preserving Prestige and Optimizing Workplaces Across Dubai",
    oneSentenceDesc:
      "Supporting commercial environments with professional management practices designed to enhance operational efficiency, occupant experience, facility performance, and long-term property value.",
    overview: [
      "High-rise office towers, corporate headquarters, business parks, and mixed-use commercial developments define Dubai's skyline and demand world-class facility standards.",
      "Blue Sphere delivers comprehensive facility management and strategic advisory for commercial assets. We align daily operations with tenant satisfaction, energy consciousness, prestige preservation, and asset appreciation.",
      "From seamless reception and common-area coordination to intelligent building services oversight, we help property owners and corporate tenants maintain environments of uncompromising excellence.",
    ],
    operationalPriorities: [
      "Premium common-area and lobby presentation reflecting corporate prestige",
      "Tenant liaison, service coordination, and rapid inquiry response",
      "Energy conservation and sustainable indoor air quality optimization",
      "Vertical transportation and access control operational oversight",
      "Preventive asset care that protects long-term commercial property value",
    ],
    keyConsiderations: [
      "Delivering high occupant satisfaction for prestigious commercial tenants",
      "Coordination of third-party specialty contractors during non-business hours",
      "Adherence to Dubai Green Building Regulations and international best practices",
      "Clear financial and operational reporting for property owners and asset managers",
    ],
    focusAreas: [
      "Commercial office tower management",
      "Tenant experience and concierge coordination",
      "Corporate building systems synchronization",
      "Commercial asset value preservation",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Commercial Properties Facility Management | Blue Sphere Dubai",
    metaDescription:
      "Professional facility management for commercial office towers, business parks, and corporate buildings in Dubai Silicon Oasis and across the UAE.",
  },
];
