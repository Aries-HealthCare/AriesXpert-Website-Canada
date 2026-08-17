/**
 * Canadian Health Insurance & Direct Billing Data
 */

export interface InsuranceProvider {
  name: string;
  code: string;
  directBillingSupported: boolean;
  notes: string;
}

export const CANADIAN_INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    name: "Sun Life Financial",
    code: "sunlife",
    directBillingSupported: true,
    notes: "Direct billing via eClaims platform for eligible group and individual health benefit plans.",
  },
  {
    name: "Manulife Financial",
    code: "manulife",
    directBillingSupported: true,
    notes: "Instant claim submission and direct billing via provider portal.",
  },
  {
    name: "Canada Life (Great-West Life)",
    code: "canadalife",
    directBillingSupported: true,
    notes: "Supported for electronic claim processing across all Canadian provinces.",
  },
  {
    name: "Green Shield Canada (GSC)",
    code: "greenshield",
    directBillingSupported: true,
    notes: "Real-time eligibility checks and direct digital adjudication.",
  },
  {
    name: "Desjardins Insurance",
    code: "desjardins",
    directBillingSupported: true,
    notes: "Direct billing support available for covered policyholders.",
  },
  {
    name: "Blue Cross (Pacific / Alberta / Medavie / Ontario)",
    code: "bluecross",
    directBillingSupported: true,
    notes: "Accepted across provincial networks for registered physiotherapy.",
  },
  {
    name: "ClaimSecure",
    code: "claimsecure",
    directBillingSupported: true,
    notes: "Instant electronic claim submission supported.",
  },
  {
    name: "Industrial Alliance (iA Financial Group)",
    code: "ia",
    directBillingSupported: true,
    notes: "Supported via TELUS Health eClaims portal.",
  },
  {
    name: "Motor Vehicle Accident (MVA) / Auto Claims",
    code: "mva",
    directBillingSupported: true,
    notes: "Rehabilitation plans coordinated with your automobile insurer post-accident.",
  },
  {
    name: "Workers' Safety / Compensation (WSIB / WorkSafeBC / WCB)",
    code: "workers_comp",
    directBillingSupported: true,
    notes: "Workplace injury physical rehabilitation support.",
  },
  {
    name: "Self-Pay / Extended Health Reimbursement",
    code: "selfpay",
    directBillingSupported: false,
    notes: "Itemized official medical invoices provided for personal tax deduction or manual insurance submission.",
  }
];

export const CANADIAN_PRICING_GUIDE = {
  currency: "CAD",
  initialAssessment: {
    title: "Initial Comprehensive Movement & Clinical Assessment",
    duration: "60 minutes",
    clinicPriceRange: "$120 – $155",
    homeVisitPriceRange: "$150 – $195",
    virtualPriceRange: "$95 – $125",
    description: "Detailed biomechanical evaluation, range of motion analysis, clinical diagnosis, personalized rehabilitation plan, and initial treatment.",
  },
  followUpSession: {
    title: "Subsequent Physiotherapy & Rehabilitation Session",
    duration: "45–60 minutes",
    clinicPriceRange: "$95 – $130",
    homeVisitPriceRange: "$125 – $165",
    virtualPriceRange: "$75 – $105",
    description: "Hands-on manual therapy, targeted therapeutic exercise progression, modality application, and functional tracking.",
  },
  recoveryPackages: [
    {
      name: "Focused Recovery (5 Sessions)",
      savingsNote: "Ideal for acute muscle strains, joint sprains, or early postural correction.",
    },
    {
      name: "Comprehensive Rehabilitation (10 Sessions)",
      savingsNote: "Recommended for post-surgical recovery (TKR, THR, ACL) or persistent back/neck pain.",
    },
    {
      name: "Neuro & Long-Term Mobility (15+ Sessions)",
      savingsNote: "Intensive functional re-education for stroke recovery, Parkinson's, or complex multi-joint conditions.",
    }
  ]
};
