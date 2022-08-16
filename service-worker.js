console.log("service worker working");
self.addEventListener('install',function(event) {
console.log("working");
    event.waitUntil(
     caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
        ])
     })
      )
    })