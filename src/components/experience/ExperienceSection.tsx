"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center"
         >
           Professional <span className="text-electric-blue">Journey</span>
         </motion.h2>

         <div className="space-y-12">
            {/* Experience Item 1: Techwired */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-white/10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start"
           >
              {/* Left: Content (Desktop) */}
             <div className="hidden md:block bg-card-bg p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-electric-blue/30 transition-colors text-right">
               <h3 className="text-xl font-bold text-foreground">Founding Member</h3>
               <p className="text-electric-blue text-sm mb-4">TECHWIRED SOLUTIONS</p>
               <ul className="text-slate-muted space-y-2 list-none text-sm">
                 <li>Spearheading technical strategy and product development.</li>
                 <li>Building scalable web solutions for clients.</li>
               </ul>
             </div>

             {/* Center: Dot */}
             <div className="hidden md:flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-electric-blue shadow-[0_0_10px_rgba(100,255,218,0.5)] z-10" />
               <div className="h-full w-px bg-white/10 -mt-2 min-h-[100px]" />
             </div>

             {/* Right: Date (Desktop) */}
             <div className="hidden md:block text-left text-slate-muted font-mono py-2">
               Present
             </div>
             
             {/* Mobile View */}
             <div className="md:hidden bg-card-bg p-6 rounded-xl border border-black/5 dark:border-white/5 mt-4">
               <span className="text-xs text-electric-blue font-mono mb-2 block">Present</span>
               <h3 className="text-xl font-bold text-foreground">Founding Member</h3>
               <p className="text-electric-blue text-sm mb-4">TECHWIRED SOLUTIONS</p>
               <p className="text-slate-muted text-sm">Spearheading technical strategy and product development.</p>
             </div>
           </motion.div>

           {/* Experience Item 2: EasyMoto */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             // transition={{ delay: 0.1 }}
             className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-white/10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start"
           >
             {/* Left: Date (Desktop) */}
             <div className="hidden md:block text-right text-slate-muted font-mono py-2">
               Mar 2025 - Nov 2025
             </div>
             
             {/* Center: Dot */}
             <div className="hidden md:flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-navy border-2 border-slate-500 z-10" />
               <div className="h-full w-px bg-white/10 -mt-2 min-h-[100px]" />
             </div>

             {/* Right: Content */}
             <div className="bg-card-bg p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-electric-blue/30 transition-colors">
               <span className="md:hidden text-xs text-electric-blue font-mono mb-2 block">Mar 2025 - Nov 2025</span>
               <h3 className="text-xl font-bold text-foreground">Fullstack Developer & Project Lead</h3>
               <p className="text-electric-blue text-sm mb-4">EasyMoto Rental Service</p>
               <ul className="text-slate-muted space-y-2 list-disc list-inside text-sm">
                 <li>Led the development of the EasyMoto rental platform.</li>
                 <li>Managed the full stack (Django/React) and team coordination.</li>
                 <li>Implemented key features for booking and fleet management.</li>
               </ul>
             </div>
           </motion.div>

           {/* Experience Item 3: Insight Workshop */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             // transition={{ delay: 0.2 }}
             className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-white/10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start"
           >
              {/* Left: Content (Desktop) */}
             <div className="hidden md:block bg-card-bg p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-electric-blue/30 transition-colors text-right">
               <h3 className="text-xl font-bold text-foreground">Backend Developer Intern</h3>
               <p className="text-electric-blue text-sm mb-4">Insight Workshop</p>
               <ul className="text-slate-muted space-y-2 list-none text-sm">
                 <li>Dec 2024 - Mar 2025</li>
                 <li>Focused on Backend Development with Django + PostgreSQL.</li>
                 <li>Built robust REST APIs and optimized query performance.</li>
               </ul>
             </div>

             {/* Center: Dot */}
             <div className="hidden md:flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-navy border-2 border-slate-500 z-10" />
               <div className="h-full w-px bg-white/10 -mt-2 min-h-[100px]" />
             </div>

             {/* Right: Date (Desktop) */}
             <div className="hidden md:block text-left text-slate-muted font-mono py-2">
               Dec 2024 - Mar 2025
             </div>
             
             {/* Mobile View */}
             <div className="md:hidden bg-card-bg p-6 rounded-xl border border-black/5 dark:border-white/5 mt-4">
               <span className="text-xs text-electric-blue font-mono mb-2 block">Dec 2024 - Mar 2025</span>
               <h3 className="text-xl font-bold text-foreground">Backend Developer Intern</h3>
               <p className="text-electric-blue text-sm mb-4">Insight Workshop</p>
               <p className="text-slate-muted text-sm">Focused on Backend Development with Django + PostgreSQL.</p>
             </div>
           </motion.div>
         </div>
      </div>
    </section>
  );
}
