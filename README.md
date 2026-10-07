# Nadja Djordan · CV website

A static site (plain HTML/CSS/JS, no build step). It's one scrolling page: photo and name first, then About, Experience, Beyond the classroom, Projects, Skills, Education, Hobbies and Contact.

## Editing
- **All text lives in `data.js`.** The page order there is the order on the site.
- `assets/portrait-full.jpg`: the hero photo.
- `assets/Nadja-Djordan-CV.pdf`: the PDF behind the "CV" buttons. Replace it when your CV changes.
- Education entries take `flag: "rs"` or `flag: "nl"` for the small flag icon.

## Preview
Open `index.html` in a browser.

## Publish (GitHub Pages, free)
1. Upload the contents of this folder to https://github.com/nadja1908/nadjaCV.
2. Repo → Settings → Pages → Deploy from branch → `main` / root.
3. The site goes live at `https://nadja1908.github.io/nadjaCV/`.

Each section has its own link, e.g. `#experience`, `#projects`, `#contact`.
