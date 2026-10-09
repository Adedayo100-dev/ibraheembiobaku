# Ibraheem Biobaku — Photography, Film & Creative Direction

Portfolio site for Ibraheem Biobaku (Heemylense): stories, films, rates, booking policies and an enquiry form.

Live preview: https://ibraheembiobaku.netlify.app

## What's in this repo

| File | What it does |
|---|---|
| `index.html` | The whole site: layout, styles and scripts |
| `data.js` | All the content: stories, film credits, rates, policies, contact details, collaborators |
| `media/` | Photos (WebP), video clips (MP4), `og.jpg` link-preview image |
| `404.html` | "Page not found" page |
| `netlify.toml` | Netlify settings: no build step, caching and security headers |
| `favicon.svg`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png` | Site icons |

No build tools needed. It's plain HTML, CSS and JavaScript.

## Deploy on Netlify from GitHub

1. Netlify → **Add new site → Import an existing project → GitHub** → pick this repo.
2. Build command: *(leave empty)*. Publish directory: `.`
3. **Site configuration → Change site name** → `ibraheembiobaku`
4. **Forms → Enable form detection**, then trigger a redeploy (Deploys → Trigger deploy).
5. **Site configuration → Notifications → Emails and webhooks → Form submission notifications** → add `Ibraheembio5@gmail.com`.
6. Send a test enquiry from the live site and check it arrives.

Every push to `main` redeploys the site automatically.

## Updating content

- **Text, rates, policies:** edit `data.js`.
- **Portrait:** save it as `media/portrait.webp` (4:5, about 1280×1600), then in `data.js` set `portrait: "media/portrait.webp"`.
- **New photos:** add `pXX.webp` (long side 1600px) and `pXX-s.webp` (long side 720px) to `media/`, then list them in `data.js`.

## Launch day checklist

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` from `index.html` (it keeps Google away during preview).
- [ ] Connect the custom domain in Netlify (**Domain management**), HTTPS turns on automatically.
- [ ] Replace `https://ibraheembiobaku.netlify.app/` in the `<head>` of `index.html` with the new domain (link previews + search info).
- [ ] Add the link to both Instagram bios.

## Contact

Ibraheembio5@gmail.com · (365) 889-7815 · [@ibraheembio](https://www.instagram.com/ibraheembio/) · [@ibraheembi0](https://www.instagram.com/ibraheembi0/)

© Ibraheem Biobaku. All photographs and films are his work; please don't reuse them without permission.
