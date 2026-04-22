# 🎂 Birthday Wish Webpage — Ma'am Farwa Zainab

> A beautifully crafted, interactive birthday wish webpage built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 🌸 Live Preview

Open `index.html` directly in any modern browser. No server or installation required.

---

## 📁 Project Structure

```
birthday_project/
│
├── index.html       → Main HTML structure & content
├── style.css        → All styles, animations & responsive layout
└── script.js        → Interactive features (petals, candles, confetti)
```

---

## ✨ Features

- 💐 **Animated Falling Rose Petals** — 12 petals continuously drift down the screen with randomized size, speed, and color
- 🕯️ **Interactive Candles** — Click any candle flame to blow it out and make a wish
- 🎊 **Confetti Burst** — Blow out all 5 candles to trigger a colorful confetti celebration
- 💬 **Toast Notifications** — Friendly pop-up messages appear on candle interactions and page load
- 🎞️ **Scroll-Triggered Animations** — Cards and sections elegantly fade in as you scroll down
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop screens
- 🔤 **Elegant Typography** — Uses Google Fonts: Great Vibes, Playfair Display & Lato
- 🎨 **Rose & Gold Color Theme** — Warm, romantic palette with CSS custom properties

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5      | Page structure & semantic markup |
| CSS3       | Animations, gradients, grid layout, responsiveness |
| JavaScript (Vanilla ES6) | Dynamic petals, candle interactions, confetti, toasts |
| Google Fonts | Great Vibes · Playfair Display · Lato |

---

## 🚀 Getting Started

### Option 1 — Direct Open
1. Download or clone this repository
2. Open `index.html` in your browser

### Option 2 — Clone via Git
```bash
git clone https://github.com/your-username/birthday-wish-webpage.git
cd birthday-wish-webpage
open index.html   # macOS
# or
start index.html  # Windows
```

> ✅ No npm install. No build step. No server needed.

---

## 🎮 How to Interact

| Action | Result |
|--------|--------|
| Page loads | Hint toast appears after 2 seconds |
| Click a candle 🕯️ | Flame blows out + wish toast pops up |
| Blow out all 5 candles | 🎊 Confetti burst + birthday message |
| Click a blown-out candle | Flame relights |
| Scroll down | Cards and sections animate into view |

---

## 🎨 Customization

All key values are easy to change:

**Change the birthday person's name** → `index.html`, line with `<h2 class="name">`

**Change the wisher's name** → `index.html`, inside `.from-box > .wisher`

**Change colors** → `style.css`, inside `:root { }` variables:
```css
:root {
  --rose:  #c0395a;   /* primary pink-red */
  --gold:  #c9a84c;   /* accent gold      */
  --cream: #fdf6f0;   /* page background  */
  --blush: #f7c5d0;   /* card borders     */
  --dark:  #3b1a28;   /* text color       */
}
```

**Add or remove petals** → `script.js`, edit the `petalConfigs` array

**Change candle count** → `index.html`, add or remove `.candle` divs inside `.candles`

---

## 📸 Screenshots

| Hero Section | Cards Section |
|---|---|
| Animated birthday header with candles | Message cards with scroll animations |

---

## 🙏 Credits

| Role | Name |
|------|------|
| 🎂 Birthday Person | Ma'am Farwa Zainab |
| 💌 Wished By | Asif Nawaz |
| 💻 Built With | HTML · CSS · JavaScript |

---

## 📄 License

This project is open-source and free to use for personal, educational, and non-commercial purposes.

Feel free to fork, customize, and share! 🌸

---

<p align="center">
  Made with ❤️ for <strong>Ma'am Farwa Zainab</strong> — Happy Birthday! 🎂
</p>
