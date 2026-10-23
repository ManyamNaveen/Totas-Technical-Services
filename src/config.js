// Single source of truth for business details. Edit here, not in components.
export const business = {
  name: 'TOTAS Technical Services',
  shortName: 'TOTAS',
  nameAr: 'توتاس للخدمات الفنية',
  licenseNo: '929464',
  licensedSince: 2021,
  // Temporary test number for phone and WhatsApp; switch back to +971 56 718 1531 (971567181531) before launch.
  phone: '+91 7285 964 923',
  phoneRaw: '917285964923',
  whatsappRaw: '917285964923',
  address: 'Office 2102, Building 69B, Business Bay, Dubai, UAE',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Business+Bay+Dubai',
};


export function whatsappLink(message = `Hi ${business.shortName}, I'd like to enquire about your services.`) {
  return `https://wa.me/${business.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const categories = [
  { id: 'all', label: 'All services' },
  { id: 'pools', label: 'Swimming pools' },
  { id: 'mep', label: 'AC & plumbing' },
  { id: 'fitout', label: 'Finishing works' },
];

export const services = [
  {
    id: 'pool-maintenance',
    category: 'pools',
    title: 'Swimming Pool Maintenance',
    icon: 'Droplets',
    image: '/images/pool-maintenance.jpg',
    text: 'Scheduled cleaning, water testing and chemical balancing that keeps your pool clear and safe in the Dubai heat.',
    tags: ['Cleaning', 'Water Testing', 'Chemical Balance'],
  },
  {
    id: 'pool-installation',
    category: 'pools',
    title: 'Swimming Pool Installation Works',
    icon: 'Waves',
    image: '/images/pool-installation.jpg',
    text: 'New swimming pool installation for villas and buildings, including pool plumbing, tiling and finishing.',
    tags: ['New Pools', 'Pool Plumbing', 'Pool Tiling'],
  },
  {
    id: 'ac',
    category: 'mep',
    title: 'Air-Conditioning, Ventilation & Air Filtration',
    icon: 'Wind',
    image: '/images/ac.jpg',
    text: 'Installation and maintenance of air-conditioning, ventilation and air filtration systems for homes and offices.',
    tags: ['Installation', 'Servicing', 'Air Filtration'],
  },
  {
    id: 'plumbing',
    category: 'mep',
    title: 'Plumbing & Sanitary Installation',
    icon: 'Wrench',
    image: '/images/plumbing.jpg',
    text: 'Pipework, fixtures, leak repairs and complete sanitary installations for kitchens and bathrooms.',
    tags: ['Leak Repairs', 'Fixtures', 'Sanitary'],
  },
  {
    id: 'parking',
    category: 'mep',
    title: 'Automated Car Parking Systems',
    icon: 'Car',
    image: '/images/parking.jpg',
    text: 'Installation and maintenance of automated car parking systems for residential and commercial buildings.',
    tags: ['Installation', 'Maintenance'],
  },
  {
    id: 'tiling',
    category: 'fitout',
    title: 'Floor & Wall Tiling Works',
    icon: 'Grid3x3',
    image: '/images/tiling.jpg',
    text: 'Precise tiling for floors, walls, bathrooms and pool surrounds, with clean lines and durable finishes.',
    tags: ['Floors', 'Walls', 'Pool Surrounds'],
  },
  {
    id: 'painting',
    category: 'fitout',
    title: 'Painting Contracting',
    icon: 'PaintRoller',
    image: '/images/painting.jpg',
    text: 'Interior and exterior painting with careful preparation, protection of your space and a neat finish.',
    tags: ['Interior', 'Exterior'],
  },
  {
    id: 'carpentry',
    category: 'fitout',
    title: 'Carpentry & Wood Flooring Works',
    icon: 'Hammer',
    image: '/images/carpentry.jpg',
    text: 'Carpentry works and wood flooring installation, measured and fitted properly to your space.',
    tags: ['Carpentry', 'Wood Flooring'],
  },
  {
    id: 'ceiling',
    category: 'fitout',
    title: 'False Ceiling & Light Partitions',
    icon: 'Layers',
    image: '/images/ceiling.jpg',
    text: 'False ceiling and light partition installation to divide rooms and give spaces a clean, finished look.',
    tags: ['False Ceilings', 'Partitions'],
  },
  {
    id: 'plaster',
    category: 'fitout',
    title: 'Plaster Works',
    icon: 'BrickWall',
    image: '/images/plaster.jpg',
    text: 'Internal and external plastering, wall repairs and surface preparation ready for painting.',
    tags: ['Internal', 'External', 'Wall Repairs'],
  },
];

export const areas = [
  'Emirates Hills', 'Palm Jumeirah', 'Dubai Hills Estate', 'Arabian Ranches', 'Jumeirah',
  'The Springs & Meadows', 'Al Barsha', 'Umm Suqeim', 'Arabian Ranches 2', 'Arabian Ranches 3',
  'The Lakes', 'DAMAC Hills', 'DAMAC Hills 2', 'Jumeirah Golf Estates', 'Al Barari', 'The Villa',
  'Palm Jebel Ali', 'District One (MBR City)', 'Jumeirah Park', 'Jumeirah Islands',
  'Tilal Al Ghaf', 'Emaar South', 'The Valley', 'Wadi Al Safa', 'Jumeirah Village Circle (JVC)',
  'Al Khawaneej', 'Mirdif', 'Business Bay', 'Dubai Marina', 'Motor City',
];
