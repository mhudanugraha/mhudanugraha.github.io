"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Send, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-indigo-500/10 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together.</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hudanugraha12@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hudanugraha12@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Indonesia</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                />
              </div>
              <Button className="w-full rounded-xl bg-white text-black hover:bg-gray-200" size="lg">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-center">
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Muhammad Huda Nugraha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
