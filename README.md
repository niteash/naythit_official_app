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
- **Integrated privacy view** — a navigable privacy policy with a direct `/privacy` URL for AdMob and app-store disclosures.
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
├── app-ads.txt            # Verified AdMob authorized-seller declaration
├── terms.html             # Terms route content
├── support.html           # Support and web account-deletion resource
├── vercel.json            # Route /privacy to index.html
├── README.md              # Project documentation
└── tests/
    └── compliance.test.mjs # Privacy and Vercel routing checks
```

> The preview PNGs are documentation assets, not required to run the website. For deployment, `index.html` and `vercel.json` are the two essential files.

## Deploy to Vercel

1. Put `index.html` and `vercel.json` at the **root of your website repository**.
2. Import that repository in [Vercel](https://vercel.com/) or push changes to the repository already linked to Vercel.
3. For a static site, use **Other** as the framework preset if Vercel asks; no build command is necessary.
4. Deploy and verify these URLs:

   - **Homepage:** https://naythitofficialapp.vercel.app/
   - **Privacy policy:** https://naythitofficialapp.vercel.app/privacy
   - **Terms:** https://naythitofficialapp.vercel.app/terms
   - **Support:** https://naythitofficialapp.vercel.app/support
   - **Account deletion:** https://naythitofficialapp.vercel.app/delete-account

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

The privacy page was audited against the mobile and backend implementation on
28 November 2026. It covers the currently implemented account, profile,
personalization, notification, AI/TTS, purchase, UMP and AdMob flows.

The audit still identified release decisions that must not be hidden by broad
policy language:

- Account-deletion hardening now verifies both private briefing audio and
  `profile-images` cleanup, but the reviewed database migration and matching
  backend must be deployed together before deletion requests are enabled.
- The exact production retention schedule and worker operation must be confirmed
  before the public release.
- The app has no age-verification flow and must not be represented as
  child-directed without a separate review.
- The release owner supplied and verified the AdMob seller line. The root
  `app-ads.txt` contains exactly:

```text
google.com, pub-1864447674722680, DIRECT, f08c47fec0942fa0
```

Once reviewed and publicly deployed, the `/privacy` URL can be entered in **AdMob → Privacy & messaging → Nay Thit → Add URL**. A visible website policy link alone does not replace the mobile app's required disclosures or consent flow.

## Launch checklist

- [x] Responsive coming-soon landing page
- [x] App concept preview and feature descriptions
- [x] Privacy-policy route and footer link
- [x] Vercel static rewrite configuration
- [x] Audit policy text against the current app implementation
- [ ] Verify the deployed `/privacy` URL returns the correct page
- [x] Add the owner-verified publisher ID to root `/app-ads.txt`
- [x] Prepare public support, terms and account-deletion routes
- [ ] Verify `/app-ads.txt` returns HTTP 200 as `text/plain`
- [ ] Deploy and verify the reviewed profile-image deletion hardening
- [ ] Confirm production retention configuration and operation
- [ ] Add real App Store and Google Play links **when listings go live**
- [ ] Verify production app disclosures, consent behavior, and deletion instructions
- [ ] Update product imagery and wording to match the released mobile app

## Product status

**Coming soon to Android.** This site is a preview of the product direction; displayed phone screens are illustrative, and the Google Play link remains intentionally unavailable until launch. No iOS release date has been announced.

## Contact

For product questions, feedback, or privacy requests:

**[swa.developer.expert@gmail.com](mailto:swa.developer.expert@gmail.com)**

---

<div align="center">

**NAY THIT — A new day. A clearer perspective.**

[Website](https://naythitofficialapp.vercel.app/) · [Privacy](https://naythitofficialapp.vercel.app/privacy)

<sub>© 2026 Nay Thit. All rights reserved.</sub>

</div>

## Compliance checks

Run the zero-dependency checks with:

```bash
node --test tests/*.test.mjs
```

After deployment, independently verify response status and content type:

```bash
curl -i https://naythitofficialapp.vercel.app/privacy
curl -i https://naythitofficialapp.vercel.app/app-ads.txt
```
