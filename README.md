# Usama Bakery Website

**DEMO WEBSITE FOR USAMA CHAUDHRY**

## Status

Last reviewed: September 2026 · release v2026.09

A modern, responsive bakery website built with React and Tailwind CSS. Features a beautiful amber glow design inspired by traditional Pakistani bakeries.

## Features

- Responsive design that works on all devices
- Beautiful amber gradient backgrounds
- Animated hero section with floating elements
- Product showcase with hover effects
- Testimonials section
- Contact form with WhatsApp integration
- Floating WhatsApp button
- Smooth scroll navigation
- Modern UI/UX

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/usama-bakery-website.git

# Navigate to project directory
cd usama-bakery-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and configure the build settings
5. Click "Deploy"

That's it! Your site will be live in seconds.

## Project Structure

```
bakery-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update the component files to change text, images, and products
- **WhatsApp**: Update the phone number in `Contact.jsx` and `WhatsAppButton.jsx`

## License

MIT License - Feel free to use this for your projects!

---

Built with love for Usama Chaudhry
