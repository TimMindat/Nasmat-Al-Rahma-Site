import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './utils/i18n';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);