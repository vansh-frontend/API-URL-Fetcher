const CACHE_NAME = 'api-viewer-cache-v1';
const APP_SHELL = [
  '/',
  '/static/style.css',
  '/static/responsive.css',
  '/static/img/gear.png',
  '/static/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : undefined))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Network-first for API calls, cache-first for same-origin static assets
  if (request.url.includes('/api') || request.headers.get('accept')?.includes('application/json')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  }
});
