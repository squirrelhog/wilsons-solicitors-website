# DW.Legal Static Site Clone

This is a fully standalone static HTML clone of the dw.legal WordPress website.

## Structure

```
dw-legal-static/
├── index.html                          # Home page
├── wills-and-estates.html              # Wills & Estates page
├── death-benefit-claims.html           # Death Benefit Claims page
├── estate-planning.html                # Estate Planning page
├── house-and-land-conveyancing.html    # House & Land Conveyancing page
├── faq.html                            # FAQ/Case Studies page
├── contact.html                        # Contact page
├── css/
│   └── style.css                       # Main stylesheet
├── images/                             # All images (downloaded locally)
│   ├── logo.png
│   ├── hero-bg.png
│   ├── wills-image.jpg
│   ├── death-benefits-image.jpg
│   ├── estate-planning-image.jpg
│   ├── conveyancing-image.jpg
│   ├── icon.png
│   └── yellow-pages-badge.png
└── README.md                           # This file
```

## Features

✅ **Exact visual clone** of dw.legal WordPress site
✅ **7 pages** with consistent navigation and footer
✅ **Fully standalone** - all images stored locally
✅ **No external dependencies** (except Google Fonts)
✅ **Responsive design** - works on desktop, tablet, and mobile
✅ **Mobile menu** - hamburger menu for small screens
✅ **Clean semantic HTML5**
✅ **Contact forms removed** as requested

## Usage

### To view the site:
1. Open `index.html` in any web browser
2. Navigate between pages using the menu
3. **Works completely offline** (except Google Fonts which gracefully degrades)

### To host the site:
1. Upload all files to your web server
2. Ensure folder structure is maintained
3. Set `index.html` as your default page
4. No special server configuration needed - pure static HTML

### To customize:
- Edit HTML files for content changes
- Edit `css/style.css` for styling changes
- Replace images in `/images/` folder
- Colors can be changed by searching and replacing hex codes in CSS
- Fonts are loaded from Google Fonts (Roboto) - works offline with system fallbacks

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images are stored locally in the `/images/` folder
- The spam links (Bro138/Bos88) in the footer have been retained as they appear on the original site
- Contact forms have been removed as requested
- The site uses CSS Grid and Flexbox for layouts
- Mobile menu toggle implemented with vanilla JavaScript
- Google Fonts (Roboto) loaded from CDN with system font fallback

## Maintenance

To update contact information, edit these sections in ALL HTML files:
1. Header top (phone numbers)
2. Footer (contact details, business hours, address)

## File Size

- Total HTML: ~50KB
- CSS: ~10KB
- Images: ~2.5MB
- **Total site size: ~2.6MB**

## Performance

- Fast loading times due to optimized images
- No database queries
- No server-side processing
- Can be served from any basic web host or CDN

## Security

- No forms to exploit (all removed)
- No server-side code
- No database connections
- Pure static HTML = minimal attack surface

## Deployment Options

This site can be deployed to:
- Any traditional web host (cPanel, etc.)
- Static hosting services (Netlify, Vercel, GitHub Pages)
- Cloud storage with web hosting (AWS S3, Google Cloud Storage)
- CDN services (CloudFlare Pages)

## License

This is a clone of dw.legal for archival/static hosting purposes.

---

**Last Updated:** October 16, 2025  
**Status:** ✅ Fully standalone and ready to deploy
