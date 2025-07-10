import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AnimatePresence } from "motion/react";

const DefaultLayout: FC = () => {
    const location = useLocation();
    return (
        <div className="relative z-10 flex w-full flex-col bg-white">
            <SidebarProvider>
                <SidebarInset>
                    <Header />
                    {/* 49 */}
                    <main className="flex-1 bg-main mt-[100px]">
                        <AnimatePresence mode="wait">
                            <Outlet key={location.pathname} />
                        </AnimatePresence>
                    </main>
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
};

export default DefaultLayout;
