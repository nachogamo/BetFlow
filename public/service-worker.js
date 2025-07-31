self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('beatflow-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-192x192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
<<<<<<< HEAD
=======


>>>>>>> f32e27f87c9d29808aedab6805fe6361906c5f92
