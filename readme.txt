YOUR PHOTOGRAPHY WEBSITE TEMPLATE
==================================
A simple, modern 4-page site: Home, My Work (with 3 galleries),
Some Things About Me, and Contact. No coding tools needed —
everything can be edited by hand in a text editor.


HOW TO PREVIEW IT
------------------
Just double-click index.html and it opens in your browser.
That's the whole site — click through the menu to see every page.


1. REPLACING PHOTOS (the main thing you'll do)
------------------------------------------------
Every photo on the site is a placeholder gray image that tells you
its exact file name and the size it should be. To swap a photo:

  1. Find the matching file inside the "images" folder.
  2. Rename your new photo to EXACTLY the same file name
     (e.g. your hero shot must be named "hero.jpg").
  3. Drag it into the same folder, overwriting the placeholder.
  4. Refresh the page in your browser — done.

Where everything lives:

  images/home/hero.jpg                 -> big photo on the home page
  images/home/featured-01.jpg … 06.jpg  -> the 6 "Featured Frames" on home
  images/about/portrait.jpg             -> your photo on the About page
  images/work/portraits/cover.jpg       -> the "Portraits" tile on My Work
  images/work/portraits/photo-01.jpg … 08.jpg -> the Portraits gallery
  images/work/landscapes/cover.jpg + photo-01…08.jpg -> Landscapes gallery
  images/work/weddings/cover.jpg  + photo-01…08.jpg -> Weddings gallery

Tip: photos don't need to be the exact pixel size shown on the
placeholder — that's just a recommendation so things look sharp.
Any normal photo will work; it gets cropped to fit automatically.

If a file format isn't .jpg (e.g. yours is .png), either convert it
to .jpg, or open the matching .html file and change the file ending
in the "src" of that image to match (e.g. "hero.jpg" -> "hero.png").


2. ADDING MORE PHOTOS TO A GALLERY (e.g. more than 8 portraits)
------------------------------------------------------------------
Open work-portraits.html (or -landscapes / -weddings) in a text editor.
Near the bottom of the gallery grid you'll see a comment explaining
this. In short:

  1. Add your new image to images/work/portraits/ as photo-09.jpg
  2. Copy one full line that looks like this:
     <button class="gallery-item"><img src="images/work/portraits/photo-08.jpg" alt="Portrait photograph 08"><span class="frame-tag">Frame&nbsp;08</span></button>
  3. Paste it just below, and change every "08" to "09".

Same idea works for removing photos — just delete that line.


3. ADDING A WHOLE NEW GALLERY CATEGORY
-----------------------------------------
Right now there are 3 categories: Portraits, Landscapes, Weddings.
To add a 4th (say, "Travel"):

  1. Duplicate the folder images/work/portraits and rename the
     copy to images/work/travel. Replace its photos as in step 1.
  2. Duplicate work-portraits.html, rename the copy to
     work-travel.html, then find-and-replace "Portraits" with
     "Travel" and "portraits" with "travel" inside that file.
  3. Open work.html and copy one <a class="category-card"> block,
     paste it as a 4th card, and point it at work-travel.html
     and images/work/travel/cover.jpg.


4. EDITING TEXT
-----------------
All text lives directly in the .html files — open any page in a
text editor (Notepad, TextEdit, VS Code, etc.), find the words you
want to change, and type over them. Look for:

  - "Your Name"            -> appears in the menu bar and footer of
                               every page; find-and-replace it across
                               all .html files to update your name
                               everywhere at once.
  - hello@yourdomain.com    -> your real email (appears in Contact
                               and in the footer mailto links)
  - +1 (000) 000-0000       -> your real phone number
  - Your City, Your Country -> your location
  - https://instagram.com   -> your real social links (also on
                               contact.html for Pinterest/LinkedIn)
  - The "Spec list" on about.html (Based in / Shooting since / etc.)
    — those are just for personality, edit or delete any row.


5. THE CONTACT FORM
----------------------
The form on contact.html is just styled HTML — it doesn't send
email on its own. The easiest free fix:

  1. Go to formspree.io and create a free account + form.
  2. Copy the form endpoint URL they give you
     (looks like https://formspree.io/f/abc1234).
  3. Open contact.html, find:
       <form action="https://formspree.io/f/your-form-id" method="POST">
     and replace "your-form-id" with your real ID.

Until you do that, the "Email Me Directly" button under the form
already works — it just opens the visitor's email app.


6. CHANGING COLORS / FONTS
------------------------------
Open css/style.css — the very first block (":root { ... }") lists
all the colors and fonts as named variables. Change a value there
and it updates across the entire site. For example:

  --amber: #c8732e;   -> the accent color used on buttons/hovers
  --paper: #f6f4f0;   -> the background color

Fonts are loaded from Google Fonts in the <head> of each page if
you want to swap them for something else.


7. PUTTING IT ONLINE
------------------------
This is a plain HTML site, so any basic web host works. Easiest
free options:
  - Netlify (drag the whole folder onto netlify.com/drop)
  - GitHub Pages
  - Any shared hosting — just upload the folder via FTP

You'll want a domain name too (e.g. yourname.com) — most hosts
sell those directly or let you connect one you already own.


FOLDER STRUCTURE
-------------------
index.html              Home
work.html                My Work (gallery index)
work-portraits.html      Portraits gallery
work-landscapes.html     Landscapes gallery
work-weddings.html       Weddings gallery
about.html                Some Things About Me
contact.html              Contact
css/style.css             All styling + color/font variables
js/script.js               Menu, sticky nav, and lightbox behaviour
images/                    All photos, organised by page (see above)

Enjoy — and don't forget to replace this README's placeholder
text once your real photos and info are in.
