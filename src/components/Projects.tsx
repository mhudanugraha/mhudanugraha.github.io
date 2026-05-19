"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mobile Automation Framework",
    description: "A robust Page Object Model-based mobile testing framework built with Appium and Maestro. Supports iOS and Android parallel execution.",
    tech: ["Appium", "Maestro", "Java", "Cucumber"],
    github: "#",
    live: "#"
  },
  {
    title: "REST API Regression Suite",
    description: "Data-driven API testing framework for core banking features, incorporating schema validation and dynamic parameterized data.",
    tech: ["Rest-Assured", "Java", "TestNG", "Jenkins"],
    github: "#",
    live: "#"
  },
  {
    title: "Custody System Test Matrix",
    description: "Comprehensive QA tracking framework mapping requirements to functional edge cases, boundary conditions, and data integrity checks.",
    tech: ["Jira", "SQL", "Postman", "Excel"],
    github: "#",
    live: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Showcasing my technical implementations in QA Automation.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-3xl p-6 flex flex-col hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-purple-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center border border-white/5">
                  <span className="text-purple-400 font-bold">{project.title.charAt(0)}</span>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs text-muted-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
