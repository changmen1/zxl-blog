import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
// import SplashCursor from './components/bits/Move.tsx'

createRoot(document.getElementById('zxl')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      {/* 鼠标特效 */}
      {/* <SplashCursor /> */}
    </ThemeProvider>
  </StrictMode>,
)
