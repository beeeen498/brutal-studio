# Brutal Studio

A single-page React website for a fictional design studio, built with a neo-brutalist aesthetic. Raw typography, bold colors, and sharp layouts — intentionally rough, carefully crafted.

## Preview

<!-- Add a screenshot here: ![Brutal Studio](screenshot.png) -->

## Tech Stack

- **React 18** (Create React App)
- **SCSS** with CSS custom properties
- **GSAP** with ScrollTrigger for scroll-based animations
- **react-icons** for iconography

## Features

- Responsive across all breakpoints (1370px, 970px, 665px, 500px, 400px)
- Animated hamburger menu with slide-in nav panel
- Story timeline slider with keyboard navigation, swipe support, and parallax
- 3D flip cards with grayscale-to-color photo reveal
- Infinite logo carousel
- Accordion with GSAP staggered entrance animations
- Project cards with sliding overlay details
- Contact form with validation and GSAP confirmation animation
- Scroll-triggered entrance animations throughout

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
src/
  components/
    Header/        — logo + nav bar
    Hero/          — landing section with headline + image
    OurStory/      — timeline slider with year navigation
    OurTeam/       — team cards with 3D flip interaction
    Companies/     — infinite scrolling client logos
    OurServices/   — accordion with entrance animations
    OurWork/       — project cards with sliding overlays
    BookMeeting/   — contact form with validation
    Footer/        — site footer with nav + socials
  data/            — static content (team, services, work, story)
  styles/          — global SCSS (variables, fonts, resets)
```

## Design Choices

The neo-brutalist direction uses Krona One for headings and Outfit for body text. The palette is intentionally limited: black, white (#FEFEFE), pink (#E950AA), and blue (#4847BC). Layouts lean on solid borders, uppercase type, and raw structure over polish — brutalism that's approachable, not hostile.

## Author

[Ben Kedem](https://benkedem.co)
