import { CanadianProvince, CanadianCity } from "./types";

export const CANADIAN_PROVINCES: CanadianProvince[] = [
  {
    code: "ON",
    name: "Ontario",
    slug: "ontario",
    capital: "Toronto",
    regulatoryCollegeName: "College of Physiotherapists of Ontario (CPO)",
    telehealthCoverageRegulations: "Physiotherapy services provided by CPO-registered practitioners are valid for patients physically located in Ontario during treatment.",
    majorCities: [
      {
        slug: "toronto",
        name: "Toronto (GTA)",
        provinceCode: "ON",
        provinceName: "Ontario",
        headline: "Expert Physiotherapy in Toronto & the Greater Toronto Area",
        subhead: "Clinical excellence delivered to your door or virtually across Downtown Toronto, North York, Scarborough, and Etobicoke.",
        keyServiceHubs: ["Downtown / Financial District", "Midtown & Yorkville", "North York", "Etobicoke", "Scarborough"],
        postalCodePrefixes: ["M5V", "M4Y", "M2N", "M9C", "M1B"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "Available through our partner clinical hubs and mobile clinical teams.",
        directBillingProviders: ["Sun Life", "Manulife", "Canada Life", "Green Shield Canada", "Desjardins", "Blue Cross"],
        localFaqs: [
          {
            question: "Is home physiotherapy available in Downtown Toronto?",
            answer: "Yes, our registered physiotherapists provide comprehensive in-home assessments and ongoing rehabilitation directly to your residence, condominium, or office across the Greater Toronto Area."
          },
          {
            question: "Do you direct bill extended health insurance in Ontario?",
            answer: "Yes, we direct bill most major Canadian private insurance providers including Sun Life, Manulife, Canada Life, and Green Shield Canada for eligible claims."
          }
        ]
      },
      {
        slug: "mississauga",
        name: "Mississauga & Peel Region",
        provinceCode: "ON",
        provinceName: "Ontario",
        headline: "In-Home & Virtual Physiotherapy in Mississauga",
        subhead: "Convenient, hospital-grade physical therapy and rehabilitation throughout Mississauga, Brampton, and Oakville.",
        keyServiceHubs: ["City Centre", "Port Credit", "Streetsville", "Erin Mills", "Meadowvale"],
        postalCodePrefixes: ["L5B", "L5G", "L5M", "L5N", "L5K"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "In-home mobile teams and regional clinical consultation hubs.",
        directBillingProviders: ["Sun Life", "Manulife", "Canada Life", "Green Shield Canada", "ClaimSecure"],
        localFaqs: [
          {
            question: "Can I receive post-surgery knee or hip rehab at home in Mississauga?",
            answer: "Yes. Post-operative orthopedic rehabilitation (Total Knee Replacement, Total Hip Replacement, ACL reconstruction) is one of our primary in-home specialties across Mississauga."
          }
        ]
      },
      {
        slug: "ottawa",
        name: "Ottawa & National Capital Region",
        provinceCode: "ON",
        provinceName: "Ontario",
        headline: "Physiotherapy & Movement Care in Ottawa",
        subhead: "Dedicated rehabilitation and clinical movement assessment for Ottawa, Nepean, Kanata, and Orleans.",
        keyServiceHubs: ["Centretown / ByWard Market", "Kanata Tech Hub", "Nepean", "Orleans", "The Glebe"],
        postalCodePrefixes: ["K1P", "K2K", "K2G", "K1C", "K1S"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "Mobile clinical teams covering the National Capital Region.",
        directBillingProviders: ["Sun Life", "Manulife", "Canada Life", "Green Shield Canada", "Desjardins"],
        localFaqs: [
          {
            question: "Do you offer bilingual (English/French) virtual care in Ottawa?",
            answer: "Yes, we have bilingual registered physiotherapists available for virtual consultations and exercise programming."
          }
        ]
      }
    ]
  },
  {
    code: "BC",
    name: "British Columbia",
    slug: "british-columbia",
    capital: "Victoria",
    regulatoryCollegeName: "College of Physical Therapists of British Columbia (CPTBC)",
    telehealthCoverageRegulations: "Virtual physiotherapy is fully authorized by CPTBC for residents located anywhere in British Columbia.",
    majorCities: [
      {
        slug: "vancouver",
        name: "Vancouver & Lower Mainland",
        provinceCode: "BC",
        provinceName: "British Columbia",
        headline: "Advanced Physiotherapy in Vancouver & Metro Vancouver",
        subhead: "Restoring functional movement for active lifestyles across Vancouver, Burnaby, Richmond, and the North Shore.",
        keyServiceHubs: ["Downtown Vancouver / Yaletown", "Kitsilano & West Point Grey", "Mount Pleasant", "North Vancouver", "Richmond"],
        postalCodePrefixes: ["V6B", "V6K", "V5T", "V7L", "V6X"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "Serving urban and coastal communities via in-home and virtual physical therapy.",
        directBillingProviders: ["Pacific Blue Cross", "Sun Life", "Manulife", "Canada Life", "Green Shield Canada"],
        localFaqs: [
          {
            question: "Do you treat sports and trail running injuries in Vancouver?",
            answer: "Yes, our sports injury protocols specialize in knee ligament sprains, Achilles tendinopathy, IT band syndrome, and rotational core stability for active runners and outdoor athletes."
          }
        ]
      },
      {
        slug: "victoria",
        name: "Victoria & Vancouver Island",
        provinceCode: "BC",
        provinceName: "British Columbia",
        headline: "Physiotherapy & Healthy Aging in Victoria, BC",
        subhead: "Specialized geriatric mobility, joint preservation, and post-surgical recovery across Greater Victoria.",
        keyServiceHubs: ["Downtown Victoria", "Oak Bay", "Saanich", "Esquimalt"],
        postalCodePrefixes: ["V8W", "V8R", "V8X", "V9A"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "Mobile physical therapists serving Vancouver Island.",
        directBillingProviders: ["Pacific Blue Cross", "Sun Life", "Manulife", "Canada Life"],
        localFaqs: [
          {
            question: "Is in-home fall prevention and balance training available in Victoria?",
            answer: "Yes, our physiotherapists provide thorough home safety and vestibular balance assessments for seniors and individuals regaining mobility."
          }
        ]
      }
    ]
  },
  {
    code: "AB",
    name: "Alberta",
    slug: "alberta",
    capital: "Edmonton",
    regulatoryCollegeName: "Physiotherapy Alberta College + Association",
    telehealthCoverageRegulations: "Alberta registered physiotherapists provide comprehensive in-person and secure telehealth sessions.",
    majorCities: [
      {
        slug: "calgary",
        name: "Calgary & Bow Valley",
        provinceCode: "AB",
        provinceName: "Alberta",
        headline: "Personalized Physiotherapy in Calgary",
        subhead: "Clinical assessment, spine care, and sports rehabilitation throughout Calgary, Airdrie, and surrounding areas.",
        keyServiceHubs: ["Downtown Calgary / Beltline", "Kensington", "South Calgary", "Northwest Hub"],
        postalCodePrefixes: ["T2P", "T2N", "T2J", "T3B"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "Serving Calgary urban districts via home visits and tele-rehabilitation.",
        directBillingProviders: ["Alberta Blue Cross", "Sun Life", "Manulife", "Canada Life", "Green Shield Canada"],
        localFaqs: [
          {
            question: "Can I use Alberta Blue Cross for home physiotherapy?",
            answer: "Yes, most Alberta Blue Cross and group employer plans cover registered physiotherapy sessions."
          }
        ]
      },
      {
        slug: "edmonton",
        name: "Edmonton Capital Region",
        provinceCode: "AB",
        provinceName: "Alberta",
        headline: "Physiotherapy & Spine Care in Edmonton",
        subhead: "In-home and virtual rehabilitation for orthopedic, neurological, and post-surgical recovery in Edmonton.",
        keyServiceHubs: ["Downtown Edmonton", "Old Strathcona", "West Edmonton", "Sherwood Park"],
        postalCodePrefixes: ["T5J", "T6E", "T5T", "T8A"],
        inHomeCareAvailable: true,
        virtualCareAvailable: true,
        clinicLocationsNote: "In-home clinical visits and telehealth consultations.",
        directBillingProviders: ["Alberta Blue Cross", "Sun Life", "Manulife", "Canada Life"],
        localFaqs: [
          {
            question: "Do you provide neurological rehabilitation after stroke in Edmonton?",
            answer: "Yes, our neuro-physiotherapists offer intensive functional task retraining and motor recovery protocols in home settings."
          }
        ]
      }
    ]
  }
];

export function getProvinceBySlug(slug: string): CanadianProvince | undefined {
  return CANADIAN_PROVINCES.find((p) => p.slug === slug);
}

export function getCityBySlug(provinceSlug: string, citySlug: string): { province: CanadianProvince; city: CanadianCity } | undefined {
  const province = getProvinceBySlug(provinceSlug);
  if (!province) return undefined;
  const city = province.majorCities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { province, city };
}
