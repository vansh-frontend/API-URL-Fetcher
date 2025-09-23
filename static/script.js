(function() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').catch(function(err) {
        console.warn('SW registration failed', err);
      });
    });
  }

  // Optional: show install prompt if supported
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    // Could expose a custom UI trigger if needed
    // Example: auto-prompt once
    deferredPrompt.prompt();
  });
})();
