<div align="center">

# NAY THIT<span style="color:#d8fc68">.</span>

### Less noise. More perspective.

**A thoughtful home for a new way to follow the news.**

A sharp, responsive, zero-dependency landing website for **Nay Thit** — a mobile news companion focused on personalized stories, clear sources, and audio briefings.

[**Explore the website**](https://naythitofficialapp.vercel.app/) · [**Privacy policy**](https://naythitofficialapp.vercel.app/privacy) · [**Contact**](mailto:swa.developer.expert@gmail.com)

![Nay Thit desktop landing page](desktop-preview.png)

*Preview of the redesigned website. The live domain may not reflect this version until deployment.*

</div>

---

## The idea

News should help you understand your world, not overwhelm you. **Nay Thit** is being developed to make daily news easier to follow — whether you're reading an update, exploring a source, or listening on the move.

This repository contains the **official coming-soon website**, not the Nay Thit mobile application or its backend.

## A closer look

| Mobile experience | Privacy experience |
|:---:|:---:|
| ![Mobile landing page](mobile-preview.png) | ![Privacy policy page](privacy-preview.png) |
| Responsive, readable, and touch-friendly | A dedicated `/privacy` route for policy information |

## What makes this site different

- **Editorial visual design** — near-black surfaces, sharp geometry, oversized typography, and restrained lime accents; no red or dotted textures.
- **Responsive by design** — a fluid layout for phones, tablets, and desktops.
- **Product storytelling** — an illustrated mobile-app concept, personalized news, listening, and sourcing highlights.
- **Launch-ready placeholders** — clearly labeled App Store and Google Play buttons that are *not* presented as working downloads.
- **Integrated privacy view** — a navigable privacy-policy draft with a direct `/privacy` URL for future AdMob and app-store disclosures.
- **Lightweight implementation** — plain HTML, CSS, and vanilla JavaScript, without a bundler or runtime framework.
- **Small interactions** — smooth navigation and an animated **audio-player concept**; it is not real audio playback.

## Technology

| Layer | Technology |
| --- | --- |
| Structure | Semantic HTML5 |
| Styles | CSS3, custom properties, responsive media queries |
| Interactions | Vanilla JavaScript, History API |
| Hosting | Vercel (static hosting) |
| Dependencies | **None** |

## Getting started

You only need a modern browser. No `npm install`, build command, or API keys are required.

```bash
# Clone your website repository
# git clone <your-repository-url>
# cd <your-repository-directory>

# Or simply open index.html in your browser.
```

For a reliable local test of the `/privacy` route, serve the directory over HTTP:

```bash
python3 -m http.server 8000
```

Open **http://localhost:8000/** to preview the homepage. A plain local server will not automatically apply Vercel's `/privacy` rewrite. To test direct navigation to that route, use Vercel's local development environment or test the deployed site.

## Project structure

```text
naythit-website/
├── index.html             # Landing page + privacy view + styling + interactions
├── vercel.json            # Route /privacy to index.html
├── README.md              # Project documentation
├── desktop-preview.png    # Desktop design reference
├── mobile-preview.png     # Mobile design reference
└── privacy-preview.png    # Privacy page design reference
```

> The preview PNGs are documentation assets, not required to run the website. For deployment, `index.html` and `vercel.json` are the two essential files.

## Deploy to Vercel

1. Put `index.html` and `vercel.json` at the **root of your website repository**.
2. Import that repository in [Vercel](https://vercel.com/) or push changes to the repository already linked to Vercel.
3. For a static site, use **Other** as the framework preset if Vercel asks; no build command is necessary.
4. Deploy and verify these URLs:

   - **Homepage:** https://naythitofficialapp.vercel.app/
   - **Privacy policy:** https://naythitofficialapp.vercel.app/privacy

The included configuration is:

```json
{
  "rewrites": [
    { "source": "/privacy", "destination": "/index.html" }
  ]
}
```

The single HTML file uses the browser's pathname to render the appropriate view. This is a deliberate **single-file** setup, not a Next.js project.

## Privacy and advertising readiness

The privacy page is a **draft** and must be checked against the actual Nay Thit app before it is published as a final legal disclosure. In particular, verify:

- Which account, profile, preference, device, and usage data are collected.
- Which production providers process data, including authentication, hosting, AI/audio generation, and advertising providers.
- How consent choices are displayed and respected where required.
- How users request account and data deletion, what is deleted, and any retention periods.
- Whether the app's age-related disclosures, privacy links, and store declarations accurately reflect its behavior.

Once reviewed and publicly deployed, the `/privacy` URL can be entered in **AdMob → Privacy & messaging → Nay Thit → Add URL**. A visible website policy link alone does not replace the mobile app's required disclosures or consent flow.

## Launch checklist

- [x] Responsive coming-soon landing page
- [x] App concept preview and feature descriptions
- [x] Privacy-policy route and footer link
- [x] Vercel static rewrite configuration
- [ ] Review and finalize the privacy policy
- [ ] Verify the deployed `/privacy` URL returns the correct page
- [ ] Add real App Store and Google Play links **when listings go live**
- [ ] Verify production app disclosures, consent behavior, and deletion instructions
- [ ] Update product imagery and wording to match the released mobile app

## Product status

**Coming soon to Android and iOS.** This site is a preview of the product direction; displayed phone screens are illustrative, and store links are intentionally unavailable until launch. Availability and feature details may change during development.

## Contact

For product questions, feedback, or privacy requests:

**[swa.developer.expert@gmail.com](mailto:swa.developer.expert@gmail.com)**

---

<div align="center">

**NAY THIT — A new day. A clearer perspective.**

[Website](https://naythitofficialapp.vercel.app/) · [Privacy](https://naythitofficialapp.vercel.app/privacy)

<sub>© 2026 Nay Thit. All rights reserved.</sub>

</div>
