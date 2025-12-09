"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "GitHub Contributions", value: "100+" },
  { label: "LeetCode Problems", value: "50+" },
  { label: "Completed Projects", value: "10+" },
  { label: "Years Experience", value: "2+" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy-light/20 border-y border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</h3>
            <p className="text-slate-muted text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
