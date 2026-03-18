# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `design-program-management` (or any name you prefer)
   - **Description:** "Design Program Management Dashboard - Carbon Design System"
   - **Visibility:** Choose "Public" (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Copy and paste these commands one at a time in your terminal (from the `carbon-wireframe` directory):

```bash
# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit - Design Program Management wireframe"

# Add your GitHub repository as remote (REPLACE with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

Example:
```bash
git remote add origin https://github.com/johndoe/design-program-management.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**:
   - Select branch: **"main"**
   - Select folder: **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Example:
```
https://johndoe.github.io/design-program-management/
```

GitHub will show you the exact URL in the Pages settings after deployment completes.

## Updating Your Site

Whenever you make changes:

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

## Troubleshooting

### Issue: "Permission denied" when pushing

**Solution:** You may need to authenticate with GitHub. Use one of these methods:

1. **Personal Access Token (Recommended):**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with "repo" permissions
   - Use token as password when prompted

2. **SSH Key:**
   - Follow GitHub's SSH key setup guide
   - Use SSH URL instead: `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

### Issue: Site shows 404 error

**Solutions:**
- Wait 2-3 minutes after enabling Pages
- Check that you selected the correct branch and folder
- Verify `index.html` is in the root directory
- Clear your browser cache

### Issue: Changes not showing up

**Solutions:**
- Wait 1-2 minutes for GitHub to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that your push was successful: `git log` should show your latest commit

## Custom Domain (Optional)

To use your own domain:

1. Add a `CNAME` file to your repository with your domain name
2. Configure DNS settings with your domain provider
3. Follow GitHub's custom domain guide

## Current Repository Status

Your repository is initialized and ready to push. The following files are included:

- ✅ `index.html` - Main application
- ✅ `dist/` - Production build
- ✅ `.gitignore` - Git ignore rules
- ✅ `README.md` - Project documentation
- ✅ `DEPLOYMENT.md` - General deployment guide
- ✅ `package.json` - Project dependencies

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com/
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics