# 🚀 GitHub Pages Deployment Guide

Since this repository is named `mhudanugraha.github.io`, it is configured to be deployed as a static site on **GitHub Pages**. This guide outlines how to build the site, configure the Next.js static export, and set up automatic deployment using GitHub Actions.

---

## 🏗️ Static Site Generation (SSG) Configuration

Next.js is configured in [next.config.ts](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/next.config.ts) to build as a static application:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables Static HTML Export (SSG)
  images: {
    unoptimized: true, // Disables server-side image optimization (required for static hosts)
  },
};

export default nextConfig;
```

### Key Differences in Static Export Mode
1. **Dynamic Features**: Features like API Routes (`/api/...`), Server Actions, or dynamic headers are disabled. The site relies entirely on client-side React logic.
2. **Build Output**: Running `npm run build` will create a folder named `out/` (instead of `.next/`). The `out/` folder contains pure HTML, CSS, JS, and asset files that can be served by any static hosting provider.
3. **No Dev Server Needed**: You can run and inspect the static build locally using a simple file server:
   ```bash
   npx serve out
   ```

---

## 🤖 Automated Deployment via GitHub Actions (Recommended)

You can set up a GitHub Actions workflow that automatically builds and deploys your website every time you push to the `main` branch.

### Step 1: Create the Workflow File
Create a new file in your project under `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # Or "master" if your default branch is master

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install Dependencies
        run: npm ci

      - name: Build Next.js Site
        run: npm run build

      # Deploy using GitHub Pages Action (pushes the 'out' directory to the 'gh-pages' branch)
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out # The static export folder created by next.js
          branch: gh-pages # The branch the action will push build files to
```

### Step 2: Configure GitHub Repository Settings
Once you push the workflow file to GitHub, complete these steps in your repository interface:

1. Open your repository on GitHub.
2. Go to **Settings** > **Pages** (under the Code and automation section).
3. Under **Build and deployment**:
   - Set **Source** to **Deploy from a branch**.
   - Set **Branch** to **`gh-pages`** and the folder to **`/ (root)`**.
   - Click **Save**.
4. (Optional) If you have a custom domain (e.g. `mhudanugraha.com`), enter it in the **Custom domain** field and save. Be sure to configure the corresponding DNS CNAME/A records with your domain registrar.

---

## ⚠️ Troubleshooting Common Issues

### 1. Images Not Loading
Ensure you are using Next.js `<Image />` tags correctly. Because `images.unoptimized` is enabled, images are served as regular HTML assets.
- Keep images inside the `public/` directory (e.g., `public/profile.jpg`).
- Reference them relative to the root path: `<Image src="/profile.jpg" ... />`. Do **not** use `../public/...` path styles.

### 2. Custom Domain HTTPS Certificate Pending
When you first add a custom domain, GitHub Pages can take up to 24 hours to generate the Let's Encrypt SSL certificate. If the page is inaccessible over `https://`, wait a few hours and click **Enforce HTTPS** in the GitHub Pages settings.

### 3. Missing `out` Directory on Custom Builds
If you run `npm run build` and do not see the `out` directory locally, verify that `nextConfig.output` is set to `"export"` inside [next.config.ts](file:///Users/hudanugraha/Documents/antiGravity/personal-website/mhudanugraha.github.io/next.config.ts). If the property is missing or commented out, it will defaults to a standard server build.
