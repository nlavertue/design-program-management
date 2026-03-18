# Deployment Guide - Design Program Management Wireframe

## Quick Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Create a GitHub repository:**
   ```bash
   cd carbon-wireframe
   git init
   git add .
   git commit -m "Initial commit - Design Program Management wireframe"
   ```

2. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch and "/root" folder
   - Click "Save"
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Netlify (Free, Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for a free account
3. Drag and drop the `dist` folder onto Netlify
4. Get instant URL like: `https://random-name-12345.netlify.app`
5. Optional: Customize the URL in site settings

### Option 3: Vercel (Free, CLI or Drag & Drop)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up for a free account
3. Install Vercel CLI: `npm install -g vercel`
4. Run: `vercel --prod`
5. Follow prompts to deploy
6. Get URL like: `https://your-project.vercel.app`

### Option 4: Surge (Free, Simple CLI)

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Deploy:
   ```bash
   cd dist
   surge
   ```

3. Follow prompts to create account and deploy
4. Get URL like: `https://your-project-name.surge.sh`

## Local Preview

To preview the production build locally:

```bash
npm run preview
```

Then share your local network IP with colleagues on the same network.

## Files Structure

```
carbon-wireframe/
├── index.html          # Main application (production-ready)
├── dist/              # Built files for deployment
├── standalone.html    # Original version (archived)
├── standalone-v2.html # Version 2 (archived)
└── index.html.backup  # Original React version (archived)
```

## What's Included

- ✅ Fully functional Carbon Design System wireframe
- ✅ Sortable columns (click headers to sort)
- ✅ Tab filtering (All Products, WP Pilot, Non-Pilot, Rhea)
- ✅ Summary cards with metrics
- ✅ Responsive design
- ✅ No build step required (standalone HTML)
- ✅ Works offline once loaded

## Sharing Tips

1. **For quick sharing:** Use Netlify drag-and-drop (fastest)
2. **For version control:** Use GitHub Pages
3. **For custom domain:** Any of the above support custom domains
4. **For internal network:** Use `npm run preview` and share local IP

## Support

All deployment options above are free for public projects and include:
- HTTPS by default
- Automatic deployments
- Custom domains (optional)
- Analytics (optional)