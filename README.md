# BLUE SPHERE FACILITIES MANAGEMENT – FZCO
### Official Corporate Website Platform

This repository contains the complete, production-ready corporate website for **BLUE SPHERE FACILITIES MANAGEMENT – FZCO**, a Dubai-based facilities management and advisory company operating from Dubai Digital Park, Dubai Silicon Oasis, United Arab Emirates.

---

## 🏛️ Verified Corporate Profile

- **Official Entity:** BLUE SPHERE FACILITIES MANAGEMENT – FZCO
- **Corporate Headquarters:** Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
- **Telephone:** `+971 50 743 7972`
- **Official Inquiries:** `info@bluespherefzco.com`
- **Domain:** `bluespherefzco.com`
- **Jurisdiction:** Dubai, United Arab Emirates

---

## 🛠️ Technology Stack & Architecture

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with tailored corporate tokens (Navy `#071D35`, Corporate Blue `#0B5EA8`, Bright Accent `#1A8FE3`, Light Tint `#F2F8FC`)
- **Typography:** `Plus Jakarta Sans` via `next/font/google`
- **Iconography:** `lucide-react`
- **Structured Data:** Schema.org JSON-LD (`Organization`, `ProfessionalService`)
- **Rendering:** Static Site Generation (SSG) with dynamic metadata and pre-rendered routes for high-performance SEO.

---

## 🧭 Site Route Hierarchy

```
/                                   -> Homepage (Hero, Who We Are, Services, Sectors, Why Us, 6-Step Approach, Mission & Vision, CTAs)
/about                              -> Corporate Profile, Mission, Vision, 7 Core Values, UAE Operational Governance
/services                           -> Core Services Overview
/services/integrated-facility-management
/services/fm-advisory-consultancy
/services/operational-support
/services/safety-compliance
/services/performance-efficiency
/services/sustainability
/sectors                            -> Sectors Served Overview
/sectors/clubs-leisure
/sectors/parks-public-spaces
/sectors/healthcare
/sectors/industrial
/sectors/commercial
/our-approach                       -> Complete 6-Step Operational Methodology
/contact                            -> Contact Form, Dubai Silicon Oasis Map, Direct Lines, WhatsApp action
/careers                            -> Talent Registration Pathway
/privacy-policy                     -> Corporate Privacy Policy (Starter draft pending counsel review)
/terms-and-conditions               -> Website Terms & Conditions (Starter draft pending counsel review)
/sitemap.xml                        -> Dynamic XML Sitemap
/robots.txt                         -> Search Engine Crawler Directives
```

---

## 📂 Centralized Structured Configuration

All company details, contact channels, service offerings, sectors, and navigation structures are stored in central configuration files to allow seamless edits prior to production deployment:

- `src/data/company.ts`: Company name, address, telephone, email, domain, mission, vision, values, 6-step approach.
- `src/data/services.ts`: Confirmed services, descriptions, benefits, and focus areas.
- `src/data/sectors.ts`: Confirmed sectors, operational considerations, and environmental standards.
- `src/data/navigation.ts`: Main navigation, submenus, and footer link architecture.

---

## 🚀 Local Development & Production Build

### Prerequisites
- Node.js (v20.x LTS or higher)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build & Static Validation
```bash
npm run build
npm run start
```

---

## 🛡️ Brand & Content Governance Rules

In compliance with corporate charter instructions:
1. **No Fabricated Counters:** No false metrics ("500+ Clients", "20+ Years", "1000+ Employees") are displayed. Credibility is established through professional positioning, operational clarity, and verified corporate information.
2. **Replaceable Wordmark:** The logo in `src/components/brand/Logo.tsx` is isolated into distinct components (`SphereMark` and `Logo`) to allow immediate swapping when the official registered logo asset is supplied.
3. **Legal Disclaimer:** Legal texts in `/privacy-policy` and `/terms-and-conditions` are foundational starter templates and should be formally reviewed by UAE legal counsel prior to commercial deployment.
