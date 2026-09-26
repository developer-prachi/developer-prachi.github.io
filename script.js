/* =========================================================
   Project data — edit these lists to add or change projects.
   Screenshots live in assets/projects/<img>.jpg (1280×800).
   ========================================================= */

const GH = 'https://github.com/developer-prachi';
const PAGES = 'https://developer-prachi.github.io';

const featured = [
  {
    title: 'Quiz Night',
    img: 'quiz-night',
    tint: 'var(--lilac)',
    desc: 'A trivia game powered by the Open Trivia Database. Pick a category, a difficulty and how many questions you want — then race the clock on every question.',
    points: [
      'Uses an API session token so you never see the same question twice across attempts.',
      'When a token runs out, it quietly fetches a new one and retries — no error for the player.',
      'Friendly messages for rate limits and "not enough questions", each with a Try again button.',
    ],
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'REST API', 'Custom hooks'],
    live: `${PAGES}/quiz-night/`,
    code: `${GH}/quiz-night`,
  },
  {
    title: 'Recipe Finder',
    img: 'recipe-finder',
    tint: 'var(--peach)',
    desc: 'Search meals from TheMealDB by name, or hit "Surprise me" and let the app pick dinner. Every recipe opens into a full view with ingredients, steps and a video link.',
    points: [
      'Turns the API\'s twenty separate ingredient & measure fields into one clean list.',
      'Proper loading, empty ("no results") and error states — not just the happy path.',
      'Two endpoints in play: name search and a random-recipe button.',
    ],
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'TheMealDB API'],
    live: `${PAGES}/recipe-finder/`,
    code: `${GH}/recipe-finder`,
  },
  {
    title: 'Sales Dashboard',
    img: 'sales-dashboard',
    tint: 'var(--mint)',
    desc: 'A sales analytics dashboard with summary cards, a monthly revenue chart and an orders table you can search, filter by status and sort by any column.',
    points: [
      'Revenue chart drawn with plain CSS bars — no charting library.',
      'The filtered, sorted order list is derived on every render instead of stored in state.',
      'Summary numbers computed straight from the raw data, ready for a real API later.',
    ],
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'Data display'],
    live: `${PAGES}/sales-dashboard/`,
    code: `${GH}/sales-dashboard`,
  },
  {
    title: 'Auth Flow',
    img: 'auth-flow',
    tint: 'var(--accent-soft)',
    desc: 'A polished sign-up and login experience: field-level validation, a live password-strength meter, show/hide password and a session that survives a refresh.',
    points: [
      'Validation for required fields, email format, 8-character minimum and matching passwords.',
      'Strength meter scores length and character variety as weak, medium or strong.',
      'A reusable password field component with an optional strength bar.',
    ],
    note: 'Front-end demo: accounts are saved in the browser\'s localStorage, not a real backend.',
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'Forms & validation'],
    live: `${PAGES}/auth-flow/`,
    code: `${GH}/auth-flow`,
  },
  {
    title: 'Support Ticket System',
    img: 'support-ticket-system',
    tint: 'var(--lilac)',
    desc: 'A ticketing app built as an internship assignment for Resolute AI Software — sign in, then raise and manage support tickets from a dashboard.',
    points: [
      'Firebase-backed authentication with protected routes and an auth context.',
      'Dashboard layout with a sidebar and a modal for creating tickets.',
      'Forms validated with Formik & Yup, styled with Material UI.',
    ],
    tags: ['React 19', 'Material UI', 'Firebase', 'React Router', 'Formik + Yup'],
    live: 'https://support-ticket-system-eight.vercel.app',
    code: null, // repository is private
  },
];

const archive = [
  { title: 'Far Away — Travel List', img: 'travel-list', cat: 'react', label: 'React', desc: 'A packing-list app: add items with quantities, tick them off, sort, clear, and see how much is packed.', live: `${PAGES}/travel-list/`, code: `${GH}/travel-list` },
  { title: 'Tic-Tac-Toe+', img: 'tic-tac-toe', cat: 'js', label: 'JavaScript', desc: 'Tic-Tac-Toe on any grid size with a custom win streak and emoji players.', live: `${PAGES}/Tic-Tac-Toe-Game/`, code: `${GH}/Tic-Tac-Toe-Game` },
  { title: 'To-Do List', img: 'techamber-todo', cat: 'js', label: 'JavaScript', desc: 'A tidy to-do list with add, inline edit and delete.', live: `${PAGES}/TechAmber-todo-list/`, code: `${GH}/TechAmber-todo-list` },
  { title: 'Omnifood', img: 'omnifood', cat: 'html', label: 'HTML & CSS', desc: 'A full, responsive landing page for a healthy-meal subscription startup.', live: `${PAGES}/omnifood/`, code: `${GH}/omnifood` },
  { title: 'News Homepage', img: 'news-homepage', cat: 'html', label: 'HTML & CSS', desc: 'News homepage with a hero story, a "New" sidebar and a trending list.', live: `${PAGES}/news-homepage/`, code: `${GH}/news-homepage` },
  { title: 'Testimonial Grid', img: 'testimonial-grid', cat: 'html', label: 'HTML & CSS', desc: 'Bootcamp graduate testimonials arranged in a CSS Grid mosaic.', live: `${PAGES}/Testimonial-grid-section/`, code: `${GH}/Testimonial-grid-section` },
  { title: 'Four-Card Feature', img: 'four-card-feature-section', cat: 'html', label: 'HTML & CSS', desc: 'A responsive four-card feature layout for an AI project-delivery platform.', live: `${PAGES}/Four-card-feature-section/`, code: `${GH}/Four-card-feature-section` },
  { title: 'Stats Preview Card', img: 'stats-preview-card', cat: 'html', label: 'HTML & CSS', desc: 'Split card for a data-analytics product with a tinted image overlay.', live: `${PAGES}/stats-preview-card-component/`, code: `${GH}/stats-preview-card-component` },
  { title: 'Social Proof Section', img: 'social-proof-section', cat: 'html', label: 'HTML & CSS', desc: 'Star ratings and customer reviews in a staggered layout.', live: `${PAGES}/social-proof-section/`, code: `${GH}/social-proof-section` },
  { title: 'Column Preview Card', img: 'column-preview-card', cat: 'html', label: 'HTML & CSS', desc: 'Three-column card for a car rental site: Sedans, SUVs and Luxury.', live: `${PAGES}/column-preview-card/`, code: `${GH}/column-preview-card` },
  { title: 'Price Grid', img: 'price-grid', cat: 'html', label: 'HTML & CSS', desc: 'Sign-up and pricing grid for a developer community subscription.', live: `${PAGES}/price-grid/`, code: `${GH}/price-grid` },
  { title: 'NFT Card', img: 'nft-card', cat: 'html', label: 'HTML & CSS', desc: 'NFT preview card with a hover overlay and creator details.', live: `${PAGES}/nft-card/`, code: `${GH}/nft-card` },
  { title: 'Social Links', img: 'social-links', cat: 'html', label: 'HTML & CSS', desc: 'A link-in-bio profile card with social buttons on a dark background.', live: `${PAGES}/social-links/`, code: `${GH}/social-links` },
  { title: 'Product Preview Card', img: 'card-preview', cat: 'html', label: 'HTML & CSS', desc: 'Perfume product card with price, description and add-to-cart.', live: `${PAGES}/card-preview/`, code: `${GH}/card-preview` },
  { title: 'Recipe Page', img: 'recipe-page', cat: 'html', label: 'HTML & CSS', desc: 'An omelette recipe page with ingredients, steps and a nutrition table.', live: `${PAGES}/recipe-page/`, code: `${GH}/recipe-page` },
  { title: 'Blog Preview Card', img: 'blog-preview-card', cat: 'html', label: 'HTML & CSS', desc: 'Blog preview card with tag, date, title, excerpt and author.', live: `${PAGES}/blog-preview-card/`, code: `${GH}/blog-preview-card` },
  { title: 'QR Code Card', img: 'qr-code', cat: 'html', label: 'HTML & CSS', desc: 'A clean QR code card component — where my HTML & CSS journey started.', live: `${PAGES}/QR-code/`, code: `${GH}/QR-code` },
];

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ICON_EXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></svg>';
const ICON_CODE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>';
const ICON_LOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

/* ---------- render featured ---------- */
document.getElementById('cases').innerHTML = featured.map((p, i) => `
  <article class="case reveal">
    <a class="case__media" href="${p.live}" target="_blank" rel="noopener" style="--tint:${p.tint}" aria-label="Open the ${esc(p.title)} live demo">
      <div class="frame">
        <div class="frame__bar"><i></i><i></i><i></i></div>
        <img src="assets/projects/${p.img}.jpg" alt="Screenshot of ${esc(p.title)}" width="1280" height="800" loading="lazy" />
      </div>
    </a>
    <div class="case__body">
      <span class="case__num">${String(i + 1).padStart(2, '0')} / ${String(featured.length).padStart(2, '0')}</span>
      <h3 class="case__title">${esc(p.title)}</h3>
      <p class="case__desc">${esc(p.desc)}</p>
      <ul class="case__list">${p.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>
      ${p.note ? `<p class="case__note">${esc(p.note)}</p>` : ''}
      <ul class="tags" aria-label="Built with">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="case__links">
        <a class="btn btn--accent" href="${p.live}" target="_blank" rel="noopener">Live demo ${ICON_EXT}</a>
        ${p.code
          ? `<a class="btn btn--ghost" href="${p.code}" target="_blank" rel="noopener">${ICON_CODE} Source code</a>`
          : `<span class="private">${ICON_LOCK} Code is private</span>`}
      </div>
    </div>
  </article>`).join('');

/* ---------- render archive ---------- */
const grid = document.getElementById('grid');
grid.innerHTML = archive.map((p) => `
  <li class="tile reveal" data-cat="${p.cat}">
    <a class="tile__img" href="${p.live}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
      <img src="assets/projects/${p.img}.jpg" alt="" width="1280" height="800" loading="lazy" />
      <span class="tile__badge">${esc(p.label)}</span>
    </a>
    <div class="tile__body">
      <h3 class="tile__title">${esc(p.title)}</h3>
      <p class="tile__desc">${esc(p.desc)}</p>
      <div class="tile__links">
        <a href="${p.live}" target="_blank" rel="noopener" aria-label="${esc(p.title)} live demo">Live ${ICON_EXT}</a>
        <a href="${p.code}" target="_blank" rel="noopener" aria-label="${esc(p.title)} source code">Code ${ICON_CODE}</a>
      </div>
    </div>
  </li>`).join('');

/* ---------- filters ---------- */
const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => chip.addEventListener('click', () => {
  const f = chip.dataset.filter;
  chips.forEach((c) => { const on = c === chip; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', String(on)); });
  grid.querySelectorAll('.tile').forEach((t) => {
    t.hidden = f !== 'all' && t.dataset.cat !== f;
    if (!t.hidden) t.classList.add('is-visible');
  });
}));

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable — theme just won't persist */ }
});

/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = (open) => { menu.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* ---------- copy email ---------- */
const copyBtn = document.getElementById('copy-email');
copyBtn.addEventListener('click', async () => {
  const label = copyBtn.querySelector('span');
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    label.textContent = 'Copied!';
  } catch (e) {
    label.textContent = copyBtn.dataset.email;
  }
  setTimeout(() => { label.textContent = 'Copy email'; }, 2000);
});

/* ---------- nav: shadow on scroll + active section ---------- */
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const links = [...document.querySelectorAll('.nav__links a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['about', 'work', 'more', 'contact'].forEach((id) => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });

/* ---------- reveal on scroll ---------- */
root.classList.add('js');
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
