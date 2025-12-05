export type Service = {
  name: string;
  description: string;
  duration: string;
  priceFrom: number;
  focus: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const heroHighlights = [
  { title: "100% natural sugar", subtitle: "Water + sugar + lemon" },
  { title: "Skin-first approach", subtitle: "Less irritation, fewer ingrowns" },
  { title: "Expert practitioners", subtitle: "Licensed estheticians" },
  { title: "Ultra-hygienic", subtitle: "No double dipping" }
];

export const services: Service[] = [
  {
    name: "Signature Brazilian",
    description: "Complete intimate sugaring with calming pre + post care.",
    duration: "35 min",
    priceFrom: 85,
    focus: "Smooth results with minimal redness."
  },
  {
    name: "Extended Bikini",
    description: "Choose your shape; perfect for beach-ready confidence.",
    duration: "30 min",
    priceFrom: 70,
    focus: "Custom coverage with gentle technique."
  },
  {
    name: "Full Legs",
    description: "From toes to bikini line with polished, even finish.",
    duration: "55 min",
    priceFrom: 120,
    focus: "Longer-lasting smoothness."
  },
  {
    name: "Underarms",
    description: "Quick, low-sensitivity care for delicate skin.",
    duration: "15 min",
    priceFrom: 30,
    focus: "Reduces irritation and shadow."
  },
  {
    name: "Brows & Face",
    description: "Brow shaping, lip, and cheek sugaring for soft definition.",
    duration: "25 min",
    priceFrom: 45,
    focus: "Balanced shaping without hot wax."
  },
  {
    name: "Men's Grooming",
    description: "Back, chest, and full body options tailored to your goals.",
    duration: "60 min",
    priceFrom: 140,
    focus: "Comfort-forward technique."
  }
];

export const values = [
  {
    title: "Skin-kind ingredients",
    text: "Only sugar, lemon, and water — no resins, dyes, or strip wax."
  },
  {
    title: "Precision technique",
    text: "Applied cool and removed with the hair growth to reduce breakage."
  },
  {
    title: "Comfort & privacy",
    text: "Welcoming studio, calming music, and transparent guidance."
  }
];

export const processSteps = [
  {
    title: "Consult & prep",
    detail: "We map sensitivities, cleanse skin, and dust with powder for grip."
  },
  {
    title: "Cool sugar application",
    detail: "Sugar is molded by hand, applied at room temp, and flicked gently."
  },
  {
    title: "Calm & protect",
    detail: "Soothing botanicals, ingrown prevention serum, and SPF on exposed areas."
  }
];

export const faqs: FAQ[] = [
  {
    question: "How long should my hair be?",
    answer: "At least 1/4 inch (about the length of a grain of rice). This allows the sugar to wrap each hair for a clean removal."
  },
  {
    question: "Is sugaring better than waxing?",
    answer: "Sugaring is applied at room temperature, removes hair in the growth direction, and uses a simple three-ingredient paste—many clients experience less irritation."
  },
  {
    question: "How do I prepare for my visit?",
    answer: "Gently exfoliate 24 hours prior, skip oils the day-of, avoid heavy sun exposure, and wear loose clothing."
  },
  {
    question: "What about aftercare?",
    answer: "Keep the area cool and clean for 24 hours, avoid workouts and saunas, and exfoliate 2-3 times weekly to prevent ingrowns."
  },
  {
    question: "How often should I book?",
    answer: "Most clients return every 4-6 weeks to stay in the growth cycle and see softer regrowth over time."
  }
];

export const testimonials = [
  {
    name: "Lana M.",
    quote: "Gentle, precise, and so informative. My skin was calm within minutes.",
    service: "Brazilian + underarms"
  },
  {
    name: "Priya S.",
    quote: "The studio feels like a spa. Zero irritation and the smoothest finish.",
    service: "Full legs"
  },
  {
    name: "Jordan T.",
    quote: "Clear aftercare guidance and thoughtful technique. Best sugaring I've had.",
    service: "Back + chest"
  }
];

export const aftercareTips = [
  "Avoid heat, workouts, and tight clothing for 24 hours.",
  "Use a gentle, fragrance-free cleanser on treated areas.",
  "Exfoliate 2-3 times weekly starting day three to prevent ingrowns.",
  "Moisturize daily with a light, non-comedogenic lotion.",
  "Book every 4-6 weeks to stay ahead of the growth cycle."
];

export const contact = {
  phone: "(415) 555-0148",
  email: "hello@sugaringessential.com",
  address: "245 Maple Ave, Redwood City, CA",
  hours: "Mon - Sat · 9:00a - 7:00p",
  bookingLink: "https://cal.com"
};

