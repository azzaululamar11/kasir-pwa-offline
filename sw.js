const CACHE_NAME = 'kasir-offline-v4';
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['/', '/index.html', '/manifest.json'])));
});
self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('script.google.com')) return; // API jangan dicache
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
