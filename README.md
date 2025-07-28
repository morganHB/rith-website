# RITH Website

This repository contains the source code for the RITH marketing website. It is a static site built without any frameworks to make deployment and future integration simple.

## Tech stack

- **HTML5** for markup (`src/*.html`).
- **SCSS** for styling (compiled to `src/css/styles.css`).
- **Vanilla JavaScript** for navigation logic (`src/js/main.js`).

## Folder structure

```
/ (repo root)
├── src/                    # Website source
│   ├── index.html          # Home page
│   ├── about.html          # About Us page
│   ├── services.html       # Our Services page
│   ├── team.html           # Our Team page
│   ├── css/
│   │   ├── styles.scss     # Source SCSS
│   │   └── styles.css      # Compiled CSS (imported by HTML pages)
│   └── js/
│       ├── main.js         # Navigation behaviour
│       └── config.sample.js # Empty config for future integrations
├── assets/                 # Images, logos, favicons
└── README.md               # Project overview
```

## Development

To customize styling, edit `src/css/styles.scss` and recompile it to `src/css/styles.css` using your preferred SCSS compiler (e.g., the `sass` CLI). Each HTML page imports the compiled CSS and the navigation script, includes a fixed top navigation bar with active link highlighting, and displays an under‑construction banner.

### Future integrations

When integrating services such as contact forms or database hooks, copy `src/js/config.sample.js` to `src/js/config.js` and populate the exported object with your configuration. This keeps sensitive settings out of version control and allows the codebase to import environment‑specific values.

## Deployment

GitHub Pages is enabled for this repository. The site is published from the `main` branch and the `/src` folder. After committing changes to `main`, your site will be available at:

```
https://morganHB.github.io/rith-website/
```

The project is licensed under the [MIT License](LICENSE).
