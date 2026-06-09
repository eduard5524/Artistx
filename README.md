# Artistx

**Sheet music that moves with the music.**

Artistx is a music app that reads sheet music (partiture) while you listen — synchronized playback with the score. The notation scrolls and highlights in real time, so you always know exactly where you are in the piece.

Built for musicians learning new repertoire, practicing, or studying scores.

## Preview

### Landing page

<p align="center">
  <img src="docs/screenshots/landing-page-desktop.png" alt="Artistx landing page — desktop view with hero section and synchronized sheet music mock UI" width="900" />
</p>

<p align="center">
  <img src="docs/screenshots/landing-page.png" alt="Artistx landing page — mobile view" width="390" />
</p>

### App UI (score player mock)

<p align="center">
  <img src="docs/screenshots/app-mock.png" alt="Artistx app UI — sheet music with real-time playhead and playback controls" width="560" />
</p>

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Fonts: Cormorant Garamond (display) + Instrument Sans (body)

## Project structure

```
src/
  App.tsx                 # Landing page layout
  components/
    Hero.tsx              # Hero section with CTA
    SheetMusicMock.tsx    # Stylized score + playhead illustration
    Features.tsx          # Feature cards & use cases
    Cta.tsx               # Early access waitlist section
    Footer.tsx            # Footer with placeholder links
docs/
  screenshots/            # README preview images
```
