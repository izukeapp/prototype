// Floating "back to screen map" button — injected into every prototype screen.
(function () {
  if (window.self !== window.top) return; // hide inside iframes/previews
  var btn = document.createElement('a');
  btn.href = 'index.html';
  btn.title = 'Back to screen map';
  btn.setAttribute('aria-label', 'Back to screen map');
  btn.innerHTML =
    '<span class="material-symbols-outlined" style="font-size:22px;">grid_view</span>';
  Object.assign(btn.style, {
    position: 'fixed',
    left: '20px',
    bottom: '20px',
    zIndex: '99999',
    width: '48px',
    height: '48px',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg,#FF3B5C,#BA0035)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
    textDecoration: 'none',
    transition: 'transform 0.15s ease'
  });
  btn.addEventListener('mouseenter', function () { btn.style.transform = 'scale(1.08)'; });
  btn.addEventListener('mouseleave', function () { btn.style.transform = 'scale(1)'; });

  // Ensure Material Symbols font is available even on screens that don't load it
  if (!document.querySelector('link[href*="Material+Symbols"]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    document.head.appendChild(link);
  }

  document.body.appendChild(btn);
})();
