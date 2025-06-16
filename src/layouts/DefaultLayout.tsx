import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DefaultLayout: FC = () => {
    return (
        <div className="relative z-10 flex w-full flex-col bg-white">
            <SidebarProvider>
                <SidebarInset>
                    <Header />
                    <main className="flex-1 bg-main mt-[100px]">
                        <Outlet />
                    </main>
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
};

export default DefaultLayout;
