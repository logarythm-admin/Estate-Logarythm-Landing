# Logarythm.AI Estates - Landing Page

## Overview
A professional, dark-themed SaaS landing page for Logarythm.AI's "estates" sub-section — an AI visibility service targeting real estate developers. The service helps real estate brands get discovered in AI-powered buyer journeys (ChatGPT, Gemini, Perplexity, etc.).

## Recent Changes
- **Feb 2026**: Complete redesign with professional dark SaaS aesthetic
- Company: Logarythm.AI, sub-section: "estates"
- Design: Sharp corners (0px border radius), dark charcoal background, emerald/green accent
- Fonts: Space Grotesk (sans), Geist (serif), Geist Mono (mono)
- 5 services with hover-reveal interaction (opacity-based, no layout shift)
- AI response preview card with hover animation (LIVE indicator, green border glow, bar chart graph)
- Hero video at 25% opacity with dark wash gradient
- Process bar removed entirely
- Section order: Platform Capabilities → Real-time Intelligence → Services → Why It Matters → Stats → CTA → Platforms → Footer
- Features shown one at a time with split-panel layout (left: details + chip selectors, right: animated data viz)
- Timeline bar auto-cycles through 6 features every 4 seconds, pauses on hover
- 10 AI platforms: ChatGPT, Perplexity, Google AI Mode, Google Gemini, Microsoft Copilot, Meta AI, Grok, DeepSeek, Anthropic Claude, Google AI Overviews

## Architecture
- **Frontend-only landing page** — no database or backend API needed
- Single page at `/` route
- Built with React + Tailwind CSS + shadcn/ui components + Framer Motion animations

## Key Files
- `client/src/pages/landing.tsx` - Main landing page component
- `client/src/App.tsx` - Router setup
- `client/src/index.css` - Color tokens (dark charcoal/emerald theme)
- `client/index.html` - SEO meta tags and Open Graph tags
- `tailwind.config.ts` - Tailwind config with 0px border radius

## Design System
- Background: Pure dark charcoal (0 0% 4%)
- Primary accent: Emerald green (160 84% 39%)
- Border radius: 0px everywhere (sharp corners)
- Sans font: Space Grotesk
- Serif font: Geist
- Mono font: Geist Mono

## Assets
- `client/public/videos/hero-bg.mp4` - Hero background video
- `client/public/images/hero-fallback.jpg` - Video poster/fallback

## Services Showcased
1. Visibility - AI mention share tracking
2. Position - Search result positioning
3. Sentiment - Brand perception analysis
4. Citations - Source platform mapping
5. Amplification - Campaign AI reach
