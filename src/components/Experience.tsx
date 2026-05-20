"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";

const experiences = [
  {
    role: "QA Automation Engineer",
    company: "PT. Bank Negara Indonesia Tbk. (BNI)",
    logo: "/assets/bni-icon.png",
    period: "Sep 2024 - Present",
    description: "Lead automation engineering for Wondr by BNI, driving mobile and API test automation strategy to ensure platform reliability and accelerate release cycles.",
    highlights: [
      "Architected and implemented 100+ automated test cases for mobile regression using Appium and Maestro.",
      "Developed comprehensive REST API regression suite covering 10+ core banking features using Rest-Assured.",
      "Integrated automated test suites with Jenkins pipelines to enforce quality gates on every build."
    ]
  },
  {
    role: "Quality Assurance Engineer",
    company: "PT. Bank Negara Indonesia Tbk. (BNI)",
    logo: "/assets/bni-icon.png",
    period: "Feb 2024 - Sep 2024",
    description: "Drove end-to-end quality assurance for Wondr by BNI, a high-traffic retail banking mobile application serving millions of users.",
    highlights: [
      "Designed and executed 700+ test cases across Integration Testing, Acceptance Testing, and full regression cycles.",
      "Identified, documented, and tracked 80+ defects in collaboration with cross-functional development teams.",
      "Created detailed test documentation aligned with user stories and Figma designs."
    ]
  },
  {
    role: "Testing Specialist Intern",
    company: "PT CIMB Niaga Tbk.",
    logo: "/assets/cimb-icon.png",
    period: "Feb 2023 - Jun 2023",
    description: "Contributed to software QA for enterprise-grade Custody and Treasury financial system projects.",
    highlights: [
      "Independently authored 50 comprehensive test scripts for the Custody project.",
      "Executed 150 System Integration Tests (SIT) for the Treasury project.",
      "Designed a Test Case Matrix framework providing structured traceability between requirements and test coverage."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey in Quality Assurance.</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 glass p-8 rounded-3xl hover:bg-white/5 transition-colors"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <p className="text-sm text-muted-foreground font-medium mb-2">{exp.period}</p>
                <Badge variant="glass" className="mb-4 inline-flex items-center gap-2">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  )}
                  <span>{exp.company}</span>
                </Badge>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground/80 flex items-start">
                      <span className="mr-2 text-purple-400 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
