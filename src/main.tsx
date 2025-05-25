
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// PWA Installation prompt handler
let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA: Install prompt available');
  e.preventDefault();
  deferredPrompt = e;
  
  // You can show your own install button here
  // For now, we'll just log it
  console.log('PWA: Install prompt saved for later use');
});

window.addEventListener('appinstalled', () => {
  console.log('PWA: App was installed');
  deferredPrompt = null;
});

// Enhanced service worker registration with better error handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          console.log('Service Worker: Update found');
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Service Worker: New content available');
                // You could show a toast here asking user to refresh
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });

  // Listen for messages from service worker
  navigator.serviceWorker.addEventListener('message', (event) => {
    console.log('Message from service worker:', event.data);
  });
}

// Network status detection
window.addEventListener('online', () => {
  console.log('App: Back online');
  // You could show a toast notification here
});

window.addEventListener('offline', () => {
  console.log('App: Gone offline');
  // You could show a toast notification here
});

// Initialize the React app
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(<App />);
