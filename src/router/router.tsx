import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import Blog from "@/pages/Blog"
import Article from "@/pages/Article/Article"
import Landscape from "@/pages/Landscape/Landscape"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
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
                path: "blog",
                element: <Blog />,
            },
            {
                path: "article",
                element: <Article />,
            },
            {
                path: "landscape",
                element: <Landscape />,
            },
        ],
    },
])
