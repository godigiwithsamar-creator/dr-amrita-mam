import { 
  Sparkles, 
  Droplets, 
  ShieldAlert, 
  User, 
  Syringe, 
  ShieldCheck, 
  Scissors, 
  Zap, 
  Target, 
  RefreshCw, 
  Microscope, 
  Wand2, 
  Lock, 
  Award, 
  FileText, 
  Heart, 
  BadgeCheck,
  Search,
  CheckCircle2,
  Stethoscope,
  Smile,
  Activity,
  Hand
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "General" | "Cosmetic" | "Specialized" | "Hair & Nail";
  icon: any;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ChooseReason {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "acne-treatment",
    title: "Acne Treatment",
    description: "Personalized medical diagnosis and evidence-based treatment plans for acne vulgaris, targeting root causes and minimizing future outbreaks.",
    category: "General",
    icon: Sparkles
  },
  {
    id: "eczema-treatment",
    title: "Eczema Treatment",
    description: "Expert diagnosis and long-term management strategies for eczema, dry skin, and various forms of chronic skin inflammation.",
    category: "General",
    icon: Droplets
  },
  {
    id: "psoriasis-care",
    title: "Psoriasis Care",
    description: "Comprehensive care and long-term management of psoriasis flare-ups using the latest clinically proven systemic and topical therapies.",
    category: "General",
    icon: ShieldAlert
  },
  {
    id: "hair-loss-treatment",
    title: "Hair Loss Treatment",
    description: "In-depth clinical evaluation and targeted therapy for male and female pattern hair loss, alopecia areata, and thinning hair.",
    category: "Hair & Nail",
    icon: User
  },
  {
    id: "prp-hair-therapy",
    title: "PRP Hair Therapy",
    description: "Advanced Platelet Rich Plasma (PRP) treatments, utilizing your own growth factors to stimulate and strengthen hair follicles.",
    category: "Hair & Nail",
    icon: Syringe
  },
  {
    id: "skin-allergy-treatment",
    title: "Skin Allergy Treatment",
    description: "Comprehensive allergy testing guidance, patch diagnosis, and soothing treatment plans to control hives and contact dermatitis.",
    category: "General",
    icon: ShieldCheck
  },
  {
    id: "nail-disorders",
    title: "Nail Disorders",
    description: "Professional treatment of fungal nail infections (onychomycosis), ingrown nails, trauma-related nail damage, and systemic nail diseases.",
    category: "Hair & Nail",
    icon: Hand
  },
  {
    id: "wart-removal",
    title: "Wart Removal",
    description: "Safe, rapid, and effective removal of common, plantar, and flat warts using modern, minimally invasive dermatological procedures.",
    category: "Specialized",
    icon: Zap
  },
  {
    id: "mole-removal",
    title: "Mole Removal",
    description: "Careful dermatoscopic evaluation of moles followed by clean, precise surgical or cosmetic removal with excellent aesthetic results.",
    category: "Specialized",
    icon: Target
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description: "Professional-grade peels designed to improve hyperpigmentation, minor acne scars, dull skin, and overall skin texture and tone.",
    category: "Cosmetic",
    icon: RefreshCw
  },
  {
    id: "skin-biopsy",
    title: "Skin Biopsy",
    description: "Minimally invasive, highly precise biopsy procedures to ensure accurate diagnostic confirmation of suspicious skin lesions or rashes.",
    category: "Specialized",
    icon: Microscope
  },
  {
    id: "acne-scar-treatment",
    title: "Acne Scar Treatment",
    description: "Multidimensional approaches including subcision, microneedling, and localized peels to significantly improve acne scars and skin texture.",
    category: "Cosmetic",
    icon: Wand2
  },
  {
    id: "cosmetic-dermatology",
    title: "Cosmetic Dermatology",
    description: "Modern anti-aging and skin-rejuvenation treatments to restore natural volume, vitality, and a youthful, healthy glow.",
    category: "Cosmetic",
    icon: Smile
  },
  {
    id: "stis-treatment",
    title: "Sexually Transmitted Diseases (STIs)",
    description: "Strictly confidential clinical diagnosis, compassionate counseling, and highly effective treatment for sexually transmitted infections.",
    category: "Specialized",
    icon: Lock
  }
];

export const chooseReasons: ChooseReason[] = [
  {
    id: "1",
    title: "Experienced Consultant Dermatologist",
    description: "Dr. Amrita Shrestha brings years of specialized medical knowledge in Dermatology and Venereology.",
    icon: Award
  },
  {
    id: "2",
    title: "Personalized Treatment Plans",
    description: "Every skin is unique. We craft individualized clinical pathways tailored specifically to your skin profile and medical history.",
    icon: FileText
  },
  {
    id: "3",
    title: "Modern Diagnostic Techniques",
    description: "Utilizing advanced dermatological assessment tools for precise detection of skin, hair, and nail conditions.",
    icon: Search
  },
  {
    id: "4",
    title: "Safe Cosmetic Procedures",
    description: "All aesthetic and clinical interventions are performed with gold-standard safety protocols and minimal downtime.",
    icon: ShieldCheck
  },
  {
    id: "5",
    title: "Evidence-Based Care",
    description: "Treatments grounded strictly in scientific research and modern clinical guidelines for reliable and safe outcomes.",
    icon: CheckCircle2
  },
  {
    id: "6",
    title: "Patient-Centered Approach",
    description: "We prioritize patient comfort, confidential consultations, active listening, and thorough post-treatment education.",
    icon: Heart
  },
  {
    id: "7",
    title: "Advanced Hair & Skin Treatments",
    description: "From state-of-the-art PRP therapy to clinical-grade chemical peels, we employ modern techniques for the best results.",
    icon: Sparkles
  },
  {
    id: "8",
    title: "Compassionate Consultation",
    description: "We understand how skin conditions impact confidence. Expect a warm, friendly, and deeply empathetic medical environment.",
    icon: BadgeCheck
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Sit down for an in-depth conversation. We discuss your symptoms, lifestyle, medical history, and specific goals."
  },
  {
    step: "02",
    title: "Skin Examination",
    description: "A comprehensive dermatoscopic or clinical assessment of your skin, hair, or nails under optimized medical lighting."
  },
  {
    step: "03",
    title: "Diagnosis",
    description: "Formulating a clear diagnostic conclusion, explaining the root causes and condition mechanics in simple, clear terms."
  },
  {
    step: "04",
    title: "Personalized Treatment Plan",
    description: "Designing a tailored prescription, lifestyle protocol, or clinical procedures list designed specifically for your skin's recovery."
  }
];

export const conditionsTreated: string[] = [
  "Acne",
  "Acne Scars",
  "Psoriasis",
  "Eczema",
  "Skin Allergies",
  "Hair Loss",
  "Dandruff",
  "Pigmentation",
  "Melasma",
  "Vitiligo",
  "Nail Disorders",
  "Fungal Infections",
  "Warts",
  "Moles",
  "Rosacea",
  "STIs"
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    rating: 5,
    text: "Dr. Amrita carefully explained my skin condition and provided excellent treatment. My acne improved significantly within just a few weeks. Her follow-up guidance is truly remarkable.",
    treatment: "Acne Treatment",
    date: "June 2026"
  },
  {
    id: "2",
    name: "Prerna Joshi",
    rating: 5,
    text: "I received PRP therapy for hair loss from Dr. Amrita and noticed visible improvement and new growth. She is incredibly gentle, reassuring, and highly skilled in clinical procedures.",
    treatment: "PRP Hair Therapy",
    date: "May 2026"
  },
  {
    id: "3",
    name: "Rohan Shrestha",
    rating: 5,
    text: "Professional, friendly, and knowledgeable. I felt completely comfortable throughout my consultation for a recurring skin allergy. Her prescribed plan worked wonders where others had failed.",
    treatment: "Skin Allergy Treatment",
    date: "July 2026"
  }
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "When should I visit a dermatologist?",
    answer: "You should consult a dermatologist if you experience persistent skin rashes, severe acne, sudden mole changes, chronic hair loss, nail discoloration, skin itching that doesn't resolve, or if you require safe cosmetic rejuvenation treatments."
  },
  {
    id: "faq-2",
    question: "Can acne scars be treated?",
    answer: "Yes! Acne scars can be significantly improved. Depending on whether your scars are pigmented, rolling, boxcar, or ice-pick, Dr. Amrita designs combined approaches using clinical chemical peels, customized microneedling, and subcision therapies."
  },
  {
    id: "faq-3",
    question: "Is PRP therapy safe?",
    answer: "PRP (Platelet-Rich Plasma) therapy is extremely safe because it is autologous—meaning it uses your own blood. A small sample is drawn, spun in a centrifuge to concentrate platelets and growth factors, and re-injected. This eliminates any risk of allergic reactions."
  },
  {
    id: "faq-4",
    question: "What causes hair loss?",
    answer: "Hair loss can be triggered by multiple factors, including genetics (androgenetic alopecia), hormonal shifts (thyroid, postpartum), nutritional deficiencies (iron, vitamin D), stress (telogen effluvium), or autoimmune conditions. A clinical assessment is essential for an accurate diagnosis."
  },
  {
    id: "faq-5",
    question: "Are chemical peels painful?",
    answer: "Most superficial or medium-depth chemical peels do not cause pain. You might experience a warm, tingling, or slight stinging sensation that lasts only a few minutes during application. Post-treatment skin cooling and moisturizers are applied to soothe the skin."
  },
  {
    id: "faq-6",
    question: "Do I need an appointment?",
    answer: "Yes, to ensure personalized and unhurried care for each patient, consultations with Dr. Amrita Shrestha are strictly by appointment. You can book an appointment online through this website or by calling our desk at +977 9851213380."
  }
];
