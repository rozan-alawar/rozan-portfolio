# Rozan Abu Alawar — Portfolio

Personal portfolio of Rozan Abu Alawar, a Flutter developer building
production mobile apps published on the App Store and Google Play.

**Live:** https://rozan-pi.vercel.app

## Stack

Static site — no build step, no dependencies.

- Semantic HTML
- Vanilla CSS (custom properties, fluid `clamp()` typography)
- Vanilla JavaScript (Canvas particle background, Web Audio effects)
- Deployed on Vercel

## Structure

```
index.html          Single-page site
css/
  main.css          Design tokens, base styles
  components.css    Buttons, cards, nav, forms
  hero.css          Hero section and phone mockup
  case-study.css    Case study modal
  responsive.css    Breakpoints: 1024 / 900 / 480 / 1440+
js/
  app.js            Navigation, scroll spy, mobile menu
  hero-canvas.js    Particle background
  case-studies.js   Case study modal content
  contact.js        Contact form submission
  sfx.js            Web Audio interaction sounds
  tech-ecosystem.js, pipeline.js, ai-showcase.js
assets/images/      Optimized project imagery
```

## Local development

Any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

```bash
vercel --prod
```

## Configuration

The contact form posts to [Formspree](https://formspree.io). Set your
form ID in `js/contact.js`:

```js
const CONTACT_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
