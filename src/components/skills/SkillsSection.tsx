"use client";

import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  Frameworks: ["Django", "Rest Framework", "Next.js", "React", "Tailwind CSS"],
  Tools: ["Git", "PostgreSQL", "Docker", "JWT", "Postman", "VS Code"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical <span className="text-electric-blue">Arsenal</span></h2>
          <p className="text-slate-muted max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-card-bg backdrop-blur-sm border border-black/5 dark:border-white/5 p-8 rounded-2xl hover:border-electric-blue/30 transition-colors group"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 border-b border-foreground/5 pb-2 inline-block pr-6 group-hover:text-electric-blue transition-colors">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-slate-muted border border-white/5 hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
