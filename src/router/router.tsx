import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import Blog from "@/pages/Blog"
import Article from "@/pages/Article/Article"
import Landscape from "@/pages/Landscape/Landscape"
import { motion } from "motion/react"
import NotFound from "@/pages/NotFound"
import Cv from "@/pages/Cv"

// 切换动画
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
    // initial={{ width: 0 }}
    // animate={{ width: "100%" }}
    // exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
        {children}
    </motion.div>
)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <PageWrapper><Home /></PageWrapper>,
            },
            // {
            //     path: "home",
            //     element: <Home />,
            //     children: [
            //         { path: "article", element: <Article /> },
            //         { path: "landscape", element: <Landscape /> },
            //     ],
            // },
            {
                // 自传
                path: "blog",
                element: <PageWrapper><Blog /></PageWrapper>,
            },
            {
                // 简历
                path: "cv",
                element: <PageWrapper><Cv /></PageWrapper>,
            },
            {
                // 文章
                path: "article",
                element: <PageWrapper><Article /></PageWrapper>,
            },
            {
                // 风景
                path: "landscape",
                element: <PageWrapper><Landscape /></PageWrapper>,
            },
            {
                // 404
                path: "*",
                element: <PageWrapper><NotFound /></PageWrapper>,
            },
        ],
    },
])
