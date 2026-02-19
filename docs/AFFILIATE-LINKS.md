# Affiliate Links

All affiliate links live in a single file:

```
src/data/affiliateLinks.js
```

## How to Update a Link

1. Open `src/data/affiliateLinks.js`
2. Find the casino slug (e.g., `"crown-coins"`)
3. Change the `url` value from `"#"` to your affiliate URL
4. Save the file
5. Rebuild with `npm run build` or restart the dev server (`npm run dev`)

### Example

Before:
```js
"crown-coins": { url: "#", label: "Crown Coins" },
```

After:
```js
"crown-coins": { url: "https://crowncoinscasino.com?ref=goonzerflow", label: "Crown Coins" },
```

The entire site will update — every "Get Bonus" button for that casino will use the new URL.

## Important Notes

- **Slugs must match exactly.** The slug in `affiliateLinks.js` must match the casino's `slug` and `affiliateKey` in `src/data/casinos.js`.
- **Missing slugs fall back to `"#"`.** If a slug is referenced but not found in `affiliateLinks.js`, the link defaults to `"#"` and a warning is logged to the console.
- **No hardcoded URLs.** All CTA buttons pull from `affiliateLinks.js` via the `getAffiliateLink()` helper (`src/lib/getAffiliateLink.js`). Never hardcode affiliate URLs in page components.

## Casino Data

Casino details (name, rating, bonus text, pros/cons) are managed in:

```
src/data/casinos.js
```

To add a new casino, add an entry to the `casinos` array in that file and a corresponding entry in `affiliateLinks.js` with the same slug.
