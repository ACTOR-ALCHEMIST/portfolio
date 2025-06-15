# Jiang Hu's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing AI/ML projects and professional experience.

## 🚀 Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ACTOR-ALCHEMIST/portfolio.git
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📝 Content Management & Maintenance Guide

### Main Data Configuration

The primary content is managed through the **[`src/data/resume.tsx`](./src/data/resume.tsx)** file. This file contains all the structured data for:

- Personal information (name, location, description)
- Contact details and social links
- Skills and technologies
- Work experience
- Education
- Projects
- Hackathons (currently empty)

### Key Sections to Update

#### 1. Personal Information
```typescript
export const DATA = {
  name: "Jiang Hu",
  initials: "JH", 
  url: "https://jianghu.dev",
  location: "Galway, Ireland",
  description: "AI Specialist & Master's Student...",
  summary: "An AI specialist and a Master's student...",
  avatarUrl: "/me.png", // Update this image in the public folder
}
```

#### 2. Skills Array
Add or remove skills from the skills array:
```typescript
skills: [
  "Python", "Java", "TypeScript", "PyTorch", "Transformers",
  // Add new skills here
],
```

#### 3. Projects
Each project should follow this structure:
```typescript
{
  title: "Project Name",
  href: "#", // Link to project or GitHub
  dates: "Month Year",
  active: true,
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  links: [
    {
      type: "Website" | "Source",
      href: "https://github.com/...",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "", // Optional project image
  video: "", // Optional project video
}
```

### Component Structure

- **Hero Section**: [`src/components/layout/Hero.tsx`](./src/components/layout/Hero.tsx)
- **Skills Section**: [`src/components/layout/Skills.tsx`](./src/components/layout/Skills.tsx)
- **Hobbies Section**: [`src/components/layout/Hobbies.tsx`](./src/components/layout/Hobbies.tsx)
- **Main Page Layout**: [`src/app/page.tsx`](./src/app/page.tsx)

### Adding New Sections

To add a new section to the main page:

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add corresponding data to `src/data/resume.tsx` if needed

### Styling and Theme

- **CSS Framework**: Tailwind CSS
- **UI Components**: Custom components in `src/components/ui/`
- **Theme**: Dark/Light mode support via `src/components/theme-provider.tsx`
- **Animations**: BlurFade animations from `src/components/magicui/`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Deployment

The website is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

For static export, add to `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Assets Management

- **Images**: Place in `public/` folder (e.g., `public/me.png` for avatar)
- **Icons**: Defined in `src/components/icons.tsx`
- **Logos**: Company/school logos in `public/` folder

### Tips for Maintenance

1. **Regular Updates**: Update project dates, add new projects, and refresh skills regularly
2. **Image Optimization**: Ensure images are properly optimized for web
3. **Content Accuracy**: Keep work experience and education information current
4. **Performance**: Run `npm run build` to check for any build errors before deployment
5. **Accessibility**: Maintain proper alt texts for images and semantic HTML

### Troubleshooting

- **Build Errors**: Check TypeScript types and ensure all imports are correct
- **Styling Issues**: Verify Tailwind classes and component structure
- **Performance**: Use Next.js Image component for optimized images
- **SEO**: Update metadata in `src/app/layout.tsx`

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion via custom components
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📄 License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
