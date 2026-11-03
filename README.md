# Diwali Blast — Digital Fireworks Festival

A premium, mobile-first virtual Diwali experience inspired by the supplied reference screenshots. Built as a lightweight, dependency-free browser app using HTML, CSS, JavaScript, Canvas and the Web Audio API. It deliberately avoids a build framework or paid APIs so it installs and runs reliably on a basic setup.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (default `http://localhost:4173`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` creates the deployable `dist/` folder. Deploy the contents of `dist/` to Vercel or Netlify. No environment variables, API keys, login, database or backend are required.

## Included features

- 16 virtual cracker experiences with individual styles and colour themes.
- Interactive Canvas fireworks playground: tap-to-launch, intensity/speed, pause/resume, clear sky, auto show and random mode.
- Optional synthesized sound effects with volume control; audio starts only after the visitor enables sound.
- Five interactive diyas, light-all and blow-out controls.
- Favorites saved in local storage and a recently played list.
- Personalized greeting card preview with name, recipient, custom message, three themes and accent colours.
- Locally generated downloadable PNG greeting card; no personal data is uploaded.
- Native sharing where supported, clipboard fallback, surprise countdown, gallery and fullscreen mode.
- Responsive navigation and touch-friendly mobile layout.
- PWA manifest, app icon, service worker and offline fallback.

## Notes

- All fireworks are visual/audio simulations only. This site does not provide instructions for real fireworks.
- Google Fonts are an optional network enhancement; system fallbacks are included.
- The service worker caches the app shell after the first successful visit. Offline use requires the app to have been opened online at least once.
