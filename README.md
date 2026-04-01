# BlogSpace

## 🚀 Project Overview

BlogSpace is a lightweight client-side blog demo web app built with HTML, CSS, and JavaScript. It shows a form-based post submission workflow and includes a set of predefined blog posts. The project is fully static and designed for easy extension as a learning base.

---

## 📁 Repository Structure

- `index.html` - Main page markup and app structure including navigation, form, and posts section.
- `styles.css` - Styling rules for layout, branding, cards, form, and responsive appearance.
- `scripts.js` - JavaScript logic to load default posts and handle post creation.
- `README.md` - Project documentation (this file).

Optional assets location:
- `images.jpg` - background image referenced by `styles.css`.

---

## 🧩 How It Works

### `index.html`
- Navigation at top with anchor links to `#create-post` and `#blog-posts`.
- `#create-post` section contains a form (`id="postForm"`) with `title` and `content` fields.
- `#blog-posts` section has `#postsContainer` where posts are dynamically inserted.
- Includes `styles.css` and `scripts.js` as external resources.

### `styles.css`
- Resets basic margins and box-sizing.
- Uses a blurred background image (`images.jpg`) and a centered card style for sections.
- `header` and `footer` use a dark semi-transparent overlay.
- Blog posts are flex-wrapped in `.posts-container` with `.post` cards.
- Hover effect `.post:hover` uses transform scale.

### `scripts.js`
- Waits for `DOMContentLoaded` to ensure DOM is ready.
- Defines predefined posts array with six seeded items.
- `addPost(title, content)` builds a `.post` DOM element and appends to `postsContainer`.
- Initializes predefined posts in load order.
- Handles form submission with `event.preventDefault()`, adds new post, then resets form.

---

## 🎯 Features

- Preloaded blog post collection
- Live blog post insertion from form input
- Semantically structured content sectioning
- Stylish card-based responsive layout
- Developer-friendly code separation

---

## 🛠 Setup & Run

No build process required. Open in any browser.

1. Clone the repo:
   ```bash
   git clone https://github.com/vriti-goyal/BlogSpace.git
   cd BlogSpace
   ```
2. Open `index.html` in browser (double-click or via local server):
   ```bash
   python3 -m http.server 8000
   # open http://localhost:8000
   ```
3. Explore form posting and existing cards.

---

## ✅ Usage

1. Type a title.
2. Type post content.
3. Click `Submit`.
4. New post appears in the `Blog Posts` section.

No validation beyond standard HTML `required` flags.

---

## 🔧 Extend the App

Potential improvements:
- Add persistent storage (LocalStorage or backend API).
- Add date/time on post cards.
- Add edit/delete in each `.post`.
- Add categories/tags and search/filter.
- Add pagination or infinite scroll.
- Add markdown rendering with a library.
- Add mobile responsive breakpoints (e.g., single column `.post` at small widths).

---

## 📌 Development Notes

- Code is plain ES6; no frameworks required.
- Keep `styles.css` and `scripts.js` in sync with DOM IDs.
- `postsContainer` currently appends posts in order.

---

## 🧪 Testing

Manual test checklist:
- Preloaded posts appear on page load.
- Form submission adds post and clears fields.
- Fill required fields and ensure page does not refresh.
- Hover style on posts.
- Navigation anchor links work.

---

## ❤️ About

This project is ideal for beginners learning DOM manipulation, event handling, and static UI design. It can be bootstrapped into a full blog by adding a backend and auth layer.
