import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Manually create a root div and append it to body
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<App />);