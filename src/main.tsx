// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { useLoadingComplete, useInit } from './hooks/use-fillingPoint.ts'
// import SplashCursor from './components/bits/Move.tsx'

useLoadingComplete('ZxlBlog程序初始化加载完成!')
useInit()

createRoot(document.getElementById('zxl')!).render(
  // TODO 关闭颜色模式
  // <StrictMode>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    {/* 鼠标特效 */}
    {/* <SplashCursor /> */}
  </ThemeProvider>
  // </StrictMode>,
)
