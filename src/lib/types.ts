export type BodyRegion = 
  | 'head'
  | 'neck'
  | 'shoulder'
  | 'elbow'
  | 'wrist'
  | 'spine'
  | 'hip'
  | 'knee'
  | 'ankle'
  | 'foot';

export type AnatomicalLayer = 'skeletal' | 'muscular' | 'articular' | 'nervous' | 'fascial';

export type CareFormat = 'in-clinic' | 'in-home' | 'virtual';

export interface Condition {
  id: string;
  name: string;
  slug: string;
  category: 'orthopedic' | 'sports' | 'neurological' | 'chronic-pain' | 'post-surgical' | 'geriatric' | 'pediatric' | 'womens-health' | 'vestibular' | 'tmj';
  bodyRegion: BodyRegion;
  shortDescription: string;
  whatIsIt: string;
  anatomyOverview: string;
  symptoms: string[];
  movementImpact: string[];
  assessmentProtocol: string[];
  evidenceBasedTreatments: string[];
  rehabilitationTimeline: {
    phase: string;
    duration: string;
    goal: string;
    focus: string;
  }[];
  homeCareEducation: string[];
  redFlagsUrgentCare: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedConditions: string[];
  relatedTreatments: string[];
  interactive3DModelKey: string;
}

export interface Treatment {
  id: string;
  name: string;
  slug: string;
  category: 'hands-on' | 'exercise-therapy' | 'technology-modality' | 'specialized-care';
  shortDescription: string;
  whatItIs: string;
  howItWorks: string;
  whoItHelps: string[];
  sessionExpectations: string[];
  evidenceSummary: string;
  treatedConditions: string[];
  cadPricingEstimate?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  longDescription: string;
  clinicalObjectives: string[];
  targetConditions: string[];
  careFormats: ('clinic' | 'in-home' | 'telehealth')[];
}

export interface SurgicalRehabTimeline {
  id: string;
  procedureName: string;
  slug: string;
  anatomicalRegion: BodyRegion;
  procedureOverview: string;
  surgicalDistinction: string;
  phases: {
    phaseId: string;
    title: string;
    timelineLabel: string;
    anatomicalState: string;
    rehabFocus: string[];
    precautions: string[];
    movementGoal: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BiomechanicalMovement {
  id: string;
  title: string;
  slug: string;
  description: string;
  primaryJointsInvolved: string[];
  criticalKinematicAngles: {
    joint: string;
    optimalAngle: string;
    compensationWarning: string;
  }[];
  muscleActivationGroups: {
    name: string;
    role: 'prime-mover' | 'stabilizer' | 'antagonist';
    functionInMovement: string;
  }[];
  clinicalAssessments: string[];
}

export interface RegisteredExpert {
  id: string;
  slug: string;
  fullName: string;
  credentials: string; // e.g. "PT, MSc.PT, FCAMPT"
  regulatoryCollege: string; // e.g. "College of Physiotherapists of Ontario (CPO)"
  registrationNumberPlaceholder: string;
  specialties: string[];
  languagesSpoken: string[];
  provincesPracticing: string[];
  citiesServed: string[];
  serviceModes: ('in-clinic' | 'in-home' | 'virtual')[];
  experienceYears: number;
  clinicalPhilosophy: string;
  bio: string;
  imageUrl: string;
}

export interface CanadianCity {
  slug: string;
  name: string;
  provinceCode: string;
  provinceName: string;
  headline: string;
  subhead: string;
  keyServiceHubs: string[];
  postalCodePrefixes: string[];
  inHomeCareAvailable: boolean;
  virtualCareAvailable: boolean;
  clinicLocationsNote: string;
  directBillingProviders: string[];
  localFaqs: {
    question: string;
    answer: string;
  }[];
}

export interface CanadianProvince {
  code: string;
  name: string;
  slug: string;
  capital: string;
  majorCities: CanadianCity[];
  regulatoryCollegeName: string;
  telehealthCoverageRegulations: string;
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  authorCredentials: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
    clinicalNote?: string;
  }[];
  relatedConditions: string[];
  publishedDate: string;
}

export interface BookingState {
  concernCategory: string;
  bodyRegion: BodyRegion | '';
  careMode: 'in-clinic' | 'in-home' | 'virtual' | '';
  province: string;
  city: string;
  postalCode: string;
  practitionerPreference: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  insuranceProvider: string;
  additionalNotes: string;
}
