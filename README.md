# AI Tools by Industry

Production-style programmatic SEO site built with Next.js App Router, TypeScript, Tailwind CSS, and local data files.

## What is included

- Homepage
- `/industries`
- `/best-ai-tools-for-[industry]` pages via static params
- `/tools/[slug]`
- `/compare/[tool-a]-vs-[tool-b]`
- `/about`
- `/contact`
- `/privacy`
- `/disclosure`
- Dynamic metadata
- `sitemap.xml`
- `robots.txt`

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production checks

```bash
npm run lint
npm run build
```

## Deployment on Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain, such as `https://www.yourdomain.com`.
4. Deploy with the default Next.js settings.

## Scaling content

- Add or edit industries in [`src/data/industries.ts`](/Users/anthonycastagnaro/ai-tools-by-industry/src/data/industries.ts)
- Add or edit tools in [`src/data/tools.ts`](/Users/anthonycastagnaro/ai-tools-by-industry/src/data/tools.ts)
- All industry, tool, comparison, sitemap, and internal-link pages regenerate from those files.
