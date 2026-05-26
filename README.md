# 💻 Muhammad Huda Nugraha - Personal Portfolio Website

A sleek, premium, and highly interactive developer portfolio website designed for **Muhammad Huda Nugraha**, a QA Automation Engineer. Built with modern web standards, incorporating smooth animations, responsive glassmorphism designs, and structured modular code.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router architecture, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first theme configuration)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (physics-based springs and viewport entry animations)
- **Icons**: [Lucide React](https://lucide.dev/) (clean, vector icons)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict type-safety)

---

## ✨ Core Features

- **Responsive Design**: Mobile-first fluid layout with custom sidebar navigation (desktop) and floating bottom dock navigation (mobile).
- **Glassmorphism UI**: High-end aesthetic using semi-transparent layers, backdrop filters, and subtle radial gradient lighting backgrounds.
- **Micro-Animations**: Smooth spring-based hover states and coordinate transitions.
- **Scroll Animations**: Viewport-triggered sliding/fading transitions for elements on scroll.
- **Performant & SEO-Optimized**: Pre-configured fonts, semantic HTML5 structure, and search engine metadata.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm` (default) or `pnpm`/`yarn`

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mhudanugraha/mhudanugraha.github.io.git
   cd mhudanugraha.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Production Build:**
   ```bash
   npm run build
   ```
   This generates a production-optimized build in the `.next/` directory.

5. **Linting check:**
   ```bash
   npm run lint
   ```

---

## 📁 Directory Structure

```text
mhudanugraha.github.io/
├── public/                       # Static public assets (images, logos, favicon)
│   ├── assets/                   # Icon assets (e.g. bni-icon.png, cimb-icon.png)
│   ├── profile.jpg               # Hero section profile photo
│   └── favicon.ico               # Browser tab favicon
├── src/
│   ├── app/                      # Next.js App Router Page layouts & global styles
│   │   ├── globals.css           # Tailwind CSS directives, theme variables, and global overrides
│   │   ├── layout.tsx            # Global HTML wrapper (handles metadata, Inter font, background)
│   │   └── page.tsx              # Main entry page containing section assemblies
│   ├── components/               # Modular UI sections and custom elements
│   │   ├── ui/                   # Reusable base elements (badges, buttons)
│   │   ├── About.tsx             # "About Me" description section
│   │   ├── Contact.tsx           # Footer and copy section
│   │   ├── Experience.tsx        # Vertical journey/experience timeline
│   │   ├── FloatingContactDock.tsx # Desktop side dock and mobile floating bottom dock
│   │   ├── Hero.tsx              # Welcoming section (title, primary CTA, socials)
│   │   ├── Navigation.tsx        # Top fixed header navigation bar
│   │   ├── Projects.tsx          # Card showcase grid of QA/Dev projects
│   │   └── Skills.tsx            # Categorized technical arsenal grid
│   └── lib/                      # Common application helpers
│       └── utils.ts              # Helper class-name merging functions (clsx + tailwind-merge)
├── docs/                         # Additional developer guides
│   ├── architecture.md           # Visual layout, design tokens, styling structures
│   └── deployment.md             # How to build and deploy to GitHub Pages
├── next.config.ts                # Next.js build-time configuration
├── tailwind.config.js / postcss  # CSS post-processors configuration
└── tsconfig.json                 # TypeScript compiler options configuration
```

---

## ⚙️ Customization Guide

This project is fully modular, making it very easy to update content. Here is a directory of where to make edits:

### 1. Update Profile Image
Replace `/public/profile.jpg` with your own photo. Ensure the filename remains exactly `profile.jpg` (or edit the path in [Hero.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/Hero.tsx#L22)).

### 2. Edit Profile Details (Hero & About)
- **Title and Socials**: Modify [Hero.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/Hero.tsx) lines 33-80 to change your name, subtitle, and primary social media links (LinkedIn/Email).
- **Bio**: Modify [About.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/About.tsx) lines 21-31 to rewrite your bio paragraphs.

### 3. Edit Experience Timeline
Open [Experience.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/Experience.tsx). Update the `experiences` array starting at **line 7**:
```typescript
const experiences = [
  {
    role: "Your Role Title",
    company: "Company Name",
    logo: "/assets/company-logo.png", // Placed in /public/assets/
    link: "https://company-link.com",
    period: "Month Year - Present",
    description: "Brief summary of your responsibilities.",
    highlights: [
      "Key achievement bullet point 1.",
      "Key achievement bullet point 2."
    ]
  },
  // Add more entries here...
];
```

### 4. Edit Projects List
Open [Projects.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/Projects.tsx). Update the `projects` array starting at **line 7**:
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Detailed description of the QA framework/project you built.",
    tech: ["Appium", "Java", "Cucumber"], // Badges shown on the card
    github: "https://github.com/yourusername/project-repo",
    live: "https://your-live-project.com" // Set to "#" if not applicable
  },
  // Add more projects...
];
```

### 5. Edit Technical Skills
Open [Skills.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/Skills.tsx). Add/remove skills from `skillCategories` starting at **line 5**:
```typescript
const skillCategories = [
  {
    title: "Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories...
];
```

### 6. Edit Floating Contact Dock
Open [FloatingContactDock.tsx](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/src/components/FloatingContactDock.tsx). Update the `dockItems` array starting at **line 6** with your social media profiles and links. Icons are dynamically rendered from `lucide-react`.

---

## 📖 Deep-Dive Guides

For advanced developers wishing to tweak styling or deploy:
* **[Architecture & Design Guide](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/docs/architecture.md)**: Deep dive into Tailwind CSS v4 variables, theme structures, glassmorphic styles, and Framer Motion animation configurations.
* **[GitHub Pages Deployment Guide](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/docs/deployment.md)**: How to export this project as a static website and set up GitHub Actions automated deployment.
