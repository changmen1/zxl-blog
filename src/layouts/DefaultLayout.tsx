import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AnimatePresence } from "motion/react";

const DefaultLayout: FC = () => {
    const location = useLocation();
    return (
        <SidebarProvider>
            <SidebarInset>
                <Header />
                <main className="flex-1 bg-main">
                    <AnimatePresence mode="wait">
                        <Outlet key={location.pathname} />
                    </AnimatePresence>
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DefaultLayout;
