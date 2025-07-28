/*
 * Author: 💗zxl
 * Created on Mon Jul 28 2025
 * 宠物猫 - 1.0
 * Copyright (c) 2025 Dv
 * https://github.com/changmen1
 */

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { useLoadingComplete, useInit } from './hooks/use-fillingPoint.ts'
import useFingerprintJS from './hooks/use-fingerprintJS.ts'
import Utils from './components/utils/index.tsx'
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
    <Utils />
    {/* 鼠标特效 */}
    {/* <SplashCursor /> */}
  </ThemeProvider>
  // </StrictMode>,
)
