# Taxil Portfolio — Next.js

A pixel-perfect clone of the Taxil portfolio website built with Next.js 14 + Tailwind CSS.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + fonts
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── components/
│   ├── Navbar.js          # Fixed top navbar
│   ├── Hero.js            # Hero section with photo
│   ├── Services.js        # Services cards
│   ├── Experience.js      # Work experience list
│   ├── Projects.js        # Portfolio grid
│   ├── Stats.js           # Testimonial + stats
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer
├── public/
│   └── projects/          # Add your project images here
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Tech Stack
- **Next.js 14** — App Router
- **Tailwind CSS** — Styling
- **Syne + DM Sans** — Google Fonts
- **Vercel** — Deployment (recommended)

## 🌐 Deploy on Vercel

```bash
npx vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).

## ✏️ Customization

1. Update content in each component file
2. Replace hero photo in `public/hero-photo.jpg`
3. Add project images in `public/projects/`
4. Update social links and email
