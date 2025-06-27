// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { useLoadingComplete, useInit } from './hooks/use-fillingPoint.ts'
import useFingerprintJS from './hooks/use-fingerprintJS.ts'
// import SplashCursor from './components/bits/Move.tsx'

useLoadingComplete('ZxlBlog程序初始化加载完成!')
// console.log("%c ", "background: url(http://p79mwfmry.bkt.clouddn.com/logo50.jpg) no-repeat center;padding-left:80px;padding-bottom: 80px;border-radius:50%;")
useFingerprintJS()
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
