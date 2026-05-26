"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I&apos;m a results-driven Quality Assurance Engineer with 2+ years of hands-on experience in software testing, test automation, and API validation within high-stakes banking and financial technology environments.
            </p>
            <p>
              I have demonstrated expertise in building production-grade automation frameworks using Appium, Maestro, and Rest-Assured. My strong foundation in SDLC, STLC, and Agile/Scrum methodologies allows me to effectively integrate into fast-paced development teams.
            </p>
            <p>
              I have a track record of achieving a 60%+ reduction in test execution time through strategic script refactoring and reusable automation architecture. I am passionate about elevating software quality through continuous improvement, meticulous defect analysis, and comprehensive end-to-end test coverage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
