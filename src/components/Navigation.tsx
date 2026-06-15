import { Section } from '../types';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  openAboutDirectly: () => void;
}

export default function Navigation({ currentSection, setCurrentSection, openAboutDirectly }: NavigationProps) {
  const navItems: { label: string; value: Section }[] = [
    { label: 'WORKS', value: 'works' },
    { label: 'ABOUT', value: 'about' },
    { label: 'CONTACT', value: 'contact' },
  ];

  return (
    <header 
      className="sticky top-0 z-40 bg-[#F5F5F4]/85 backdrop-blur-md border-b border-[#141414]/10 py-5 px-6 md:px-12 transition-all duration-300"
      id="main-header"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between" id="header-container">
        {/* Logo Branding */}
        <motion.button
          onClick={() => setCurrentSection('works')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          id="brand-logo"
        >
          <div className="relative h-7 w-7 bg-[#141414] rounded-md flex items-center justify-center overflow-hidden">
            <span className="font-display font-black text-[#F5F5F4] text-sm leading-none">A</span>
            <div className="absolute inset-0 bg-white/15 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 ease-in-out" />
          </div>
          <div className="text-left leading-none">
            <span className="font-display text-[14px] font-bold tracking-widest text-[#141414] group-hover:text-stone-600 transition-colors duration-300">
              AJITH
            </span>
            <span className="block font-mono text-[8px] text-stone-500 tracking-wider mt-0.5">
              CREATIVE DEVELOPER
            </span>
          </div>
        </motion.button>

        {/* Dynamic Slidable Segmented Navigation Tab bar */}
        <nav className="flex items-center gap-1.5 md:gap-2.5 bg-stone-200/50 border border-[#141414]/10 py-1 px-1 rounded-xl" id="main-nav">
          {navItems.map((item) => {
            const isActive = currentSection === item.value;
            return (
              <button
                key={item.value}
                onClick={() => setCurrentSection(item.value)}
                className={`relative px-4 py-2 font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none rounded-lg ${
                  isActive ? 'text-[#F5F5F4]' : 'text-stone-600 hover:text-[#141414]'
                }`}
                id={`nav-btn-${item.value}`}
              >
                {/* Micro layout layer container targeting background slider */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-[#141414] rounded-md -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: CTA to speak or check availability */}
        <div className="hidden md:flex items-center gap-6" id="header-meta">
          <div className="flex flex-col text-right">
            <span className="font-mono text-[9px] text-[#141414] flex items-center justify-end gap-1.5 font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 block animate-pulse" />
              AVAILABLE FOR ROLES
            </span>
            <span className="font-mono text-[10px] text-stone-500 mt-0.5">
              UTC+5:30 (Bengaluru)
            </span>
          </div>
          <motion.a
            href="mailto:ajajithk12@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-[#141414]/5 border border-[#141414]/15 hover:bg-[#141414] hover:text-[#F5F5F4] hover:border-[#141414] px-4 py-2.5 rounded-xl font-mono text-[11px] text-[#141414] transition-all duration-350"
            id="nav-cta-email"
          >
            <Mail size={12} className="opacity-75" />
            LET'S CHAT
            <ArrowUpRight size={10} className="opacity-50" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
