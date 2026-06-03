// sw.js - This file needs to be in the root of the directory to work,
//         so do not move it next to the other scripts

const CACHE_NAME = 'lab-8-starter';

// Installs the service worker. Feed it some initial URLs to cache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './assets/scripts/main.js',
        './recipes/1_50-thanksgiving-side-dishes.json',
        './recipes/2_roasting-turkey-breast-with-stuffing.json',
        './recipes/3_moms-cornbread-stuffing.json',
        './recipes/4_50-indulgent-thanksgiving-side-dishes-for-any-holiday-gathering.json',
        './recipes/5_healthy-thanksgiving-recipe-crockpot-turkey-breast.json',
        './recipes/6_one-pot-thanksgiving-dinner.json'
      ]);
    })
    
                
  );
});

// Activates the service worker
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// Intercept fetch requests and cache them
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })

  );
});