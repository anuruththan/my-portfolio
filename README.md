```markdown
# Static export & deploy instructions (my-portfolio)

This repository is configured to export a static site using Next.js and deploy to common static hosts.

Local test
1. Install deps:
   - npm ci
2. Build and export:
   - npm run build:export
3. Serve locally:
   - npm run start:static
   - or npx serve -s out -l 3000
4. Open http://localhost:3000

Notes & gotchas
- next/image: Image optimization is not available for fully exported sites. Use <Image unoptimized /> or regular <img> where needed.
- Routing: For client-side routes (SPA behavior) the _redirects file and netlify.toml included add a fallback to index.html for Netlify; for other hosts ensure you configure a fallback to index.html (Cloudflare Pages and Netlify use build output dir "out").
- GitHub Pages subpath: If you host at https://username.github.io/repo, set `basePath` and `assetPrefix` in `next.config.js` (e.g. `basePath: '/repo', assetPrefix: '/repo'`) before building.
- If your site uses server-only features (getServerSideProps, API routes), do not use static export. This setup is for fully static sites only.

Deploy targets
- GitHub Pages:
  - The included workflow will build and push `out/` to the `gh-pages` branch on pushes to `main`.
  - If you publish to a repo subpath, update next.config.js with basePath/assetPrefix before building.
- Netlify:
  - Connect repo, set build command to `npm run build:export` and publish directory to `out`. `_redirects` and `netlify.toml` handle SPA routing.
- Cloudflare Pages:
  - Connect repo, set build command `npm run build:export` and output directory `out`.
- S3 + CloudFront:
  - Upload `out/` to bucket and configure fallback/index documents.
```
