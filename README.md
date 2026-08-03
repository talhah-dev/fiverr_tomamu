# Tomamu Alpha Village

## Project overview

Static marketing site for **Tomamu Alpha Village**, a ski-in, ski-out lodging property
at Tomamu Resort in Hokkaido, Japan. The site showcases the top floor loft apartment,
its amenities, the surrounding resort area, a photo gallery, and location information.

## Pages

| Route | Page |
|---|---|
| `/index.html` | Home |
| `/apartment.html` | The Apartment |
| `/amenities.html` | Amenities |
| `/resort.html` | The Resort |
| `/gallery.html` | Gallery |
| `/location.html` | Location |

## Tech stack

- **HTML** — plain static markup, one page per route
- **Tailwind CSS** — via the Tailwind browser CDN (`@tailwindcss/browser@4`)
- **JavaScript** — vanilla JS for the navbar, mobile menu, and lightbox galleries
- **Font Awesome** — icons via CDN
- **AOS** (Animate On Scroll) — scroll-in animations via CDN
- **Lenis** — smooth scrolling via CDN
- **CSS** — custom styles in `docs/Style.css`

No package.json, build tooling, or framework is used; the site runs as-is.

## Features

- **Sticky navbar** with animated underline hover states and **active-page highlighting**
  (see `docs/javascript/Navbar.js`)
- **Responsive mobile menu** with animated hamburger/close toggle
- **Image galleries with lightbox** on `gallery.html`, `apartment.html`, and `resort.html`
- **Scroll and hover animations** via AOS, Lenis smooth scrolling, and custom fade-in CSS
- **SEO meta tags** and `sitemap.xml` (see below)

## SEO

Each page includes per-page meta tags in its `<head>`: unique `<title>`,
`meta name="description"`, `meta name="keywords"`, Open Graph (`og:title`,
`og:description`, `og:type`, `og:url`, `og:image`), Twitter Card
(`summary_large_image`), and a `<link rel="canonical">` pointing to its own URL.

`sitemap.xml` lists all six pages with lastmod, changefreq, and priority values, and is
referenced by `robots.txt`.

- Domain: `https://tomamu.com`

## Project structure

```
.
├── index.html                 # Home
├── apartment.html             # The Apartment
├── amenities.html             # Amenities
├── resort.html                # The Resort
├── gallery.html               # Gallery
├── location.html              # Location
├── sitemap.xml                # SEO sitemap
├── robots.txt                 # Crawler rules + sitemap reference
├── README.md
└── docs/
    ├── Style.css              # Custom styles / animations
    ├── javascript/
    │   ├── Navbar.js          # Navbar, mobile menu, active-page highlight
    │   └── global.js          # Lenis smooth scroll + AOS init
    └── assets/
        ├── hero.jpg
        ├── location.jpg
        ├── logo.png
        ├── Mountain-icon.png
        ├── mountain.png
        ├── apartment/
        │   ├── bathroom.jpg
        │   ├── bedroom.jpg
        │   ├── entrance.jpg
        │   ├── kitchen.jpg
        │   ├── lounge.jpg
        │   ├── stairs.jpg
        │   ├── toilet.jpg
        │   └── view.jpg
        ├── gallery/
        │   ├── apartment.jpg
        │   ├── gondala.jpg
        │   ├── gondola-station.jpg
        │   ├── hokkaido-map.jpg
        │   ├── Ice-rink.jpg
        │   ├── ice-village.jpg
        │   ├── icebar.jpg
        │   ├── mountain-cafe.jpg
        │   ├── mountains.jpg
        │   ├── night-ski.jpg
        │   ├── ski-shop.jpg
        │   ├── sky-walk.jpg
        │   └── tomamu-map.jpg
        ├── skiing/
        │   ├── alpha-ski.jpg
        │   ├── backcountry.jpg
        │   ├── backcountry2.jpg
        │   ├── backcountry3.jpg
        │   ├── chair-run.jpg
        │   ├── chairlift.jpg
        │   ├── gondola.jpg
        │   ├── groomers.jpg
        │   ├── learner-area.jpg
        │   ├── mountaincafe.jpg
        │   ├── powder.jpg
        │   ├── resort-run.jpg
        │   └── tree-runs.jpg
        └── village/
            ├── alpha-village.jpeg
            ├── buffet.jpg
            ├── covered-walkways.jpg
            ├── farm-cafe.jpg
            ├── firepits.jpg
            ├── heated-pool.jpg
            ├── hotalu-st.jpg
            ├── hotarubar.jpg
            ├── hotarubarandcafe.jpg
            ├── hotarufireplace.jpg
            ├── hotarustreet.jpg
            ├── icebar.jpg
            ├── Icerink.jpg
            ├── mountaincafe.jpg
            └── pool.jpg
```

## Setup / run

The site has no build step. Open `index.html` in a browser, or serve the folder with any
static file server, e.g.:

```sh
python -m http.server 8000
```

then visit `http://localhost:8000/`.

Note: navigation links use root-absolute paths (e.g. `/index.html`), so serving the folder
via a local web server is recommended over opening files directly.
