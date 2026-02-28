# Deployment Guide

## Quick Start (Local Development)

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to: http://localhost:5173

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

Or use the Vercel dashboard:
- Go to https://vercel.com
- Import your GitHub repository
- Vercel will auto-detect Vite and deploy

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist/` folder to Netlify

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you need environment variables, create a `.env` file:

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Custom Domain

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS

## Performance Tips

- Images are optimized
- CSS is minified
- JavaScript is bundled and minified
- Lazy loading implemented where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist`

### Styles not loading
- Check import paths in components
- Verify CSS files exist

### 404 on refresh (SPA routing)
- Configure server for SPA routing
- Vercel/Netlify handle this automatically

## Support

For issues or questions:
- Email: satvikdb04@gmail.com
- GitHub: https://github.com/SatvikDB
