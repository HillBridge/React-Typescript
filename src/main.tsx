import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalContext, globalDefaultValue } from './context/global.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContext.Provider value={globalDefaultValue}>
      <App />
    </GlobalContext.Provider>

  </StrictMode>,
)
