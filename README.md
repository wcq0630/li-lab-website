# Li-lab Website Starter

A lightweight academic laboratory homepage built with Astro and plain CSS.

## Local development

```bash
npm install
npm run dev
```

Open: http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Where to edit content

Most placeholder content is in:

```text
src/data/lab.ts
```

Main page:

```text
src/pages/index.astro
```

Styles:

```text
src/styles/global.css
```

Images:

```text
public/images/
```

## Deploy options

Recommended: Vercel or GitHub Pages.

For Vercel:
1. Push this folder to GitHub.
2. Import the GitHub repository in Vercel.
3. Build command: `npm run build`.
4. Output directory: `dist`.

For GitHub Pages, configure GitHub Actions to build Astro and publish `dist`.
