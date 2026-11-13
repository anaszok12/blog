# anaszok brand kit

Everything you need to keep the blog, LinkedIn, Threads and GitHub looking the same.

## Logo

| File | Use it for |
|---|---|
| `source/logo-mark.svg` | Master logo (vector). Use it anywhere that accepts SVG. |
| `source/logo-mark-1024.png` | Master logo as a PNG with a transparent background. |
| `source/logo-wordmark.png` | Logo with the name "anaszok", on dark grey. |
| `exports/icons/anaszok_square_1024.png` | Profile picture for LinkedIn, Threads, GitHub. |
| `exports/icons/anaszok_favicon.ico` | Browser tab icon (16, 32 and 48 px). |

The mark is the AZ initials over a short bar, on a rounded turquoise tile.
Leave space around it equal to the height of the bar, and do not stretch, recolor or add effects.

## Colors

| Name | Hex | Use |
|---|---|---|
| Turquoise | `#2DD4BF` | Accent: logo tile, links, labels, highlights |
| Dark grey | `#111113` | Page background (logo letters and banners use `#18181B`) |
| Card grey | `#18181A` | Cards and panels |
| Line grey | `#2D2D30` | Thin borders |
| Off white | `#F2F2F2` | Headings and the name |
| Soft grey | `#BDBDC0` | Body text |
| Muted grey | `#929296` | Dates and notes |

## Fonts

- **Inter** for headings and body text.
- **JetBrains Mono** for small labels, dates and tags.

Both are free (SIL Open Font License) and already bundled with the site.

## Social images

| File | Size | Use it for |
|---|---|---|
| `exports/social/anaszok_banner_twitter.png` | 1500 × 500 | X header, general wide banner |
| `exports/social/anaszok_banner_linkedin.png` | 1200 × 627 | LinkedIn post image |
| `exports/social/anaszok_banner_facebook.png` | 1200 × 630 | Facebook post, blog share preview |
| `exports/social/anaszok_banner_website.png` | 1200 × 630 | Website banner |
| `exports/social/anaszok_banner_website_banner_desktop.png` | 1200 × 400 | Website header banner |
| `exports/social/anaszok_banner_email_header.png` | 600 × 200 | Email signature or newsletter header |
| `exports/icons/*` | 16 to 1080 px | Icons and thumbnails in every common size |

## How these were made

The logo and banner designs are in `source/`. All sizes in `exports/` were generated from them with
[BrandKit](https://github.com/fabriziosalmi/brandkit) by Fabrizio Salmi (MIT license).
The favicon `.ico` was rebuilt afterwards to hold 16, 32 and 48 px, because BrandKit's version only held 16 px.
