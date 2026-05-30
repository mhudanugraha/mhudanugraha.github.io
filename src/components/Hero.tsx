"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/10 glass p-1 shadow-2xl relative flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Muhammad Huda Nugraha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            Muhammad Huda <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Nugraha</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
          >
            QA Automation Engineer specializing in Test Automation, Mobile Testing, Appium, Maestro, and CI/CD.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-200" asChild>
              <a href="#experience">
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="glass" className="rounded-full px-8" asChild>
              <a href="/CV.pdf" download>
                Download CV <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
