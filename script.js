(() => {
  "use strict";

  const { person, sections } = window.CV;
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");

  // ---------- Theme ----------
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
  };
  const savedTheme = store.get("theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  $("#theme-toggle").addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  // ---------- Hero ----------
  $("#top").innerHTML = `
    <p class="eyebrow">${esc(person.role)}</p>
    <h1 class="hero-name"><span>${esc(person.first)}</span> <span>${esc(person.last)}.</span></h1>
    <p class="hero-hello">${esc(person.hello)}</p>
    <p class="hero-intro">${esc(person.intro)}</p>
    <div class="hero-actions">
      <a class="btn" href="#about">Get to know me <span aria-hidden="true">↓</span></a>
      <a class="btn ghost" href="${esc(person.cv)}" download>Download CV</a>
    </div>
    <a class="hero-photo" href="#about" aria-label="About me">
      <img src="${esc(person.portrait)}" alt="${esc(person.portraitAlt)}">
      <span class="hero-photo-tag">about me <span aria-hidden="true">→</span></span>
    </a>`;

  // ---------- Section renderers ----------
  const list = (items, cls = "bullets") =>
    items && items.length ? `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";

  const externalLink = (link, cls = "btn") =>
    link && link.url
      ? `<a class="${cls}" href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} <span aria-hidden="true">↗</span></a>`
      : "";

  const flagIcon = (flag) =>
    flag ? `<i class="mini-flag ${esc(flag)}" role="img" aria-label="${flag === "nl" ? "Netherlands" : "Serbia"}"></i>` : "";

  const renderers = {
    about: (s) => `
      <div class="prose">${s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <p class="signature">~ ${esc(person.name.split(" ")[0])}</p>
      <div class="facts">${s.facts.map((f) => `<div class="fact"><strong>${esc(f.value)}</strong><span>${esc(f.label)}</span></div>`).join("")}</div>`,

    timeline: (s) => `
      <ol class="timeline">${s.items.map((it) => `
        <li class="entry" id="${esc(it.id)}">
          <div class="entry-meta">
            ${it.date ? `<span class="date">${esc(it.date)}</span>` : ""}
            ${it.place ? `<span class="place">${flagIcon(it.flag)}${esc(it.place)}</span>` : ""}
          </div>
          <div class="entry-main">
            <h3>${esc(it.role)}</h3>
            ${it.org ? `<p class="org">${esc(it.org)}</p>` : ""}
            ${it.text ? `<p class="entry-text">${esc(it.text)}</p>` : ""}
            ${list(it.bullets)}
            ${list(it.tags, "tags")}
            ${externalLink(it.link)}
          </div>
        </li>`).join("")}
      </ol>`,

    projects: (s) => `
      <div class="cards">${s.items.map((p) => `
        <article class="card" id="${esc(p.id)}">
          <p class="card-kind">${esc(p.kind)}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
          ${list(p.bullets)}
          ${list(p.tags, "tags")}
        </article>`).join("")}
      </div>
      <div class="more-row">${externalLink({ label: "More on GitHub", url: person.github }, "btn ghost")}</div>`,

    skills: (s) => `
      <div class="skill-groups">${s.groups.map((g) => `
        <div class="skill-group">
          <h3>${esc(g.name)}</h3>
          ${list(g.items, "chips")}
        </div>`).join("")}
      </div>`,

    hobbies: (s) => `
      <div class="cards">${s.items.map((h) => `
        <article class="card">
          <h3>${esc(h.title)}</h3>
          <p>${esc(h.text)}</p>
        </article>`).join("")}
      </div>`,

    contact: () => `
      <a class="contact-big" href="mailto:${esc(person.email)}">${esc(person.email)}</a>
      ${person.workStatus ? `<p class="work-status"><i class="mini-flag eu" role="img" aria-label="European Union"></i>${esc(person.workStatus)}</p>` : ""}
      <div class="contact-row">
        ${externalLink({ label: "GitHub", url: person.github }, "btn ghost")}
        ${externalLink({ label: "LinkedIn", url: person.linkedin }, "btn ghost")}
        <a class="btn" href="${esc(person.cv)}" download>Download CV (PDF)</a>
      </div>`,
  };

  $("#sections").innerHTML = sections
    .map((s, i) => `
      <section class="section reveal" id="${esc(s.id)}" aria-labelledby="${esc(s.id)}-title">
        <header class="sec-head">
          <span class="sec-index">${pad(i + 1)} —</span>
          <h2 class="sec-title" id="${esc(s.id)}-title">${esc(s.title)}</h2>
          <p class="sec-lede">${esc(s.lede)}</p>
        </header>
        ${renderers[s.kind](s)}
      </section>`)
    .join("");

  const nav = $("#nav");
  nav.innerHTML =sections.map((s) => `<a href="#${esc(s.id)}">${esc(s.label)}</a>`).join("");

  // ---------- Scroll effects ----------
  const navLinks = new Map([...document.querySelectorAll("#nav a")].map((a) => [a.hash.slice(1), a]));

  if ("IntersectionObserver" in window) {
    const revealer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealer.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

    // Highlight the nav link of the section currently in the middle of the screen.
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.forEach((a) => a.classList.remove("active"));
        const a = navLinks.get(e.target.id);
        if (a) {
          a.classList.add("active");
          nav.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" }); // keeps it visible on phones
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".section, .hero").forEach((el) => spy.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  // Sections are built by this script, so the browser can't jump to a #link on its own.
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) {
    target.classList.add("in");
    target.closest(".reveal")?.classList.add("in");
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant" }));
  }

  const topbar = $(".topbar");
  const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
