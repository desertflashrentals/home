# Desert Flash Rentals Website

## Preview
Open `index.html` in a browser. The site contains:
- `index.html` — home page
- `services.html` — service descriptions and contact inquiry form
- `gallery.html` — photo gallery
- `styles.css` and `script.js` — shared styling and interactions

## Contact form / SMS behavior
The contact form validates the required name and phone fields, then opens the visitor's default SMS/messaging app with a prefilled message addressed to **480-788-5745**. The visitor must tap Send. A normal static website cannot silently send an SMS from a visitor's phone or deliver messages in the background. For automatic delivery without opening the visitor's messaging app, connect a server-side form service or SMS provider (for example, Twilio) and configure its credentials securely on a backend.

## Updating the gallery
The current gallery uses illustrative remote photos. Replace each `<img src="...">` in `gallery.html` with the path to your own event photo, for example:
`<img src="images/your-event-photo.jpg" alt="Guests enjoying the photo booth">`
Put your photos in the `images` folder. Use optimized JPG or WebP images and descriptive alt text. These starter images are not represented as Desert Flash Rentals' actual past events.

## Publishing
Upload the contents of this folder to your web host's public site directory (often named `public_html`, `www`, or `htdocs`). The site is static and does not require a database. Google Fonts and the sample gallery photos require an internet connection.

Before publishing, replace the sample gallery images with your own photos and test the contact form on both iPhone and Android.
