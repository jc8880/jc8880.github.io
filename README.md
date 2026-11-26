# Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Project structure

```
portfolio/
├── index.html          # Homepage (must stay at the root for GitHub Pages)
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # All JavaScript
├── assets/
│   └── images/         # Images (project screenshots, profile photo, etc.)
├── pages/              # Additional HTML pages (e.g. about.html, project details)
└── README.md
```

## Preview locally

Open `index.html` in a browser, or use the VS Code **Live Server** extension for auto-reload.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Making Changes

1. Ask Claude to make the changes.
2. Preview them locally.
3. Save your files, then run these commands (in terminal):
   git add .
   git commit -m "Update portfolio"
   git push
