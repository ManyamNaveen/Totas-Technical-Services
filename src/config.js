// Single source of truth for business details. Edit here, not in components.
export const business = {
  name: 'TOTAS Technical Services',
  shortName: 'TOTAS',
  nameAr: 'ØªÙˆØªØ§Ø³ Ù„Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„ÙÙ†ÙŠØ©',
  licenseNo: '929464',
  licensedSince: 2021,
  phone: '+971 56 718 1531',
  phoneRaw: '971567181531',
  // Temporary test number; switch back to 971567181531 before launch.
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
  },
  {
    id: 'pool-installation',
    category: 'pools',
    title: 'Swimming Pool Installation Works',
    icon: 'Waves',
    image: '/images/pool-installation.jpg',
    text: 'New swimming pool installation for villas and buildings, including pool plumbing, tiling and finishing.',
  },
  {
    id: 'ac',
    category: 'mep',
    title: 'Air-Conditioning, Ventilation & Air Filtration',
    icon: 'Wind',
    image: '/images/ac.jpg',
    text: 'Installation and maintenance of air-conditioning, ventilation and air filtration systems for homes and offices.',
  },
  {
    id: 'plumbing',
    category: 'mep',
    title: 'Plumbing & Sanitary Installation',
    icon: 'Wrench',
    image: '/images/plumbing.jpg',
    text: 'Pipework, fixtures, leak repairs and complete sanitary installations for kitchens and bathrooms.',
  },
  {
    id: 'parking',
    category: 'mep',
    title: 'Automated Car Parking Systems',
    icon: 'Car',
    image: '/images/parking.jpg',
    text: 'Installation and maintenance of automated car parking systems for residential and commercial buildings.',
  },
  {
    id: 'tiling',
    category: 'fitout',
    title: 'Floor & Wall Tiling Works',
    icon: 'Grid3x3',
    image: '/images/tiling.jpg',
    text: 'Precise tiling for floors, walls, bathrooms and pool surrounds, with clean lines and durable finishes.',
  },
  {
    id: 'painting',
    category: 'fitout',
    title: 'Painting Contracting',
    icon: 'PaintRoller',
    image: '/images/painting.jpg',
    text: 'Interior and exterior painting with careful preparation, protection of your space and a neat finish.',
  },
  {
    id: 'carpentry',
    category: 'fitout',
    title: 'Carpentry & Wood Flooring Works',
    icon: 'Hammer',
    image: '/images/carpentry.jpg',
    text: 'Carpentry works and wood flooring installation, measured and fitted properly to your space.',
  },
  {
    id: 'ceiling',
    category: 'fitout',
    title: 'False Ceiling & Light Partitions',
    icon: 'Layers',
    image: '/images/ceiling.jpg',
    text: 'False ceiling and light partition installation to divide rooms and give spaces a clean, finished look.',
  },
  {
    id: 'plaster',
    category: 'fitout',
    title: 'Plaster Works',
    icon: 'BrickWall',
    image: '/images/plaster.jpg',
    text: 'Internal and external plastering, wall repairs and surface preparation ready for painting.',
  },
];

export const areas = [
  'Business Bay', 'Downtown Dubai', 'Dubai Marina', 'JBR', 'Palm Jumeirah', 'Jumeirah',
  'Emirates Hills', 'Dubai Hills', 'Arabian Ranches', 'DAMAC Hills', 'JVC', 'Al Barsha',
  'Mirdif', 'DIFC', 'Al Quoz', 'Motor City',
];
