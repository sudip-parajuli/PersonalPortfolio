"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, github, demo, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-navy-light/50 border border-white/5 overflow-hidden hover:border-electric-blue/50 transition-colors"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-navy rounded-lg border border-white/10 group-hover:border-electric-blue/30 transition-colors">
            {/* Placeholder Icon or Logo */}
            <div className="w-6 h-6 bg-gradient-to-tr from-electric-blue to-neon-purple rounded-sm opacity-80" />
          </div>
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-electric-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-electric-blue transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-electric-blue transition-colors">{title}</h3>
        <p className="text-slate-muted mb-6 line-clamp-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-electric-blue/80 px-2 py-1 rounded bg-electric-blue/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
