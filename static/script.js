(function() {
  // Unregister any existing service workers to avoid caching issues
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        registration.unregister();
      });
    });
  }

  // Clear app-specific caches that may hold old CSS/JS
  if (window.caches && typeof window.caches.keys === 'function') {
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(key) { return key.includes('api-viewer-cache'); })
          .map(function(key) { return caches.delete(key); })
      );
    });
  }
})();
