# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios (Linear's minimalism, Vercel's developer focus, and Stripe's professional polish). This creates a sophisticated, career-focused design that demonstrates technical competency through visual execution.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 15% 12% (elevated panels)
- Primary Accent: 220 90% 56% (vibrant blue for CTAs and highlights)
- Text Primary: 0 0% 98% (near-white)
- Text Secondary: 0 0% 70% (muted for supporting text)
- Border: 220 15% 20% (subtle separation)

**Light Mode (Invert Strategy):**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary Accent: Same vibrant blue
- Text Primary: 222 15% 12%

### B. Typography
**Font Stack:**
- Primary: 'Inter' from Google Fonts (body, UI elements)
- Display: 'Space Grotesk' from Google Fonts (headings, hero)

**Scale:**
- Hero Title: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headings: text-4xl md:text-5xl font-bold
- Subsection: text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg
- Caption: text-sm text-muted

### C. Layout System
**Spacing Units:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-6

**Grid Strategy:**
- Skills: 3-column grid on desktop (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Experience Timeline: Single column with connected line visual
- Education: 2-column cards (grid-cols-1 md:grid-cols-2)

### D. Component Library

**Hero Section:**
- Full-screen height (min-h-screen) with centered content
- Gradient overlay on background image for text readability
- Professional headshot or workspace image with subtle parallax
- Name in display font, title/role below in lighter weight
- CTA buttons: Primary solid + Secondary with backdrop-blur-md on outline variant

**Skills Showcase:**
- Card-based grid with technology icons from Heroicons
- Group by category: Frontend Frameworks, Languages, Styling, Tools
- Hover effect: subtle scale transform and glow on cards
- Each card: Icon + Technology name + Years badge

**Experience Timeline:**
- Vertical timeline with connecting line (border-l-2)
- Cards for each role with company logo placeholder
- Date ranges prominently displayed
- Stagger animation on scroll reveal
- Alternate alignment for visual interest (if space permits)

**Education Section:**
- Card layout with institution details
- Timeline format showing progression: RBSE → BCA → Professional
- Subtle background patterns on cards

**Contact Section:**
- Clean form layout OR simple contact details display
- Social links with icon buttons (LinkedIn, GitHub, Email)
- Optional: Location map integration using Google Maps experience

### E. Animations
**Minimal & Purposeful:**
- Fade-up on scroll (opacity + translateY) for section reveals
- Subtle hover transforms (scale-105) on interactive cards
- Smooth color transitions (transition-colors duration-300)
- NO distracting continuous animations or complex scroll effects

## Images Section

**Hero Background Image:**
- Professional workspace or abstract tech-themed gradient
- Dimensions: 1920x1080 minimum
- Overlay: dark gradient (from-black/60 to-transparent) for text contrast
- Position: Cover with center focus

**Optional Profile Photo:**
- Professional headshot in hero section
- Circular crop, ~200-300px diameter
- Subtle border/shadow for depth

**Company Logos (if available):**
- Wipro and Navsoft logos in experience section
- Monochrome treatment for consistency
- Small size: ~80-120px width

## Page Structure

1. **Hero Section** (min-h-screen): Background image with centered introduction, role title, CTA buttons
2. **Skills Section** (py-24): Multi-column grid of technology cards with icons
3. **Experience Section** (py-24): Timeline with 3 work positions detailed
4. **Education Section** (py-20): Cards showing academic progression
5. **Contact Section** (py-20): Simple contact info or form with social links
6. **Footer** (py-12): Copyright, links, subtle branding

## Key Principles
- **Professional Polish:** Clean edges, consistent spacing, refined typography
- **Technical Demonstration:** Design itself proves development capability
- **Information Hierarchy:** Experience and skills are primary focus
- **Performance:** Optimized images, minimal animations, fast load times
- **Accessibility:** High contrast ratios, semantic HTML, keyboard navigation