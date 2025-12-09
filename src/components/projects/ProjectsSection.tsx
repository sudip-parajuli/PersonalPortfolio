"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "EasyMoto - Bike Rental System",
    description: "A comprehensive bike rental platform featuring real-time availability, secure payments, and a dynamic dashboard for hosts and renters. Built with user-centric design principles.",
    tags: ["Django", "PostgreSQL", "JavaScript", "eSewa Payment"],
    github: "https://github.com/sudip-parajuli/EasyMoto",
  },
  {
    title: "Bike Rental API",
    description: "Robust RESTful API powering the EasyMoto platform. Handles complex booking logic, authentication, and rental tracking with high performance.",
    tags: ["Django Rest Framework", "JWT", "Swagger", "PostgreSQL"],
    github: "https://github.com/sudip-parajuli",
  },
  {
    title: "Movie Recommendation API",
    description: "Intelligent movie recommendation engine using content-based filtering. Provides personalized suggestions based on user viewing history and preferences.",
    tags: ["Python", "Pandas", "Scikit-learn", "FastAPI"],
    github: "https://github.com/sudip-parajuli",
  },
  {
    title: "Next.js Property Listing",
    description: "Modern real estate platform with advanced search filters, map integration, and responsive property galleries.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/sudip-parajuli",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative bg-navy/30">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Featured <span className="text-electric-blue">Work</span></h2>
           <p className="text-slate-muted max-w-2xl text-lg">
             A selection of projects that demonstrate my passion for backend architecture and full-stack development.
           </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
           <a href="https://github.com/sudip-parajuli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-electric-blue hover:underline underline-offset-4 cursor-pointer">
             View complete archive on GitHub
           </a>
        </div>
      </div>
    </section>
  );
}
