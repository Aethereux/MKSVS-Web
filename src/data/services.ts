export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'automotive'
  | 'emergency'
  | 'specialty';

export interface ServiceSection {
  heading: string;
  body?: string;
  offerings?: string[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categories: ServiceCategory[];
  featured?: boolean;
  icon: string;
  offerings: string[];
  galleryCount: number;
  extraSections?: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: 'key-duplication',
    title: 'Key Duplication',
    tagline: 'Crafted to perfection',
    description:
      'Misplaced a key or simply need an extra one for emergencies? Our key duplication services are at your rescue. Using the latest technology and precision equipment, we ensure that each duplicate key is crafted to perfection, aligning seamlessly with the original. Every key we duplicate undergoes rigorous testing to ensure it works just as efficiently as your original one.',
    categories: ['residential', 'commercial', 'automotive'],
    icon: 'key',
    offerings: [
      'Dimple Key Duplication',
      'Special Key Duplication',
      'Regular Key Duplication',
      'Customized Key Duplication',
      'Vault Key Duplication',
      'Car Key Duplication',
      'Broken Key Duplication',
    ],
    galleryCount: 13,
  },
  {
    slug: 'locksmith',
    title: 'Locksmith Services',
    tagline: 'Your 24/7 guardian',
    description:
      "Locked out of your home or office? Or maybe there's a troublesome lock that just won't budge? Our team of professional locksmiths is just a call away. With years of experience, they're equipped to tackle any lock problem, ensuring you regain access swiftly and safely. Available around the clock — peace of mind regardless of the time or place.",
    categories: ['residential', 'commercial', 'emergency'],
    icon: 'lock',
    offerings: [
      'Key Fitting (Fabrication)',
      'Broken Key Removal',
      'Door Lockout Opening',
      'Force Opening of Lock',
      'Change Combination',
      'Supply & Installation of New Lock',
      'Lock Repair',
      'Luggage & Bag Lock Opening',
      'Smartlock Installations',
    ],
    galleryCount: 9,
  },
  {
    slug: 'commercial',
    title: 'Commercial Locksmith',
    tagline: 'Safeguarding business',
    description:
      "In the world of business, security is paramount. From protecting valuable assets to ensuring the safety of your employees, our commercial locksmith services cater to all your needs. High-security locks, access control systems, or master key setups — we've got you covered.",
    categories: ['commercial'],
    icon: 'building',
    offerings: [
      'Cabinet Key Fabrication',
      'Lateral Cabinet Key Fabrication',
      'Mobile Pedestal Fabrication',
      'Cabinet Key Duplication',
      'Cash Box Opening',
      'Mailbox Lock Replacement',
      'Mailbox Fabrication',
      'Door Lockout Opening',
      'Door Lock Installation',
    ],
    galleryCount: 5,
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    tagline: "Locked out? On our way.",
    description:
      "Car lockouts can be frustrating, but they don't have to ruin your day. Whether it's a door lock, car padlock, or any other vehicle lock, our automotive locksmith experts are ready. Specialized vehicles reach you anywhere in Metro Manila and nearby provinces. For lost car keys, our professionals only duplicate or fabricate under the watchful eye of the confirmed car owner.",
    categories: ['automotive', 'emergency'],
    icon: 'car',
    offerings: [
      'Givi Box Lock (Motorcycle)',
      'All Keys Motorlock',
      'All Lost Key Car Services',
      'Motorcycle Key Duplication',
      'Car Key Duplication',
      'Car Key Programming',
    ],
    galleryCount: 20,
  },
  {
    slug: 'glass-door',
    title: 'Glass Door',
    tagline: 'Transparent solutions',
    description:
      'Glass doors add a touch of elegance and modernity to any space. However, they come with their own challenges. Be it a faulty lock, alignment issues, or a sudden crack, our glass door services are designed to address all these and more — bringing clarity and functionality back to your doors.',
    categories: ['commercial'],
    icon: 'door',
    offerings: [
      'Patchlock Replacement',
      'Patchlock Repair',
      'Glassdoor Alignment',
      'Patchfitting Replacement',
      'Door Closer Installations',
      'Door Closer Adjustments',
      'Aluminum Glassdoor Lock Installation',
    ],
    galleryCount: 5,
  },
  {
    slug: 'vault',
    title: 'Vault Services',
    tagline: "Your treasure's guardian",
    description:
      "Vaults are the epitome of security, but what happens when you're locked out or forget the combination? Our vault services ensure your valuables remain accessible to you and only you. Whether it's a combination change, maintenance, or an emergency opening, we approach each task with utmost care and precision. For forgotten combinations we attempt a non-invasive approach first; if drilling is needed, our experts ensure your vault remains as robust as ever.",
    categories: ['commercial', 'specialty'],
    featured: true,
    icon: 'vault',
    offerings: [
      'Change Combination or Resetting of Number',
      'Vault Maintenance — greasing & oiling of safe-vault components',
      'Opening by tracing (trial and error)',
      'Force opening (by drilling) with repair — vault stays as good as new',
    ],
    galleryCount: 8,
    extraSections: [
      {
        heading: 'For banks & pawnshops',
        body: 'We supply advanced TIME-DELAY LOCKS and other state-of-the-art security products to bolster your defenses.',
      },
    ],
  },
];

export const categories: { value: ServiceCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'emergency', label: 'Emergency' },
];

export const partners = [
  { name: 'SECURTECH Locksmith', location: 'Texas, USA' },
  { name: 'MANTON Security', location: 'Hong Kong, China' },
];

export const brands = [
  'SCHLAGE', 'ABLOY', 'YALE', 'MASTERLOCK', 'MUL-T-LOCK', 'CORBIN',
];
