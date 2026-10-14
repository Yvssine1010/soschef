# Architecture rules

- Render the shared Navigation once in App, not within individual pages, to prevent duplicate headers and menus.
- Keep the shared header sticky in document flow so changes to its size never obscure page content or require page-specific header offsets.
- Use the uploaded logo's asset pointer for website branding and a separately downscaled real PNG in public for the favicon, so uploaded media stays CDN-hosted while browsers can load the icon directly. Resolve logo pointer URLs against the verified published Lovable origin for localhost and external-host compatibility.