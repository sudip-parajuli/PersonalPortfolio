"use client";

import { motion } from "framer-motion";
import { Code, Layers, Zap, Palette, Terminal, Cpu, Play } from "lucide-react";

export default function PlaygroundSection() {
  return (
    <section id="playground" className="py-32 relative overflow-hidden bg-navy-light/10">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Creative <span className="text-neon-purple">Playground</span></h2>
          <p className="text-slate-muted max-w-2xl mx-auto">
             Experimental UI concepts, animations, and backend prototypes. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
           {/* Item 1: Fake Terminal (Large) */}
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="col-span-1 md:col-span-2 row-span-1 bg-card-bg border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl"
           >
              <div className="bg-navy-light px-4 py-2 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">bot.py</span>
              </div>
              <div className="p-4 font-mono text-sm text-green-400">
                <p>$ initializing neural network...</p>
                <p className="text-blue-400">$ loading weights [||||||||||] 100%</p>
                <p>$ agent_status: <span className="text-green-400">ONLINE</span></p>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2.5 h-4 bg-green-400 align-middle"
                />
              </div>
           </motion.div>

           {/* Item 2: Gradient Mesh (Visual) */}
           <motion.div 
             whileHover={{ filter: "hue-rotate(90deg)" }}
             className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-gradient-xy" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                 <Palette className="w-8 h-8 text-white" />
              </div>
           </motion.div>

           {/* Item 3: Glassmorphism Card (Swapped for Video Project in future if needed, but keeping for now) */}
           <motion.div className="col-span-1 row-span-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <Layers className="w-10 h-10 text-electric-blue mb-4" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Glassmorphism</h3>
                <p className="text-sm text-slate-muted">Experimenting with backdrop filters and light refraction for modern UI depth.</p>
              </div>
           </motion.div>

           {/* Item 4: Video / Creative Coding Project */}
           <motion.div 
             className="col-span-1 row-span-1 bg-black rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer"
           >
              <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/40 transition-colors z-10">
                 <div className="w-12 h-12 rounded-full bg-electric-blue/20 backdrop-blur-md flex items-center justify-center border border-electric-blue/50 text-electric-blue scale-0 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-current" />
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                 <h4 className="text-white font-bold text-sm">Generative Art Algo</h4>
                 <p className="text-xs text-gray-300">p5.js Experiment</p>
              </div>
              {/* Placeholder Gradient representing video/canvas */}
              <div className="w-full h-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80" />
           </motion.div>

           {/* Item 5: Interactive Click */}
           <motion.div 
             whileTap={{ scale: 0.95 }}
             className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-2xl border border-electric-blue/30 flex items-center justify-center relative overflow-hidden cursor-pointer group"
           >
              <div className="absolute inset-0 bg-electric-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Zap className="w-8 h-8 text-electric-blue mr-3 z-10" />
              <span className="text-xl font-bold text-foreground z-10">Trigger Interaction</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
