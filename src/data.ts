import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'aether',
    title: 'Aether Studio',
    category: 'Spatial Design & Web',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    description: 'Immersive digital monograph showcasing raw, post-brutalist monolithic architecture.',
    longDescription: 'Aether Studio is a modular, high-contrast digital platform designed to showcase architectural monuments in an interactive viewport. We built an asymmetrical grid with inertia-guided scrolling, micro-transitions, and custom clip-animations that simulate ambient shadow drifts across raw concrete walls directly in the browser.',
    role: 'Lead Creative Developer',
    client: 'Aether Group, Berlin',
    tags: ['Creative Development', 'WebGL Integration', 'Interactive Typography', 'Motion Design'],
  },
  {
    id: 'chronicle',
    title: 'Chronicle Archive',
    category: 'Editorial & Storytelling',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800',
    description: 'An elegant typographic archive tracking fluid modern sculptures and design history.',
    longDescription: 'Chronicle is an architectural repository for physical design, focusing on high-density typographic typography and physical texture simulations. It treats the browser window as an elite physical editorial magazine, presenting high-resolution imagery and design documents with spring-loaded inertia transitions and kinetic canvas panels.',
    role: 'Visual Identity Designer & Developer',
    client: 'Contemporary Arts Society',
    tags: ['Next-Gen Editorial', 'Dynamic Layouts', 'Texture Mapping', 'Digital Archives'],
  },
  {
    id: 'kinetia',
    title: 'Kinetica Identity',
    category: 'Branding & Motion',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800',
    description: 'A responsive fluid branding system for public kinetic light installations.',
    longDescription: 'Kinetica designs kinetic installations for corporate structures globally. Our interactive brand system transforms their website background into a live tactile canvas that reacts dynamically to coordinate drag gesture feeds, rendering digital currents that mirror physical light movements at installation sites.',
    role: 'Interaction Specialist',
    client: 'Kinetica Studios, London',
    tags: ['Real-time Simulation', 'Gesture Tracking', 'Brand Ecosystems', 'CSS Shaders'],
  },
  {
    id: 'voxel',
    title: 'Voxel Arch',
    category: '3D Simulation & Light',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800',
    description: 'Tactile lighting sandbox exploring glass panelling and volumetric rendering.',
    longDescription: 'An experimental web app providing structural lighting sandboxes. Built as a tribute to minimal glass installations, Voxel Arch empowers designers to project volumetric shadow paths and refraction indices across modular concrete blocks, featuring direct imageExports and instant vector mappings.',
    role: 'Technical Art Director',
    client: 'Lumina Lab, Tokyo',
    tags: ['Volumetric Shadows', 'UI/UX Design', '3D Sandbox', 'Canvas Systems'],
  }
];

export const BIO_DETAILS = {
  name: 'Ajith',
  tagline: 'Articulating form through physics & code.',
  aboutText: [
    'I am Ajith, an independent interactive developer and digital designer bridging the gap between rigorous technical code and fluid visual artistry.',
    'I build web platforms that ignore rigid conventions in favor of responsive motion, tactile interfaces, and structural balance. Every project is an exploration in performance, spatial aesthetics, and intuitive human gestures.',
    'Operating globally with teams of visual artists, architects, and product leads, I translate complex physical products into sleek, fast-loading, highly memorable native web environments.'
  ],
  skills: [
    { category: 'Development', items: ['React / Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL / Shaders', 'Performance Tuning'] },
    { category: 'Design', items: ['Creative Direction', 'Typography Systems', 'Interactive Design', 'Branding Systems', 'Editorial Layouts', '3D Prototyping'] }
  ],
  experience: [
    { year: '2024 — Present', role: 'Independent Creative Developer', studio: 'Remote / Global clients' },
    { year: '2022 — 2024', role: 'Interactive Systems Engineer', studio: 'Symmetry Labs, Munich' },
    { year: '2020 — 2022', role: 'UI/UX Interactive Designer', studio: 'Shift Editorial, India' }
  ],
  socials: [
    { name: 'GitHub', link: 'https://github.com' },
    { name: 'LinkedIn', link: 'https://linkedin.com' },
    { name: 'Twitter', link: 'https://twitter.com' },
    { name: 'Instagram', link: 'https://instagram.com' }
  ]
};
