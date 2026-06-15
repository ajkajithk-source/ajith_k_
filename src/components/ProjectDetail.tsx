import { Project } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, User, Briefcase, Tag, Compass } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F5F5F4] text-[#141414] pb-24"
      id={`project-detail-layout-${project.id}`}
    >
      {/* 1. Header Navigation Back rail */}
      <div className="border-b border-[#141414]/10 bg-[#F5F5F4]/80 backdrop-blur-md sticky top-0 z-30" id="detail-header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <motion.button
            onClick={onClose}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 font-sans text-xs font-bold tracking-widest text-[#141414] uppercase group cursor-pointer focus:outline-none"
            id="detail-back-btn"
          >
            <ArrowLeft size={14} className="stroke-[2.5]" />
            Back to archive
          </motion.button>

          <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
            PROJECT / {project.title.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16" id="detail-content-container">
        {/* 2. Headline Title & Category */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-stone-500 font-mono text-[10px] tracking-widest uppercase mb-4"
          >
            <Compass size={12} className="animate-spin-slow opacity-60" />
            {project.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl font-normal italic lowercase tracking-tight leading-[0.85] text-[#141414]"
            id="detail-project-title"
          >
            {project.title}
          </motion.h1>
        </div>

        {/* 3. High-Fidelity Hero Image Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl border border-[#141414]/10 mb-12 md:mb-20 shadow-xl bg-stone-300"
          id="detail-hero-frame"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
            id={`detail-hero-image-${project.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/10 via-transparent to-transparent" />
        </motion.div>

        {/* 4. Split Grid: Details Metadata & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20" id="detail-split-grid">
          {/* Left Column: Story & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
            id="detail-narrative-col"
          >
            <h3 className="font-sans text-xs tracking-widest font-bold uppercase text-stone-500 border-b border-[#141414]/10 pb-3">
              Concept Narrative
            </h3>
            <p className="font-serif text-xl sm:text-2xl font-normal leading-relaxed text-[#141414] tracking-wide italic">
              {project.description}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-stone-700">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Right Column: Key Details Spec Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 bg-stone-200/40 border border-[#141414]/10 rounded-3xl p-6 sm:p-8 space-y-8"
            id="detail-specs-col"
          >
            <h3 className="font-sans text-[11px] tracking-widest font-bold uppercase text-[#141414]">
              Project Specifications
            </h3>

            {/* Spec Table list */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-b border-[#141414]/10 pb-4">
                <Briefcase size={14} className="text-stone-700 mt-1 shrink-0 opacity-70" />
                <div>
                  <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">Client</span>
                  <span className="font-sans text-sm font-semibold text-[#141414]">{project.client}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-[#141414]/10 pb-4">
                <User size={14} className="text-stone-700 mt-1 shrink-0 opacity-70" />
                <div>
                  <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">My Role</span>
                  <span className="font-sans text-sm font-semibold text-[#141414]">{project.role}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-b border-[#141414]/10 pb-4">
                <Calendar size={14} className="text-stone-700 mt-1 shrink-0 opacity-70" />
                <div>
                  <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">Release Year</span>
                  <span className="font-sans text-sm font-semibold text-[#141414]">{project.year}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-2">
                <Tag size={14} className="text-stone-700 mt-1 shrink-0 opacity-70" />
                <div className="w-full">
                  <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest mb-2">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-stone-200 text-stone-800 font-mono text-[10px] px-2.5 py-1 rounded-md border border-[#141414]/10"
                        id={`tech-badge-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live View button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 rounded-xl bg-[#141414] text-[#F5F5F4] font-sans text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm cursor-pointer focus:outline-none hover:bg-stone-800 transition-colors"
              id="detail-action-launch"
            >
              Launch Live Sandbox
              <ExternalLink size={12} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
