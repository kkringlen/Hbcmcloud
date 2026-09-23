# Bringing the Hillside preview into Squarespace

## Feasibility

Yes. HBC’s public website reports Squarespace version 7.1. This design uses photography, typography, colors, section layouts, buttons, and simple navigation that can be recreated with Squarespace’s native tools. The recommended approach is to rebuild the approved layout using native editable sections, then add a small amount of scoped CSS where needed. This GitHub project is a working visual reference; it is not a Squarespace template upload or a one-click site import.

No Squarespace pages, domain settings, or billing settings have been changed. We have not inspected the account’s billing plan or editor permissions. The next phase requires access to the site editor and the user’s chosen design revisions.

## Design settings

| Element | Preview setting | Squarespace approach |
| --- | --- | --- |
| Headings | Oswald, medium/semibold, large uppercase hero | Site Styles → Fonts; use a close condensed sans-serif if unavailable |
| Body | Manrope, regular through bold | Site Styles → Fonts; use an available matching sans-serif |
| Main color | `#153f3c` | Site Styles color palette |
| Dark footer | `#112b29` | Footer section theme |
| Warm background | `#f5f4ef` | Alternate section theme |
| Accent | `#27695e` | Links and feature sections |
| Soft green | `#c2d8c1` | Secondary text on dark green |
| Buttons | Rectangular, generous padding | Native button block styling |
| Content width | About 1,200 pixels | Section width and site spacing |

## Homepage section map

1. **Header:** HBC logo and name; About, Ministries, Events, Messages, Romans Road, Connect, Give; Plan Your Visit button. Use the native mobile menu. Use a transparent header over the opening photo if the header settings support the desired look.
2. **Opening photo:** `assets/hillside-worship.jpg`, dark overlay, large two-line welcome, Visit and Messages buttons. This preview uses a still photo because HBC’s supplied material includes photography, not a confirmed hero video.
3. **Sunday times:** Green section with Sunday School 9:15 AM and Worship 10:30 AM, plus directions. Arrange as columns on desktop and stacked blocks on phones.
4. **Next steps:** Three image/link blocks: Visit, Connect, Serve. Use HBC gathering, Bible, and sound-board photos.
5. **Mission:** Green two-column section; mission statement at left, short introduction and About link at right. The decorative oversized background word is optional.
6. **Ministries:** Four linked text blocks for Children, Youth, Young Adults, and Adults. Use a two-by-two mobile layout or stacked list.
7. **Messages:** Image and text side by side. Use native video blocks if an embedded player is preferred; otherwise link to the existing YouTube channel.
8. **Weekly gatherings:** Five rows showing the recurring schedule. Keep the source of truth for changing events in the existing calendar.
9. **Visit invitation:** Address, directions, visit button, and HBC’s cross photo. The slight photo rotation is optional custom styling.
10. **Footer:** Mission, service times, address, contact details, social links, prayer request, and giving.

## Supporting pages

Use all twelve HTML pages as visual and content references. The full page-by-page mapping and preview adaptations are documented in `CONTENT-INVENTORY.md`. Preserve existing Squarespace URLs where possible: `/about-us`, `/ministries`, `/events`, `/messages`, `/connect`, `/donate-1`, `/prayer-wall`, `/contact-us`, and `/romans-road`. Decide whether Visit replaces the Connect page layout or gets its own new page. Keep existing content and any necessary redirects before changing a URL.

## Suggested implementation sequence

1. Iterate on the GitHub preview until the design, wording, colors, and photo choices are approved.
2. In Squarespace, duplicate the current homepage or create a draft page under Not Linked. Do the same for pages being redesigned. Not Linked only hides a page from navigation; use page access settings if a private preview is needed.
3. Upload the eleven local photos from `assets/` or select the originals already in the Squarespace asset library. Retain the HBC logo after confirming the current preferred brand asset.
4. Build the homepage sections with native blocks and set separate desktop/mobile layouts. Note that global Site Styles may affect the live website, so defer global changes until launch or use a separate staging site.
5. Reuse existing giving, contact, prayer, media, and calendar services. Configure and test any native forms before replacing the current working forms. The GitHub mockup deliberately does not simulate successful form submission.
6. Apply only scoped custom CSS for details native controls cannot match. Do not paste the complete `styles.css` into Squarespace: its global selectors target this standalone site. The mockup’s `script.js` menu is not needed when using Squarespace’s native header.
7. Verify phone layouts, keyboard navigation, readable contrast, all destinations, form receipt, giving destination, page titles, and any redirects. Confirm recurring gathering times and which sermons/events should be featured.
8. Review the draft in Squarespace. Make it the homepage only when ready; retain the former page as a recoverable backup. Replace the preview-only metadata and footer with production settings at that point.

## Optional custom code

Native sections are preferable for content the church will update regularly. Squarespace supports HTML/CSS code blocks; JavaScript, iframe support, and code injection depend on the billing plan. A custom-code reproduction is possible where supported, but it needs adaptation and offers less convenient editing. No plan upgrade is assumed or required by this handoff.

Official references checked September 22, 2026:

- [Fluid Engine editing](https://support.squarespace.com/hc/en-us/articles/6421525446541-Edit-your-site-with-Fluid-Engine)
- [Page sections](https://support.squarespace.com/hc/en-us/articles/360027987711-Page-sections)
- [Code blocks and supported plans](https://support.squarespace.com/hc/en-us/articles/206543167-Code-blocks)
- [Custom code options](https://support.squarespace.com/hc/en-us/articles/205815928-Add-custom-code-to-your-site)

The mockup borrows broad layout ideas from https://www.fbcba.org/; its church information, branding, and photos remain Hillside’s.
