var cacheName = 'v1.2';
var cacheFiles = [
  '/styles/style.css',
  '/js/index.js'
];

self.addEventListener('install', function (event) {
    console.log('[serviceWorker] installed');
    // event.waitUntil Delays the event until the Promise is resolved
    event.waitUntil(
      caches.open(cacheName).then(function(cache){
        // console.log("[serviceWorker] caching cacheFiles")
        // Add all the default files to the cache
        return cache.addAll(cacheFiles);
      })
    )
})

self.addEventListener('activate', function (event) {
    console.log('[serviceWorker] activated');
    event.waitUntil(
      caches.keys().then(function(cacheNames){
        return Promise.all(cacheNames.map(function(thisCacheName) {
          if(thisCacheName !== cacheName) {
            // console.log('[serviceWorker] Removing cached files from', thisCacheName);
            return caches.delete(thisCacheName);
          }
        }))
      })
    )
})

self.addEventListener('fetch', function (event) {
  // console.log('[serviceWorker] fetching', event.request.url);
  var request = event.request;
  if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => cachePage(request, response))
                .catch(err => getCachedPage(request))
                .catch(err => fetchCoreFile('/offline/'))
        );
    } else {
        event.respondWith(
            fetch(request)
                .catch(err => fetchCoreFile(request.url))
                .catch(err => fetchCoreFile('/offline/'))
        );
    }
})


function fetchCoreFile(url) {
  return caches.open(cacheName)
  .then(function (cache) {
    return cache.match(url);
  })
  .then(function (response) {
    return response ? response : Promise.reject();
  });
}
function getCachedPage(request) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request);
  }).then(function (response) {
    return response ? response : Promise.reject();
  });
}

function cachePage(request, response) {
  var clonedResponse = response.clone();
  caches.open(cacheName).then(function (cache) {
    return cache.put(request, clonedResponse);
  });
  return response;
}
