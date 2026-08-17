import { RegisteredExpert } from "./types";

export const VERIFIED_EXPERTS: RegisteredExpert[] = [
  {
    id: "exp-1",
    slug: "dr-elena-vance",
    fullName: "Elena Vance",
    credentials: "PT, MSc.PT, FCAMPT",
    regulatoryCollege: "College of Physiotherapists of Ontario (CPO)",
    registrationNumberPlaceholder: "CPO Reg # [CMS-Configurable]",
    specialties: ["Spine & Disc Rehabilitation", "Orthopaedic Manual Therapy", "Complex Chronic Pain"],
    languagesSpoken: ["English", "French"],
    provincesPracticing: ["Ontario"],
    citiesServed: ["Toronto", "Mississauga", "Oakville"],
    serviceModes: ["in-clinic", "in-home", "virtual"],
    experienceYears: 14,
    clinicalPhilosophy: "Movement is medicine when applied with anatomical precision. I combine hands-on manual techniques with motor control retraining so patients not only feel better but stay resilient.",
    bio: "Elena holds a Master of Science in Physical Therapy and is a Fellow of the Canadian Academy of Manipulative Physiotherapy (FCAMPT). She has over a decade of clinical experience rehabilitating complex spinal pathologies and post-surgical cases across Toronto.",
    imageUrl: "https://images.unsplash.com/photo-1594824813501-4835691c28c8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "exp-2",
    slug: "marcus-thorne",
    fullName: "Marcus Thorne",
    credentials: "PT, B.Sc.Kin, MPT, CSCS",
    regulatoryCollege: "College of Physical Therapists of British Columbia (CPTBC)",
    registrationNumberPlaceholder: "CPTBC Reg # [CMS-Configurable]",
    specialties: ["Sports Injuries", "ACL & Knee Rehabilitation", "Return-to-Sport Biomechanics"],
    languagesSpoken: ["English"],
    provincesPracticing: ["British Columbia"],
    citiesServed: ["Vancouver", "Burnaby", "Richmond", "North Vancouver"],
    serviceModes: ["in-clinic", "in-home", "virtual"],
    experienceYears: 11,
    clinicalPhilosophy: "High-performance rehabilitation requires bridging the gap between clinical healing and athletic loading. We train the tissue, the kinetic chain, and the mind.",
    bio: "Marcus graduated with an MPT from the University of British Columbia and is a Certified Strength and Conditioning Specialist (CSCS). He has worked extensively with competitive runners, winter sport athletes, and post-ACL reconstruction patients in Vancouver.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "exp-3",
    slug: "sophie-tremblay",
    fullName: "Sophie Tremblay",
    credentials: "PT, MSc.PT, CIDN",
    regulatoryCollege: "College of Physiotherapists of Ontario (CPO)",
    registrationNumberPlaceholder: "CPO Reg # [CMS-Configurable]",
    specialties: ["Post-Surgical Joint Replacement", "Geriatric Mobility & Falls", "Dry Needling / IMS"],
    languagesSpoken: ["English", "French"],
    provincesPracticing: ["Ontario", "Quebec"],
    citiesServed: ["Ottawa", "Gatineau", "Nepean"],
    serviceModes: ["in-home", "virtual"],
    experienceYears: 13,
    clinicalPhilosophy: "Bringing hospital-level physical therapy directly into the home environment allows us to address the exact obstacles patients face in their daily lives.",
    bio: "Sophie specializes in home-based rehabilitation for Total Knee and Hip Replacements, bringing advanced clinical equipment directly to patients across the National Capital Region.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "exp-4",
    slug: "dr-amir-patel",
    fullName: "Amir Patel",
    credentials: "PT, MPT (Neuro), Bobath Certified",
    regulatoryCollege: "Physiotherapy Alberta College + Association",
    registrationNumberPlaceholder: "Physiotherapy Alberta Reg # [CMS-Configurable]",
    specialties: ["Stroke Rehabilitation", "Parkinson's Disease Care", "Vestibular & Balance Disorders"],
    languagesSpoken: ["English", "Hindi", "Gujarati"],
    provincesPracticing: ["Alberta"],
    citiesServed: ["Calgary", "Airdrie", "Okotoks"],
    serviceModes: ["in-clinic", "in-home", "virtual"],
    experienceYears: 16,
    clinicalPhilosophy: "Neuroplasticity thrives on repetition, challenge, and meaningful goals. Every session is structured to give control and confidence back to the patient.",
    bio: "Amir brings 16 years of dedicated neurological rehabilitation experience, utilizing Bobath concepts and task-oriented motor retraining for stroke and movement disorder survivors in Alberta.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  }
];

export function getExpertBySlug(slug: string): RegisteredExpert | undefined {
  return VERIFIED_EXPERTS.find(e => e.slug === slug);
}
