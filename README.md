# Hillside Baptist Church — website preview

A responsive, six-page design study for Hillside Baptist Church in McLoud, Oklahoma. Inspired by FBCBA’s photography-led homepage, clear Sunday invitation, next steps, and ministry navigation. Copy and photographs are based on Hillside’s existing website, not FBCBA’s content.

Live preview: https://kkringlen.github.io/Hbcmcloud/

## Pages

- `index.html` — welcome, Sunday times, next steps, ministries, messages, weekly schedule, directions.
- `about.html` — church history, beliefs, and missions.
- `ministries.html` — children, youth, young adults, and adults.
- `events.html` — recurring gatherings and official calendar link.
- `messages.html` — existing message archive selections with real video links.
- `visit.html` — service times, directions, first-visit questions, and contact links.

## Editing and previewing

These are plain HTML, CSS, and JavaScript files. No package installation, framework, API keys, or build service is required. Edit the HTML pages directly. Shared navigation/footer appear in every page, so update all six if changing those elements. Styles live in `styles.css`; mobile navigation lives in `script.js`. All internal paths are relative, including assets, to support the `/Hbcmcloud/` GitHub Pages subdirectory.

Open `index.html` directly, or serve the directory with a local static web server. `.nojekyll` keeps GitHub Pages from processing the site as Jekyll. Keep the repository’s existing Pages source setting.

## Preview behavior

- No forms collect or store information in this mockup. Contact, prayer, and giving buttons open HBC’s established pages; email and phone links use the visitor’s apps.
- YouTube and calendar links use the destinations published by HBC. Videos are linked, not automatically embedded or played. Archive selections are not labeled as current sermons.
- Recurring schedules come from HBC’s Connect page. Dated Easter 2026 content was intentionally excluded from the September preview. Confirm recurring times before the production launch.
- The preview carries `noindex, nofollow` metadata and a footer identifying it as a design preview. Remove the preview treatment only when intentionally launching a production site.
- The main church site and its domain have not been changed.

## Design system

Deep green `#153f3c`, warm white `#f5f4ef`, body ink `#172c2a`, and soft green `#c2d8c1`. Oswald headings and Manrope body text are hosted locally with their SIL Open Font License files. Photographs are hosted locally, with original URLs in `assets/sources.json`. The H logo is retained from the original repository.

Content references, checked September 22, 2026:

- https://www.hbcmcloud.org/
- https://www.hbcmcloud.org/about-us
- https://www.hbcmcloud.org/ministries
- https://www.hbcmcloud.org/connect
- https://www.hbcmcloud.org/messages
- https://www.hbcmcloud.org/events
- https://www.hbcmcloud.org/donate-1

See [SQUARESPACE-HANDOFF.md](SQUARESPACE-HANDOFF.md) for the production implementation guide. The previous site is preserved in Git history and a backup branch before replacement.
