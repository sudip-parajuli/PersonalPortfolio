"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Hero3D />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
          </span>
          <span className="text-electric-blue text-sm font-medium tracking-wide">Available for Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">Sudip Parajuli</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-muted max-w-2xl mb-10 leading-relaxed"
        >
          Fullstack Developer • Freelancer • AI Enthusiast. <br className="hidden md:block"/>
          Building scalable systems and exploring the frontiers of Artificial Intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-electric-blue text-navy font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_40px_rgba(100,255,218,0.5)] transition-all">
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="/Sudip_Parajuli_Resume.pdf" download="Sudip_Parajuli_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-muted/30 hover:border-electric-blue/50 bg-white/5 hover:bg-white/10 text-foreground font-medium rounded-xl backdrop-blur-sm transition-all flex items-center gap-2 justify-center">
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-16 flex items-center gap-6 text-slate-muted"
        >
          <a href="https://github.com/sudip-parajuli" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors transform hover:scale-110"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/sudip-parajuli-8073601a1" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
          <a href="https://x.com/sudip_parajuli" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
          <a href="#contact" className="hover:text-electric-blue transition-colors transform hover:scale-110"><Mail className="w-6 h-6" /></a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-muted/50"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
