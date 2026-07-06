const CACHE_NAME = "boat-dashboard-v2";

const FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];

// INSTALL
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES);
    })
  );
});

// ACTIVATE (limpa cache antigo)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(keys.map(k => caches.delete(k)))
      ),
      clients.claim()
    ])
  );
});

// FETCH
self.addEventListener("fetch", (event) => {

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );

});
