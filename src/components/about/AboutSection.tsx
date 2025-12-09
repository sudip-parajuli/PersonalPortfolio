"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "Current",
    title: "Founding Member",
    description: "Spearheading technical strategy and product development at TECHWIRED SOLUTIONS.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Fullstack Developer & Project Lead",
    description: "Led development at EasyMoto Rental Service, managing the full stack (Django/React).",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2021-2025",
    title: "Bachelors in Computer Science",
    description: "Focused on Software Engineering, Data Structures, and Algorithms.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-navy/50">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-light/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-12 bg-electric-blue"></span>
            <span className="text-electric-blue font-medium uppercase tracking-wider text-sm">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Building digital experiences with <span className="text-electric-blue">Fullstack Precision</span>.
          </h2>
          <p className="text-slate-muted text-lg leading-relaxed mb-6">
            I'm Sudip Parajuli, a developer based in <span className="text-foreground font-medium">Nepal</span> with a passion for robust backend systems, dynamic frontends, and modern AI integration.
          </p>
          <p className="text-slate-muted text-lg leading-relaxed mb-8">
            My journey started with Python and Django, but I've evolved into a Fullstack Developer and Project Lead. I'm now exploring the frontiers of LLMs and autonomous agents.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="text-electric-blue" /> Remote / Nepal
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="text-electric-blue" /> Available
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 space-y-12">
           {timeline.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               className="relative"
             >
               <span className="absolute -left-[45px] top-1 p-2 bg-navy border border-electric-blue/50 rounded-full text-electric-blue shadow-[0_0_10px_rgba(100,255,218,0.2)]">
                  {item.icon}
               </span>
               <span className="text-sm text-electric-blue font-mono mb-1 block">{item.year}</span>
               <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
               <p className="text-slate-muted">{item.description}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
