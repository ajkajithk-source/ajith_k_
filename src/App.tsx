import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PROJECTS } from './data';
import { Project, Section } from './types';
import Navigation from './components/Navigation';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import AboutContact from './components/AboutContact';
import CustomCursor from './components/CustomCursor';
import { ArrowDown, Code, Palette, Globe, Layers, Copyright, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('works');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-[#141414] selection:bg-[#141414] selection:text-[#F5F5F4] relative transition-colors duration-500" id="layout-root">
      
      {/* 1. Fluid Custom Interactive Follower Cursor */}
      <CustomCursor hoveredProject={hoveredProject} isActive={!selectedProject} />

      {/* 2. Primary Navigation Header */}
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={(sec) => {
          setCurrentSection(sec);
          setSelectedProject(null); // Direct state reset on Navigation tab changes
        }}
        openAboutDirectly={() => {
          setCurrentSection('about');
          setSelectedProject(null);
        }}
      />

      {/* 3. Main Views Layout Canvas */}
      <main className="relative z-10" id="main-content-canvas">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            /* Selected Detailed Case Study overlay */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetail 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
              />
            </motion.div>
          ) : (
            /* Primary Tab Sections views */
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              id={`section-${currentSection}-viewport`}
            >
              {currentSection === 'works' && (
                <>
                  {/* AJITH TYPOGRAPHIC HERO INTRODUCTION JUMBOTRON */}
                  <section className="pt-16 pb-12 md:pt-28 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#141414]/10 relative overflow-hidden" id="main-profile-hero">
                    
                    {/* Background architectural grid layout */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#14141404_1px,transparent_1px),linear-gradient(to_bottom,#14141404_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10" id="hero-layout-grid">
                      {/* Left Block: Enormous typography */}
                      <div className="lg:col-span-8 space-y-4" id="hero-typography-block">
                        
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="inline-flex items-center gap-1.5 bg-[#141414]/5 border border-[#141414]/10 px-3.5 py-1.5 rounded-full font-mono text-[9px] text-stone-600 tracking-widest uppercase mb-1.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#141414] animate-pulse" />
                          Visual Designer & Creative Developer
                        </motion.div>

                        <h1 className="font-display text-7xl sm:text-9xl md:text-[11rem] font-bold leading-[0.75] tracking-tighter uppercase text-[#141414]" id="hero-display-title">
                          <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block -ml-1 text-[#141414]"
                          >
                            AJITH
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block font-serif lowercase italic text-[#141414]/30 hover:text-[#141414] transition-colors duration-500 cursor-default"
                          >
                            portfolio
                          </motion.span>
                        </h1>
                      </div>

                      {/* Right Block: Core focus tagline cards */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 lg:pt-12 space-y-8"
                        id="hero-tagline-block"
                      >
                        <p className="font-sans text-base sm:text-lg text-[#141414]/90 font-normal leading-relaxed tracking-wide">
                          Crafting high-performance digital experiences with a focus on editorial typography, fluid motion archives, and interactive storytelling.
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#141414]/10" id="hero-core-pillars">
                          <div className="space-y-1">
                            <Code size={16} className="text-[#141414] shrink-0 opacity-70" />
                            <span className="block font-mono text-[10px] text-[#141414] uppercase font-bold mt-1">Full Craft</span>
                            <span className="block font-sans text-[10px] text-stone-500">Tactile UI</span>
                          </div>
                          <div className="space-y-1">
                            <Palette size={16} className="text-[#141414] shrink-0 opacity-70" />
                            <span className="block font-mono text-[10px] text-[#141414] uppercase font-bold mt-1">Visuals</span>
                            <span className="block font-sans text-[10px] text-stone-500">Editorial</span>
                          </div>
                          <div className="space-y-1">
                            <Layers size={16} className="text-[#141414] shrink-0 opacity-70" />
                            <span className="block font-mono text-[10px] text-[#141414] uppercase font-bold mt-1">Speed</span>
                            <span className="block font-sans text-[10px] text-stone-500">Smooth FPS</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Scroll prompt banner */}
                    <div className="mt-16 sm:mt-24 flex items-center justify-between" id="hero-footer-bar">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-[#141414]/50 uppercase tracking-widest">
                          Scroll to Explore Index
                        </span>
                        <ArrowDown size={12} className="text-[#141414]/40 animate-bounce" />
                      </div>
                      <span className="font-mono text-[9px] text-[#141414]/50 tracking-[0.2em] font-semibold">
                        SELECTED EXHIBITS (04)
                      </span>
                    </div>
                  </section>

                  {/* Primary interactive works list */}
                  <ProjectList 
                    projects={PROJECTS} 
                    setHoveredProject={setHoveredProject} 
                    onSelectProject={setSelectedProject} 
                  />
                </>
              )}

              {currentSection === 'about' && (
                <AboutContact initialTab="about" />
              )}

              {currentSection === 'contact' && (
                <AboutContact initialTab="contact" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Elegant Minimalist Footer Container */}
      <footer className="border-t border-[#141414]/10 py-12 px-6 md:px-12 bg-[#EBEBE9]/40 mt-16 relative z-10" id="main-footer">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-inner-wrapper">
          <div className="flex items-center gap-3">
            <Copyright size={12} className="text-stone-500" />
            <span className="font-mono text-[10px] text-stone-500 tracking-wider">
              {new Date().getFullYear()} AJITH STUDIO. ALL ENGINES REGISTERED.
            </span>
          </div>

          <div className="flex items-center gap-6" id="footer-social-links">
            {['GitHub', 'LinkedIn', 'Twitter'].map(social => (
              <a
                key={social}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] text-stone-500 hover:text-[#141414] transition-colors duration-300 flex items-center gap-1 group"
                id={`footer-social-${social.toLowerCase()}`}
              >
                {social}
                <ArrowUpRight size={10} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
