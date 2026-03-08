
(function () {
  // Determine which page is current to set the active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = (page === 'index.html' || page === '');

  const pages = [
    { href: 'index.html',     label: 'Home' },
    { href: 'research.html',  label: 'Research' },
    { href: 'bookshelf.html', label: 'Bookshelf' },
    { href: 'contact.html',   label: 'Contact' },
  ];

  const navLinks = pages
    .map(p => {
      const active = (page === p.href || (page === '' && p.href === 'index.html'))
        ? ' class="active"'
        : '';
      return `<a href="${p.href}"${active}>${p.label}</a>`;
    })
    .join('\n      ');

  // Only show the semester/meta line and portrait on the home page
  const metaLine = isHome
    ? `<div class="masthead-meta">
          Semester VI <span class="ornament">§</span> 2026&ensp;·&ensp;New Delhi, India&ensp;·&ensp;Updated March 2026
        </div>`
    : '';

  const portrait = isHome
    ? `<div class="portrait-wrap">
        <div class="portrait-box">
          <img src="image.png" alt="Siddharth Yadav" />
        </div>
      </div>`
    : '';

  const headerHTML = `
  <hr class="top-rule" />
  <hr class="top-rule-thin" />

  <!-- SITE HEADER -->
  <header class="site-header">
    <div class="site-header-inner">
      <div>
        <a href="index.html" class="masthead-name"><em>Siddharth</em> Yadav</a>
        <div class="masthead-tagline">B.Tech. CSE + Mathematics <span class="ornament">·</span> IIIT Delhi</div>
        ${metaLine}
      </div>
      ${portrait}
    </div>

    <nav class="site-nav">
      ${navLinks}
    </nav>
  </header>`;

  // Insert the header before the first child of .page (or at the top of body)
  const page_div = document.querySelector('.page') || document.body;
  page_div.insertAdjacentHTML('afterbegin', headerHTML);
})();
