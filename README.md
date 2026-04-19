# Society of Software Developers

The official website for the Society of Software Developers at the University of Florida.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: GSAP (ScrollTrigger)
- **Deployment**: Vercel

## Development Guide

### Local Setup
1. Clone the repository: `git clone https://github.com/ufssd/ufssd-website.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Build and Lint
- Build for production: `npm run build`
- Run static analysis: `npm run lint`

## Maintenance & Architecture

### 1. Project Structure
- **Pages**: Located in `src/app/`. Each folder represents a route.
- **Layouts**: Global components (Header, Footer) are in `src/components/layout/`.
- **UI Components**: Reusable interface elements are in `src/components/ui/`.

### 2. Styling and Responsiveness
- The project uses **Tailwind CSS** for all styling.
- **Mobile Optimization**: The home page features an "edge-to-edge" card layout for mobile devices (screens below the `md` breakpoint) to maximize readability, while retaining offset floating cards for desktop.

### 3. Animation Logic
- Animations are powered by **GSAP**. 
- To prevent SSR issues and memory leaks, all animation initializations must be contained within a `gsap.context()` inside a `useEffect` hook.
- Scroll-triggered effects are configured via the `ScrollTrigger` plugin.

### 4. Deployment Configuration
- **Automatic Deployment**: Pushes to the `main` branch trigger automatic builds on Vercel.
- **Build Rules**: `next.config.js` is currently configured to ignore ESLint and TypeScript errors during the production build phase (`ignoreDuringBuilds: true`). This was implemented to allow rapid deployment. Future maintainers wishing to enforce strict typing should revert these settings.

### 5. Static Assets
- All images are hosted locally in `public/Photos/`. 
- **Optimization**: Please compress all images before uploading to ensure fast page load times and high Core Web Vitals scores.
