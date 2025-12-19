# Vineela Sridhara - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and an interactive UI.

## ✨ Features

### 🎨 Design & UX

- **Modern, Clean Design** - Professional aesthetic with attention to detail
- **Dark/Light Mode** - System-aware theme with manual toggle
- **Smooth Animations** - Framer Motion for engaging interactions
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Sticky Navigation** - Easy access to all sections
- **Progress Indicators** - Visual feedback as users scroll

### 📱 Sections

1. **Hero Section** - Dynamic rotating taglines with quick stats
2. **About** - Personal introduction and professional philosophy
3. **Impact Metrics** - Visual dashboard of achievements
4. **Skills** - Filterable tech stack with categories
5. **Projects** - Showcase with live demos and GitHub links
6. **Experience** - Timeline with expandable details
7. **Education** - Academic background
8. **Contact** - Form with social links and availability status

### 🚀 Technical Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- next-themes for dark mode
- SEO optimized with metadata
- Performance optimized

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── ui/
│       ├── globals.css     # Global styles
│       └── fonts.ts        # Font configuration
├── components/
│   ├── Navigation.tsx      # Sticky header navigation
│   ├── Hero.tsx           # Hero section with CTA
│   ├── About.tsx          # About section
│   ├── ImpactMetrics.tsx  # Metrics dashboard
│   ├── Skills.tsx         # Skills with filters
│   ├── Projects.tsx       # Project showcase
│   ├── Experience.tsx     # Timeline experience
│   ├── Education.tsx      # Education cards
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer component
├── data/
│   └── ResumeData.tsx     # All content data
├── public/
│   ├── Linkedinpic.jpeg   # Profile image
│   ├── resume.pdf         # Resume PDF
│   └── projects/          # Project images
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 Customization

### Update Personal Information

Edit `data/ResumeData.tsx` to update:

- Personal info and contact details
- Work experience
- Projects
- Skills and technologies
- Education
- Impact metrics

### Styling

- Modify `tailwind.config.ts` for theme colors
- Edit `app/ui/globals.css` for global styles
- Customize component styles directly in TSX files

### Add New Sections

1. Create component in `components/` folder
2. Import in `app/page.tsx`
3. Add to navigation items in `Navigation.tsx`

## 🌐 Deployment

### Netlify (Recommended)

```bash
npm run build
# Deploy the .next folder
```

### Vercel

```bash
vercel
```

### Custom Server

```bash
npm run build
npm start
```

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://vineelasridhara.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🔧 Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Font:** Inconsolata (Google Fonts)
- **Deployment:** Netlify

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Fully responsive across all devices

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

## 📄 License

© 2024 Vineela Sridhara. All rights reserved.

## 📧 Contact

- **Email:** sridharavineela304@gmail.com
- **LinkedIn:** [linkedin.com/in/vsridha](https://www.linkedin.com/in/vsridha)
- **Website:** [vineelasridhara.com](https://vineelasridhara.com)

---

Built with ❤️ using Next.js, React, and Tailwind CSS
