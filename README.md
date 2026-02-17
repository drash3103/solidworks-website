# CAB Authorized - SEO-Friendly Next.js Website

A production-ready, SEO-optimized frontend website built with Next.js 15 (App Router) and JavaScript, designed for deployment on Vercel.

## 🚀 Features

### Frontend Architecture
- **Next.js 15 App Router** with JavaScript
- **Static Site Generation (SSG)** for optimal performance
- Clean, scalable, and maintainable code structure
- Backend-ready architecture (easy to extend later)

### SEO Optimization
- Complete metadata API implementation
- Open Graph and Twitter Card tags
- Structured data (JSON-LD) for rich snippets
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML with proper heading hierarchy
- Image optimization with next/image
- Canonical URLs for all pages

### Pages
- `/` - Home
- `/about` - About Us
- `/services` - Services Overview
- `/services/solidworks-training` - SolidWorks Training
- `/services/placement` - Placement Services
- `/services/design-services-manpower` - Design Services & Manpower

### Content Management
Content is separated from code using JSON files in `/content`:
- `siteMeta.json` - Global site metadata
- `services.json` - Services data
- `courses.json` - Course information
- `gallery.json` - Gallery items

## 📁 Project Structure

```
├── app/
│   ├── layout.js                 # Root layout with global SEO
│   ├── page.js                   # Home page
│   ├── about/
│   │   └── page.js              # About page
│   ├── services/
│   │   ├── page.js              # Services overview
│   │   ├── solidworks-training/
│   │   ├── placement/
│   │   └── design-services-manpower/
│   ├── sitemap.js               # Dynamic sitemap
│   └── robots.js                # Robots.txt
│
├── components/
│   ├── common/                   # Reusable components
│   │   ├── Button.js
│   │   └── Card.js
│   ├── layout/                   # Layout components
│   │   ├── Header.js
│   │   └── Footer.js
│   └── seo/                      # SEO components
│       ├── StructuredData.js
│       └── Breadcrumb.js
│
├── content/                      # JSON content files
│   ├── siteMeta.json
│   ├── services.json
│   ├── courses.json
│   └── gallery.json
│
├── styles/
│   └── globals.css              # Global styles
│
└── utils/
    └── seo.js                   # SEO utility functions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev

# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
