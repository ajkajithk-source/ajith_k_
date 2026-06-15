import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Filter, Grid, List, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface ProjectListProps {
  projects: Project[];
  setHoveredProject: (project: Project | null) => void;
  onSelectProject: (project: Project) => void;
}

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
  key?: string;
}

/* Individual Interactive Card with Thumbnail Hover Reveal */
function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#141414]/10 bg-stone-300 shadow-sm cursor-pointer"
      id={`project-card-${project.id}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Thumbnail Image with zoom scaling */}
      <img
        src={project.image}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        id={`card-img-${project.id}`}
      />

      {/* Dynamic Ambient Gradient Overlay that deepens on hover for visual stability */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#141414]/95 via-[#141414]/50 to-transparent transition-opacity duration-500 ease-out" 
        style={{ opacity: isHovered ? 0.98 : 0.65 }}
      />

      {/* Release Year badge in card corner */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 p-1 px-3 rounded-full bg-[#F5F5F4]/90 backdrop-blur-md border border-[#141414]/10 shadow-sm">
        <span className="font-mono text-[9px] font-bold text-[#141414] uppercase tracking-widest">
          {project.year}
        </span>
      </div>

      {/* Core Card Info Block */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-[#F5F5F4] z-10" id={`card-content-${project.id}`}>
        <div>
          {/* Category */}
          <span className="font-mono text-[10px] tracking-widest text-[#F5F5F4]/60 uppercase mb-1.5 block">
            {project.category}
          </span>
          
          {/* Title - Elegant Serif italics */}
          <h3 className="font-serif text-3xl sm:text-4xl font-normal italic lowercase tracking-tight transition-transform duration-500 group-hover:translate-x-1">
            {project.title}
          </h3>
        </div>

        {/* Dynamic Reveal Details - Smooth height & opacity transition */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
              marginTop: isHovered ? 14 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Brief description */}
            <p className="font-sans text-[13px] text-stone-300 leading-relaxed max-w-md">
              {project.description}
            </p>

            {/* Key Technologies used */}
            <div className="space-y-1.5">
              <span className="block font-mono text-[8px] text-[#F5F5F4]/55 uppercase tracking-wider">
                Key Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F5F5F4]/10 text-stone-200 font-mono text-[9px] px-2.5 py-1 rounded-md border border-white/5 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study link anchor */}
            <div className="pt-2">
              <span 
                className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white border-b border-white/30 hover:border-white transition-all pb-0.5"
              >
                view full case study
                <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectList({ projects, setHoveredProject, onSelectProject }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // Default to grid view to highlight the new hover reveal section!

  // Dynamically extract categories
  const categories = ['ALL', ...Array.from(new Set(projects.map(p => {
    if (p.category.includes('&')) {
      return p.category.split('&')[0].trim();
    }
    return p.category.trim();
  })))];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', damping: 25, stiffness: 180 } 
    }
  };

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto" id="projects-section">
      {/* Controls: Filter and Layout viewSwitcher */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24" id="intro-heading">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-[#141414]/60 font-mono text-[10px] tracking-widest uppercase mb-4">
            <Sparkles size={11} className="opacity-80" />
            AJITH STUDIO — SELECTION INDEX
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9] text-[#141414] tracking-tighter uppercase">
            SELECTED <br className="hidden sm:inline" />
            <span className="font-serif italic lowercase font-medium text-[#141414]/60 hover:text-[#141414] transition-all duration-300">exhibits / archive</span>
          </h2>
          <p className="font-sans text-stone-600 text-[14px] md:text-[15px] tracking-wide leading-relaxed max-w-lg mt-5">
            A meticulous showcase of digital environments blending tactile spatial geometry, modular motion, and performance-driven code.
          </p>
        </div>

        {/* Action Widgets panel wrapping category and view mode controls */}
        <div className="flex flex-wrap items-center gap-4" id="action-widgets">
          {/* Dynamic Category Filter pills */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-200/50 border border-[#141414]/10 p-1.5 rounded-2xl" id="category-filter">
            <div className="px-3 py-1 font-mono text-[9px] text-stone-500 uppercase flex items-center gap-1.5 border-r border-[#141414]/10 mr-1">
              <Filter size={10} />
              Filter
            </div>
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none ${
                    isSelected 
                      ? 'bg-[#141414] text-[#F5F5F4] font-black scale-100 shadow-sm' 
                      : 'text-stone-600 hover:text-[#141414] hover:bg-[#141414]/5'
                  }`}
                  id={`filter-${cat}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Interactive Layout Switcher */}
          <div className="flex items-center gap-1 bg-stone-200/50 border border-[#141414]/10 p-1.5 rounded-2xl" id="view-mode-toggle">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 rounded-xl font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-1.5 ${
                viewMode === 'grid'
                  ? 'bg-[#141414] text-[#F5F5F4] scale-100 shadow-sm'
                  : 'text-stone-600 hover:text-[#141414] hover:bg-[#141414]/5'
              }`}
              id="toggle-grid-view"
            >
              <Grid size={11} className="opacity-80" />
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3.5 py-1.5 rounded-xl font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-[#141414] text-[#F5F5F4] scale-100 shadow-sm'
                  : 'text-stone-600 hover:text-[#141414] hover:bg-[#141414]/5'
              }`}
              id="toggle-list-view"
            >
              <List size={11} className="opacity-80" />
              List
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            id="projects-grid-layout"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => onSelectProject(project)}
              />
            ))}
          </motion.div>
        ) : (
          /* Projects List Element Container */
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            variants={containerVariants}
            className="flex flex-col border-t border-[#141414]/15"
            id="projects-list-layout"
          >
            {filteredProjects.map((project, index) => {
              const numberString = (index + 1).toString().padStart(2, '0');
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => {
                    setHoveredProject(null); // Clear cursor hover state before navigation
                    onSelectProject(project);
                  }}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-[#141414]/15 py-8 md:py-12 cursor-pointer transition-colors duration-500 hover:bg-[#141414]/[0.015]"
                  id={`project-row-${project.id}`}
                >
                  {/* Row Layout Overlay Background slide */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#141414]/[0.015] to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-center -z-10" />

                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12" id={`project-info-col-${project.id}`}>
                    {/* Visual Number counter */}
                    <span className="font-mono text-xs tracking-widest text-[#141414]/50 group-hover:text-[#141414] transition-colors">
                      {numberString} /
                    </span>

                    {/* Mobile Preview Image Inline display */}
                    <div 
                      className="block md:hidden w-full h-[200px] overflow-hidden rounded-xl border border-[#141414]/10 relative bg-stone-300"
                      id={`project-mobile-thumb-${project.id}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="flex flex-col">
                      {/* Category */}
                      <span className="font-mono text-[10px] tracking-widest text-stone-500 group-hover:text-[#141414]/80 uppercase transition-colors duration-300 mb-1.5">
                        {project.category}
                      </span>
                      {/* Project Title rendered using high-fashion serif italics */}
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal italic text-[#141414] lowercase tracking-normal group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tags & Action Row */}
                  <div className="flex items-center justify-between md:justify-end gap-12 mt-6 md:mt-0" id={`project-action-col-${project.id}`}>
                    {/* Meta Description summary (Visible on desktop) */}
                    <span className="hidden lg:inline font-sans text-[13px] text-stone-500 max-w-sm text-right leading-relaxed">
                      {project.description}
                    </span>

                    {/* Arrow Button hover */}
                    <motion.div
                      className="h-11 w-11 rounded-full bg-stone-200 border border-[#141414]/10 flex items-center justify-center text-[#141414] group-hover:bg-[#141414] group-hover:text-[#F5F5F4] group-hover:border-[#141414] transition-all duration-350"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      id={`project-arrow-${project.id}`}
                    >
                      <ArrowRight 
                        size={16} 
                        className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-350 ease-out" 
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative End Note */}
      <div className="mt-12 text-center" id="end-note">
        <span className="font-mono text-[9px] text-[#141414]/50 tracking-[0.25em] uppercase">
          ✦ DESIGNED FOR SMOOTH FRAME RATES & TOUCH FEEDBACK ✦
        </span>
      </div>
    </section>
  );
}
