import GooeyNav from "@/components/bits/GooeyNav";
import { ModeToggle } from "@/components/mode-toggle";
import { type FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate();

    const handlePath = (path: string) => {
        navigate(path, {
            replace: true,
        });
    }

    const items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/blog" },
    ];

    return (
        <>
            {/* 顶部导航栏固定 */}
            <header className="fixed top-0 right-0 left-0 z-20 flex h-12 items-center justify-between border-b bg-customGray px-3 py-2 shadow-sm">
                <div className="text-xl font-bold text-headerColor cursor-pointer" onClick={() => handlePath('/')}>Zxl Blog</div>
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </header>
            {/* 标题栏固定在导航下方 */}
            <div className="fixed top-12 right-0 left-0 z-20 flex h-20 items-center bg-headerColorF justify-between border-b px-3 py-2">
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar" onClick={() => handlePath('/article')}>文章</span>
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar" onClick={() => handlePath('/landscape')}>风景</span>
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar">美食</span>
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar">影视</span>
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar">音乐</span>
                <span className="font-ZCOOL text-2xl cursor-pointer hover:text-blue-500 text-mysidebar">梦境</span>
            </div>
        </>
    );
};

export default Header;
