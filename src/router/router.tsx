import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@/layouts/DefaultLayout"
import Home from "@/pages/Home"
import Blog from "@/pages/Blog"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
])
