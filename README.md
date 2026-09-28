# Biznexuss company website

A complete React + TypeScript + Vite website with five routes: `/`, `/solutions`, `/insights`, `/about`, and `/contact`.

## Run locally (Windows / macOS / Linux)

Install Node.js 22.13 or newer. Extract this folder and open it in VS Code. Open its terminal:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal (normally http://localhost:5173).

## Production

```sh
npm run build
npm run preview
```

Upload the contents of `dist` to your web host. Configure SPA fallback so `/solutions` and `/insights` serve `index.html`. A `_redirects` file is included for hosts supporting that convention. For Nginx, use `try_files $uri $uri/ /index.html;` inside the site location block.

## Where to edit

- `src/App.tsx`: page content, navigation, interactions, footer and contact details.
- `src/company-pages.tsx`: About and Contact pages; contact draft form.
- `src/support-workspace.tsx`: interactive agent-workspace demonstration.
- `src/styles.css`: blue theme, desktop/mobile layouts and animations.
- `public/support-team.webp`: support-team hero photograph (AI generated).
- `public/support-headset.webp`: transparent 3D headset artwork (AI generated).
- `public/favicon.svg`: brand favicon.
- `src/components/ui`: accessible dialog, tabs, slider and button primitives.

## Contact details

Address: 225 Reformation Pkwy Ste 200, Canton, GA 30114
Email: info@biznexuss.com
Phone: +1 (201) 345-2345
WhatsApp: https://wa.me/12013452345

The supplied ten-digit number is interpreted as a US +1 number. WhatsApp links open the conversation; account availability is controlled by WhatsApp.

## Video

The homepage includes an animated product walkthrough and a local video preview picker. Selected videos are only previewed on the current device; they are not uploaded or published. To publish your 10-minute video, put `biznexuss-intro.mp4` in `public` and replace the video-cover block in `src/App.tsx` with:

```tsx
<video controls preload="metadata" poster="/support-team.webp" className="published-video">
  <source src="/biznexuss-intro.mp4" type="video/mp4" />
  Your browser does not support video playback.
</video>
```

Add `.published-video { width: 100%; border-radius: 14px; }` to the stylesheet. For large videos, use your own hosted MP4 URL as the source instead.

## Demo behavior

The insights screen uses clearly labeled illustrative data. The impact calculator assumes 70% recovery of missed enquiries, not a promised business result. Simulated enquiries only affect in-memory demo state. No real CRM, calling API or customer database is connected. Contact buttons use email, phone, Maps and WhatsApp links; there is no hidden submission service.

## Verification

TypeScript validation and production builds passed for the hosted site and the standalone package. Automated browser visual QA was unavailable in this environment.

The Contact form opens a prefilled WhatsApp or email draft for the visitor to review and send. It does not store or submit form data to a server. The homepage dialers are simulated; no real calls or Zoom connection are made.
