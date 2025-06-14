import { ModeToggle } from "@/components/mode-toggle";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
    return (
        <>
            {/* 顶部导航栏固定 */}
            <header className="fixed top-0 right-0 left-0 z-20 flex h-12 items-center justify-between border-b bg-customGray px-3 py-2 shadow-sm">
                <div className="text-xl font-bold text-headerColor">Zxl Blog</div>
                <nav className="space-x-6">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-headerColor"
                                : "text-headerColor transition hover:text-green-500"
                        }
                    >
                        主页
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "text-headerColor"
                                : "text-headerColor transition hover:text-green-500"
                        }
                    >
                        关于我
                    </NavLink>
                </nav>
                <ModeToggle />
            </header>
            {/* 标题栏固定在导航下方 */}
            <div className="fixed top-12 right-0 left-0 z-20 flex h-20 items-center bg-headerColorF justify-between border-b px-3 py-2">
                <span>标题一</span>
                <span>标题二</span>
                <span>标题三</span>
                <span>标题四</span>
                <span>标题伍</span>
                <span>标题刘</span>
            </div>
        </>
    );
};

export default Header;
