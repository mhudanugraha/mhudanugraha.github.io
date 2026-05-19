"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Test Automation",
    skills: ["Appium", "Maestro", "Rest-Assured", "Selenium", "Cucumber BDD"]
  },
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "SQL"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Jenkins", "Git", "Docker", "Postman", "Jira", "DBeaver"]
  },
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "SDLC/STLC", "Shift-Left Testing", "Risk-Based Testing"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground">The tools and technologies I use to ensure quality.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-muted-foreground hover:bg-white/10 hover:text-white hover:border-purple-500/50 transition-all cursor-default"
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
