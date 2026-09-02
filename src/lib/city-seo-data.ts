export interface CityFaq {
    question: string;
    answer: string;
}

export interface CityArea {
    name: string;
    slug: string;
}

export interface CitySeoData {
    cityName: string;
    stateName: string;
    citySlug: string;
    stateSlug: string;
    pageSlug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroHeading: string;
    heroSubheading: string;
    localIntro: string;
    whySection: string;
    stats: { label: string; value: string }[];
    popularAreas: CityArea[];
    conditions: string[];
    faqs: CityFaq[];
    canonicalUrl: string;
}

const BASE = 'https://ca.ariesphysiocare.com';

export const citySeoPages: CitySeoData[] = [
    {
        cityName: 'Toronto',
        stateName: 'Ontario',
        citySlug: 'toronto',
        stateSlug: 'ontario',
        pageSlug: 'physiotherapy-in-toronto',
        metaTitle: 'Best In-Home Physiotherapy in Toronto (GTA) | Aries PhysioCare Canada',
        metaDescription: 'Top-rated in-home registered physiotherapy across Toronto & GTA. Certified CPO physio specialists available in Downtown, North York, Yorkville, Etobicoke & Scarborough. Direct billing to Sun Life, Manulife, Canada Life. Book same-day!',
        keywords: ['physiotherapy in toronto', 'in-home physiotherapy toronto', 'physiotherapist toronto', 'physio at home gta', 'direct billing physiotherapy toronto', 'physiotherapy downtown toronto', 'cpo registered physiotherapist'],
        heroHeading: 'Registered In-Home Physiotherapy in Toronto',
        heroSubheading: 'Hospital-grade physical therapy and orthopedic rehabilitation delivered to your home or condo anywhere in the Greater Toronto Area.',
        localIntro: 'Toronto is Canada\'s economic engine — but long commutes on the DVP and 401, heavy desk work in the Financial District, and winter slips create urgent needs for musculoskeletal and spine care. Aries PhysioCare brings CPO-registered clinical physiotherapists directly to your doorstep, saving you travel time while delivering 1-on-1 hospital-grade treatment.',
        whySection: 'Every physiotherapist in our Ontario network is registered with the College of Physiotherapists of Ontario (CPO), holds postgraduate manual therapy certifications, and direct-bills major Canadian insurers.',
        stats: [
            { label: 'Active Clinicians in Toronto', value: '65+' },
            { label: 'GTA Coverage Hubs', value: '25+' },
            { label: 'Direct Billing Partners', value: '15+' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Downtown Toronto', slug: 'downtown-toronto' },
            { name: 'Yorkville & Midtown', slug: 'yorkville-midtown' },
            { name: 'North York', slug: 'north-york' },
            { name: 'Etobicoke', slug: 'etobicoke' },
            { name: 'Scarborough', slug: 'scarborough' },
        ],
        conditions: ['Sciatica & Disc Herniation', 'Post-Op Knee Replacement (TKR)', 'Post-Op Hip Replacement (THR)', 'Rotator Cuff Tears', 'Whiplash & MVA Trauma', 'Neck Pain & Cervical Strain', 'Stroke Neurological Rehab', 'Senior Balance & Fall Prevention'],
        faqs: [
            { question: 'How quickly can a registered physiotherapist visit my home in Toronto?', answer: 'We offer same-day and next-day clinical home visits across Downtown Toronto, North York, Midtown, and the wider GTA. You can book directly online or call our intake team.' },
            { question: 'Do you direct-bill Canadian private insurance (Sun Life, Manulife, Canada Life)?', answer: 'Yes! We support seamless e-claims direct billing for Sun Life, Manulife, Canada Life, Green Shield Canada, Desjardins, and Blue Cross so you pay minimal out-of-pocket expenses.' },
            { question: 'Are your clinicians registered with the College of Physiotherapists of Ontario (CPO)?', answer: 'Yes, 100% of our Ontario therapists are actively licensed with the CPO and hold professional liability coverage, ensuring full insurance reimbursement compliance.' },
            { question: 'Do I need a doctor referral to receive in-home physiotherapy in Ontario?', answer: 'In Ontario, physiotherapy is a direct-access primary healthcare profession; you do not need a physician prescription to book. However, some private insurance plans may require a doctor’s note for policy reimbursement.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-toronto`,
    },
    {
        cityName: 'Vancouver',
        stateName: 'British Columbia',
        citySlug: 'vancouver',
        stateSlug: 'british-columbia',
        pageSlug: 'physiotherapy-in-vancouver',
        metaTitle: 'Expert In-Home Physiotherapy in Vancouver & Lower Mainland | Aries PhysioCare Canada',
        metaDescription: 'Certified CPTBC in-home physiotherapy across Vancouver, Kitsilano, Yaletown, Richmond, and Burnaby. Sports injuries, ICBC motor vehicle claims, and post-surgical recovery at home.',
        keywords: ['physiotherapy in vancouver', 'home physio vancouver', 'icbc physiotherapy vancouver', 'cptbc registered physiotherapist', 'physiotherapy kitsilano', 'physio yaletown'],
        heroHeading: 'In-Home Physiotherapy in Vancouver & Metro',
        heroSubheading: 'Evidence-based physical therapy delivered to your residence or virtually across Vancouver and the Lower Mainland.',
        localIntro: 'From mountain athletes in the North Shore to busy professionals in Yaletown and Kitsilano, Vancouver demands active functional health. Aries PhysioCare provides CPTBC-registered physical therapy at your residence, specializing in sports rehabilitation, ICBC auto injury claims, and post-surgical joint replacements.',
        whySection: 'Our BC clinical team direct-bills ICBC with pre-approved coverage for car accident injuries with $0 patient co-pay, alongside direct billing for extended health benefits.',
        stats: [
            { label: 'Active Clinicians in Vancouver', value: '40+' },
            { label: 'Lower Mainland Hubs', value: '18+' },
            { label: 'ICBC Direct Billing', value: '100%' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Kitsilano & Point Grey', slug: 'kitsilano-point-grey' },
            { name: 'Downtown Vancouver & Yaletown', slug: 'downtown-vancouver' },
            { name: 'Mount Pleasant & Commercial', slug: 'mount-pleasant-commercial' },
            { name: 'Richmond', slug: 'richmond' },
            { name: 'Burnaby', slug: 'burnaby' },
        ],
        conditions: ['ACL & Meniscus Tears', 'Rotator Cuff Impingement', 'ICBC Whiplash Recovery', 'Lumbar Sciatica', 'Knee Osteoarthritis', 'Post-Surgical TKR/THR', 'Concussion Management (CCMI)'],
        faqs: [
            { question: 'Can you direct bill ICBC for motor vehicle accident injuries in BC?', answer: 'Yes, if you have an open ICBC claim number, you are pre-approved for immediate physiotherapy sessions within 12 weeks of the accident with no doctor referral needed.' },
            { question: 'Are your physiotherapists registered with the CPTBC?', answer: 'Yes, all BC clinicians are fully registered and in good standing with the College of Physical Therapists of British Columbia (CPTBC).' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-vancouver`,
    },
    {
        cityName: 'Calgary',
        stateName: 'Alberta',
        citySlug: 'calgary',
        stateSlug: 'alberta',
        pageSlug: 'physiotherapy-in-calgary',
        metaTitle: 'In-Home Physiotherapy in Calgary & Bow Valley | Aries PhysioCare Canada',
        metaDescription: 'Licensed Physiotherapy Alberta in-home physical therapy across Calgary, Beltline, Kensington, and South Calgary. Section B auto injury coverage and private insurance direct billing.',
        keywords: ['physiotherapy in calgary', 'home physio calgary', 'physiotherapy alberta', 'section b auto insurance physio', 'physio beltline calgary'],
        heroHeading: 'In-Home Physiotherapy in Calgary',
        heroSubheading: 'Hospital-grade clinical physical therapy delivered to your home across Downtown Calgary, Beltline, Kensington, and surrounding quadrants.',
        localIntro: 'Calgary’s active population and winter conditions create high demand for rapid, expert orthopedic care. Our registered clinicians bring advanced treatment tools, joint mobilization, and strength protocols directly to your residence.',
        whySection: 'Direct billing for Alberta auto insurance Section B claims and all major private healthcare plans with same-day scheduling.',
        stats: [
            { label: 'Active Clinicians in Calgary', value: '35+' },
            { label: 'Quadrants Covered', value: 'All 4' },
            { label: 'Direct Billing Insurers', value: '15+' },
            { label: 'Avg. Patient Rating', value: '4.8★' },
        ],
        popularAreas: [
            { name: 'Downtown & Beltline', slug: 'downtown-beltline' },
            { name: 'Kensington & Hillhurst', slug: 'kensington-hillhurst' },
            { name: 'South Calgary', slug: 'south-calgary' },
            { name: 'Northwest Calgary', slug: 'northwest-calgary' },
        ],
        conditions: ['Spine & Lower Back Pain', 'Sports Knee & Shoulder Injuries', 'Auto Accident Section B Rehab', 'Hip & Knee Joint Replacement', 'Elderly Balance & Gait Training'],
        faqs: [
            { question: 'How does Section B auto insurance billing work in Alberta?', answer: 'Under Alberta’s Diagnostic and Treatment Protocols, you are entitled to direct-billed physiotherapy for sprains, strains, and whiplash resulting from a motor vehicle accident.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-calgary`,
    },
    {
        cityName: 'Ottawa',
        stateName: 'Ontario',
        citySlug: 'ottawa',
        stateSlug: 'ontario',
        pageSlug: 'physiotherapy-in-ottawa',
        metaTitle: 'In-Home Physiotherapy in Ottawa & National Capital Region | Aries PhysioCare Canada',
        metaDescription: 'Bilingual CPO-registered in-home physiotherapy in Ottawa, Centretown, Glebe, Kanata, and Nepean. Direct billing to Sun Life, Manulife, and Public Service Health Care Plan (PSHCP).',
        keywords: ['physiotherapy in ottawa', 'home physio ottawa', 'pshcp physiotherapy', 'physio kanata', 'physio centretown ottawa'],
        heroHeading: 'In-Home Physiotherapy in Ottawa',
        heroSubheading: 'Bilingual clinical physiotherapy delivered to your doorstep across Ottawa, Kanata, Nepean, and Orleans.',
        localIntro: 'Serving public servants, tech innovators in Kanata, and active families across the Capital, our CPO-registered therapists deliver customized in-home rehabilitation with direct PSHCP / Sun Life billing.',
        whySection: 'Direct billing for the Public Service Health Care Plan (PSHCP / Canada Life) and private insurance policies with zero commute stress.',
        stats: [
            { label: 'Active Clinicians in Ottawa', value: '25+' },
            { label: 'NCR Zones Covered', value: '8+' },
            { label: 'PSHCP Direct Billing', value: 'Supported' },
            { label: 'Avg. Patient Rating', value: '4.9★' },
        ],
        popularAreas: [
            { name: 'Centretown & Glebe', slug: 'centretown-glebe' },
            { name: 'Kanata Tech Corridor', slug: 'kanata' },
            { name: 'Nepean & Barrhaven', slug: 'nepean' },
            { name: 'Orleans', slug: 'orleans' },
        ],
        conditions: ['Ergonomic Neck & Desk Strain', 'Post-Op Joint Replacement', 'Sciatica & Low Back Pain', 'Sports Injuries', 'Senior Fall Prevention'],
        faqs: [
            { question: 'Do you direct bill Canada Life for the Public Service Health Care Plan (PSHCP)?', answer: 'Yes, we direct bill Canada Life for federal government employees covered under the PSHCP.' }
        ],
        canonicalUrl: `${BASE}/physiotherapy-in-ottawa`,
    }
];

export function getCityData(slug: string): CitySeoData | undefined {
    return citySeoPages.find(c => c.citySlug === slug || c.pageSlug === slug);
}
