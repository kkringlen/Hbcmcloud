# Hillside Baptist Church — website preview

A responsive, twelve-page website preview for Hillside Baptist Church in McLoud, Oklahoma. The approved FBCBA-inspired design now incorporates the public pages, ministry information, beliefs, mission partnerships, message archive, giving information, gospel explanation, contact and prayer forms, announcements, and photographs from Hillside's current website.

Live preview: https://kkringlen.github.io/Hbcmcloud/

## Pages

- `index.html` — welcome, Sunday times, next steps, ministries, messages, weekly schedule, directions.
- `about.html` — church history, beliefs, and missions.
- `ministries.html` — children, youth, young adults, and adults.
- `events.html` - all five recurring gatherings, live church calendar link, and dated Easter 2026 announcement.
- `messages.html` - all five message categories with the original video links.
- `visit.html` - service times, directions, first-visit questions, and contact links.
- `connect.html` - schedule, location, phone, and ways to connect.
- `romans-road.html` - the complete gospel explanation and Scripture references.
- `give.html` - giving information, designated-fund policy, and the existing Tithe.ly link.
- `contact.html` - contact fields, email draft preparation, and the existing web form link.
- `prayer.html` - prayer introduction, Scripture, request fields, and the existing web form link.
- `gallery.html` - all nine homepage gallery photos with keyboard-accessible enlargement.

## Editing and previewing

These are plain HTML, CSS, and JavaScript files. No package installation, framework, API keys, or build service is required. Edit the HTML pages directly. Shared navigation/footer appear in every page, so update all twelve if changing those elements. Styles live in `styles.css`; mobile navigation, gallery controls, and local email draft preparation live in `script.js`. All internal paths are relative, including assets, to support the `/Hbcmcloud/` GitHub Pages subdirectory.

Open `index.html` directly, or serve the directory with a local static web server. `.nojekyll` keeps GitHub Pages from processing the site as Jekyll. Keep the repository’s existing Pages source setting.

## Preview behavior

- Contact and prayer forms prepare an email draft locally for the visitor to review and send through their own email app. Nothing is submitted or stored by this site, and it never claims delivery. The current church web forms are also linked. Giving opens the church's established Tithe.ly page.
- YouTube and calendar links use the destinations published by HBC. All five published message categories are included. The live calendar opens in its own full view so visitors can browse dates and event details.
- Recurring schedules come from HBC's Connect page. Easter 2026 is preserved as a clearly dated past event. Confirm recurring times before a future production launch.
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
- https://www.hbcmcloud.org/romans-road
- https://www.hbcmcloud.org/contact-us
- https://www.hbcmcloud.org/prayer-wall

See [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) for the complete source-to-preview mapping and intentional adaptations. [SQUARESPACE-HANDOFF.md](SQUARESPACE-HANDOFF.md) is planning material only; no Squarespace changes have been made. Earlier site versions remain recoverable in Git history.
