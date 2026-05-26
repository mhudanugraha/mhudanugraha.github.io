"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const dockItems = [
  { 
    icon: Mail, 
    href: "mailto:hudanugraha12@gmail.com", 
    label: "Email",
    target: "_self"
  },
  { 
    icon: GithubIcon, 
    href: "https://github.com/mhudanugraha", 
    label: "GitHub",
    target: "_blank"
  },
  { 
    icon: LinkedinIcon, 
    href: "https://www.linkedin.com/in/mhudanugraha/", 
    label: "LinkedIn",
    target: "_blank"
  },
  { 
    icon: InstagramIcon, 
    href: "https://instagram.com/mhudanugraha", 
    label: "Instagram",
    target: "_blank"
  }
];

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.08,
    borderColor: "rgba(255, 255, 255, 0.25)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    boxShadow: "0 0 30px rgba(255, 255, 255, 0.08)"
  }
};

const iconVariants = {
  initial: { y: 0 },
  hover: { y: -3 }
};

export function FloatingContactDock() {
  return (
    <>
      {/* Desktop Sidebar (Fixed Right) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md text-white/80 hover:text-white cursor-pointer relative group transition-colors duration-300"
          >
            <motion.div 
              variants={iconVariants} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <item.icon className="w-5 h-5" />
            </motion.div>
            
            {/* Tooltip */}
            <span className="absolute right-16 bg-black/80 backdrop-blur-md text-[10px] tracking-wider uppercase text-white/90 px-2.5 py-1.5 rounded-lg border border-white/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none origin-right">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-5 px-5 py-3 rounded-3xl bg-black/40 backdrop-blur-lg border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-11 h-11 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:text-white cursor-pointer transition-colors duration-300"
          >
            <motion.div 
              variants={iconVariants} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <item.icon className="w-4 h-4" />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </>
  );
}
