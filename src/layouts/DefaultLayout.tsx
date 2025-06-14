import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const DefaultLayout: FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 overflow-y-auto bg-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout;