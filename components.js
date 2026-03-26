/* ============================================================
   COMPONENTS.JS — Shared nav & footer, injected automatically
   
   YOU DON'T NEED TO EDIT THIS FILE.
   It reads from config.js and builds the nav/footer for you.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. FIGURE OUT WHICH PAGE WE'RE ON
        so we can mark the right nav link as "active"
        and build correct relative paths to assets
  ---------------------------------------------------------- */
  const path      = window.location.pathname;
  const inSubdir  = path.includes('/projects/') || path.includes('/blog/');
  const root      = inSubdir ? '../' : '';  // prefix for links & assets

  // Which nav link is active?
  const isAbout    = path.endsWith('index.html')    || path.endsWith('/');
  const isProjects = path.includes('projects');
  const isBlog     = path.includes('blog');


  /* ----------------------------------------------------------
     2. INJECT NAV
  ---------------------------------------------------------- */
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = `
      <div class="nav-inner">
        <a href="${root}index.html" class="nav-brand">${SITE.name}</a>

        <button class="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav-links">
          <li><a href="${root}index.html"    ${isAbout    ? 'class="active"' : ''}>About</a></li>
          <li><a href="${root}projects.html" ${isProjects ? 'class="active"' : ''}>Projects</a></li>
          <li><a href="${root}blog.html"     ${isBlog     ? 'class="active"' : ''}>Blog</a></li>
        </ul>
      </div>
    `;

    // Mobile toggle
    const toggle = navEl.querySelector('.nav-toggle');
    const links  = navEl.querySelector('.nav-links');
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }


  /* ----------------------------------------------------------
     3. INJECT FOOTER
  ---------------------------------------------------------- */
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <p>
        © ${SITE.year} ${SITE.name}
        &nbsp;·&nbsp;
        <a href="${SITE.linkedin}" target="_blank">LinkedIn</a>
        &nbsp;·&nbsp;
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        ${SITE.footerNote ? `&nbsp;·&nbsp; ${SITE.footerNote}` : ''}
      </p>
    `;
  }


  /* ----------------------------------------------------------
     4. FILL IN ABOUT PAGE (if we're on index.html)
  ---------------------------------------------------------- */
  const aboutPage = document.getElementById('about-page');
  if (aboutPage) {

    // Photo
    const photoEl = document.getElementById('about-photo');
    if (photoEl) {
      photoEl.src = SITE.photo;
      photoEl.alt = SITE.photoAlt;
    }

    // Name + tagline
    const nameEl    = document.getElementById('about-name');
    const taglineEl = document.getElementById('about-tagline');
    if (nameEl)    nameEl.textContent    = SITE.name;
    if (taglineEl) taglineEl.textContent = SITE.tagline;

    // Bio paragraphs
    const bioEl = document.getElementById('about-bio');
    if (bioEl) {
      bioEl.innerHTML = SITE.bio.map(p => `<p>${p}</p>`).join('');
    }

    // LinkedIn + Email buttons
    const linkedinBtn = document.getElementById('btn-linkedin');
    const emailBtn    = document.getElementById('btn-email');
    if (linkedinBtn) linkedinBtn.href = SITE.linkedin;
    if (emailBtn)    emailBtn.href    = `mailto:${SITE.email}`;

    // Resume cards — rendered into the dedicated Résumés section
    const resumeList = document.getElementById('resume-list');
    if (resumeList && SITE.resumes && SITE.resumes.length > 0) {
      resumeList.innerHTML = SITE.resumes.map(r => `
        <a href="${r.file}" target="_blank" class="resume-card">
          <div class="resume-card-icon">↓</div>
          <div class="resume-card-body">
            <div class="resume-card-title">${r.label}</div>
            <div class="resume-card-sub">${r.description || 'PDF — click to download'}</div>
          </div>
          <div class="resume-card-arrow">→</div>
        </a>
      `).join('');
    }

    // Tags
    const tagsEl = document.getElementById('about-tags');
    if (tagsEl) {
      tagsEl.innerHTML = SITE.tags
        .map(t => `<span class="tag">${t}</span>`)
        .join('');
    }

    // Currently
    const currentlyEl = document.getElementById('about-currently');
    if (currentlyEl && SITE.currently.length > 0) {
      currentlyEl.innerHTML = SITE.currently
        .map(item => `<li style="margin-bottom:0.5rem">${item}</li>`)
        .join('');
    }

    // Contact email
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
      contactEmail.textContent = SITE.email;
      contactEmail.href = `mailto:${SITE.email}`;
    }
  }


  /* ----------------------------------------------------------
     5. SET PAGE <title> DYNAMICALLY
        Reads the data-title attribute on <body>
        e.g. <body data-title="Projects"> → "Projects — Your Name"
  ---------------------------------------------------------- */
  const pageTitle = document.body.getAttribute('data-title');
  if (pageTitle) {
    document.title = `${pageTitle} — ${SITE.name}`;
  } else {
    document.title = SITE.name;
  }

});
