import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './utils/i18n';
import { initializePWA } from './utils/pwa';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Initialize PWA features
initializePWA().catch(console.error);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);