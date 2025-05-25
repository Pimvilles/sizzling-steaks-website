
// Cache name with version
const CACHE_NAME = 'steaks-and-shakes-v2';
const DYNAMIC_CACHE = 'steaks-and-shakes-dynamic-v1';

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lovable-uploads/8aecd74d-bf8e-46ae-95ee-e669391bfea7.png'
];

// Routes to cache dynamically
const DYNAMIC_ROUTES = [
  '/menu',
  '/order-online',
  '/about',
  '/contact',
  '/deals',
  '/gallery'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests (except for known CDNs)
  if (url.origin !== location.origin && !url.host.includes('googleapis.com') && !url.host.includes('gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache:', request.url);
          return cachedResponse;
        }

        // Fetch from network and cache if successful
        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Determine which cache to use
            const isStaticAsset = STATIC_ASSETS.includes(url.pathname);
            const isDynamicRoute = DYNAMIC_ROUTES.includes(url.pathname) || url.pathname === '/';
            
            if (isStaticAsset || isDynamicRoute) {
              const cacheName = isStaticAsset ? CACHE_NAME : DYNAMIC_CACHE;
              
              caches.open(cacheName)
                .then((cache) => {
                  console.log('Service Worker: Caching new resource:', request.url);
                  cache.put(request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered');
  if (event.tag === 'order-sync') {
    event.waitUntil(syncOrders());
  }
});

// Push notification support
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  const options = {
    body: event.data ? event.data.text() : 'New notification from Steaks & Shakes',
    icon: '/lovable-uploads/8aecd74d-bf8e-46ae-95ee-e669391bfea7.png',
    badge: '/lovable-uploads/8aecd74d-bf8e-46ae-95ee-e669391bfea7.png',
    tag: 'steaks-shakes-notification',
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification('Steaks & Shakes', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});

// Helper function for syncing orders (placeholder)
async function syncOrders() {
  // This would sync any offline orders when connection is restored
  console.log('Service Worker: Syncing offline orders...');
  // Implementation would depend on your backend API
}
