import type { FC } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import menuBg from "@/assets/article/title.jpg"
import author from "@/assets/author/author3.jpg"
import { ModeToggle } from "../mode-toggle";

const Nav: FC = () => {
    function ListItem({
        title,
        children,
        href,
        ...props
    }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
        return (
            <li {...props}>
                <NavigationMenuLink asChild>
                    <Link to={href}>
                        <div className="text-sm leading-none font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    </Link>
                </NavigationMenuLink>
            </li>
        )
    }
    return (
        <>
            {/* PC端菜单 */}
            <NavigationMenu viewport={false} className="hidden md:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-customGray">首页</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="h-full w-full"
                                            href="/"
                                        >
                                            <p>グリーンリバーフラワー</p>
                                            <img src={menuBg} alt="" className="w-full h-full object-cover" />
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/" title="首页">
                                    首页
                                </ListItem>
                                <ListItem href="/404" title="404">
                                    404测试页面
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-customGray">更多</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="h-full w-full"
                                            href="/blog"
                                        >
                                            <img src={author} alt="" className="w-full h-full object-cover" />
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/blog" title="关于我">
                                    关于我
                                </ListItem>
                                <ListItem href="/rentalSubsidy" title="租房合同">
                                    哈哈哈，为了申请租房合同用到的
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-customGray">频道</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[80px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link to="/article" className="flex-row items-center gap-2">
                                            文章
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="landscape" className="flex-row items-center gap-2">
                                            风景
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="#" className="flex-row items-center gap-2">
                                            美食
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="#" className="flex-row items-center gap-2">
                                            梦境
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="bg-customGray">
                            <Link to="/cv">简历</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="bg-customGray">
                            <Link to="/cv">简历</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="bg-customGray">
                            <Link to="/cv">简历</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="bg-customGray">
                            <Link to="/cv">简历</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuList>
            </NavigationMenu>
            {/* 移动端菜单 */}
            <div className="flex md:hidden">
                <button className="p-2 rounded-md border">菜单</button>
            </div>
        </>
    )
}

export default Nav;