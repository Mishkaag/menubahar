const CACHE_NAME = 'menu-cache-v1';
const urlsToCache = [
  '/menubahar/',
  '/menubahar/index.html',
  '/menubahar/style.css',
  '/menubahar/script.js',
  '/menubahar/manifest.json',
  '/menubahar/icons/icon-192x192.png', // Убедитесь, что пути к иконкам правильные
  '/menubahar/icons/icon-512x512.png'
  // Добавьте все остальные ресурсы, которые должны быть доступны офлайн
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
