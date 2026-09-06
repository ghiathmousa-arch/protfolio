# Ghiath Mousa — Portfolio

Personal portfolio site of **Ghiath Mousa**, Full-stack Developer (Damascus, Syria).

**Live:** https://ghiathmousa-arch.github.io/protfolio/

## Tech stack

| Area | Tool |
|---|---|
| UI | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Routing | react-router-dom 7 |
| Animation | Framer Motion 12 |
| Contact form | `@emailjs/browser` (with a `mailto:` fallback) |
| Hosting | GitHub Pages (`gh-pages` branch) |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the EmailJS values (optional)
npm run dev
```

The dev server serves the app under the `/protfolio/` base path — the same base
used in production — so open the URL that Vite prints.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Publish `dist/` to the `gh-pages` branch |

Deploying is `npm run build` followed by `npm run deploy`.

## Contact form

The form in `src/Components/Contact.jsx` sends through EmailJS when these
variables are set in `.env`:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Get them from the [EmailJS dashboard](https://dashboard.emailjs.com). The
template should expect the fields `from_name`, `from_email`, `phone`, `message`
and `to_email`.

If the variables are missing, the form validates the input and then opens the
visitor's email client with the message pre-filled, so it never silently fails.

## Social links

Footer icons are driven by `src/Components/socialLinks.js`. Add a URL to an
entry and its icon appears; entries with an empty URL are hidden, so no broken
links are ever rendered.

## Project structure

```
public/                  Static assets served from the base path
src/
├── main.jsx             Entry point, Router setup
├── App.jsx              Routes and theme state
├── index.css            Tailwind import, theme tokens, scroll behaviour
├── utils/
│   └── getImageUrl.js   Builds public asset URLs from the Vite base
└── Components/
    ├── NavBar.jsx       Fixed header, section tracking, theme toggle
    ├── Hero.jsx         Intro, portrait, CV download
    ├── About.jsx        Bio and skill bars
    ├── Timeline.jsx     Education & experience
    ├── Cta.jsx          "Let's work together" banner
    ├── Cards.jsx        Project grid
    ├── ProjectDetails.jsx  /projects/:id page
    ├── ProjectsSlider.jsx  Related-projects carousel
    ├── Contact.jsx      Contact cards and form
    ├── Footer.jsx       Copyright and social icons
    ├── NotFound.jsx     404 page
    ├── Button.jsx       Shared animated button/link
    ├── Dot.jsx          Dotted section divider
    ├── projectsData.js  Project content
    ├── socialLinks.js   Social link config
    └── useTheme.jsx     Dark/light mode hook
```

## Dark mode

The theme is stored in `localStorage` and applied as a `dark` class on `<html>`.
The initial value is read *before* the first render (`getInitialTheme` in
`useTheme.jsx`), so there is no flash of the wrong theme on load. With no saved
preference, the visitor's OS setting (`prefers-color-scheme`) is used.
