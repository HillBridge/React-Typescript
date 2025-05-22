import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppStateProvider from './AppState.js';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AppStateProvider>
      <App />
    </AppStateProvider>

  </StrictMode>,
)
