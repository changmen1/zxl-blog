/*
 * Author: zxl
 * Created on Sun Jul 06 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import { useState, type FC } from "react";
import { Button } from "@/components/ui/button"
import _S from "@/assets/shang.svg"
import wx from "@/assets/shang/wx.png"
import al from "@/assets/shang/al.jpg"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Line } from '@rc-component/progress';
import { motion, AnimatePresence } from "framer-motion";

const TOTAL = 100;
/**
 * 
 * @returns 赏
 */
const Reward: FC = () => {
    const [count, setCount] = useState(0);
    const percent = Math.min((count / TOTAL) * 100, 100);
    return (
        <Drawer>
            <DrawerTrigger asChild>
                {/* className="w-8 h-8 animate-heartbeat" */}
                <div className="w-10 h-7 animate-heartbeat cursor-pointer">
                    <img src={_S} alt="China Flag" className="w-10 h-7 mr-2 " />
                </div>
            </DrawerTrigger>
            {/* className="bg-[#f472b6]" */}
            <DrawerContent>
                <div className="flex">
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>谢谢你的赞助</DrawerTitle>
                            <DrawerDescription>Thank you for your sponsorship.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <h3>赞助成功会在赞助榜显示您的微信头像/支付宝头像，需要显示留言，可以在赞助的时候加上备注。</h3>
                            <div className="flex justify-between">
                                <img src={wx} alt="China Flag" className="w-44 h-52" />
                                <img src={al} alt="China Flag" className="w-44 h-52" />
                            </div>
                            <div className="bg-white rounded-lg text-center mt-4 h-[180px]">
                                <h2 className="text-lg font-semibold mb-2">🎯 目标：支持 100 次</h2>

                                <div className="relative mb-4">
                                    <Line percent={percent} strokeWidth={6} strokeColor="#22c55e" />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <span className="text-sm font-medium">{count} / {TOTAL}</span>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    <motion.div
                                        key={count}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="text-green-600 font-bold mb-2"
                                    >
                                        +1 🎉 感谢您的助力！
                                    </motion.div>
                                </AnimatePresence>

                                <button
                                    onClick={() => setCount((prev) => prev + 1)}
                                    className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                                >
                                    🚀我要助力
                                </button>
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button>再想一下吧</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">下次一定</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                    {/* 赞助者 */}
                    <div className="p-4 pb-0 flex-1">
                        <h2 className="h4 mb-3">
                            <a data-view-component="true" className="Link--primary no-underline Link d-flex flex-items-center">
                                赞助者
                                <span title="335" data-view-component="true" className="ml-1">335</span></a></h2>
                        <ul className="flex flex-wrap">
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/5153846?s=64&amp;v=4" alt="@dwelle" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/in/29110?s=64&amp;v=4" alt="@dependabot[bot]" height="32" width="32" data-view-component="true" className="avatar" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/11256141?s=64&amp;v=4" alt="@ad1992" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/125676?s=64&amp;v=4" alt="@lipis" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/in/2141?s=64&amp;v=4" alt="@dependabot-preview[bot]" height="32" width="32" data-view-component="true" className="avatar" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/197597?s=64&amp;v=4" alt="@vjeux" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/14358394?s=64&amp;v=4" alt="@zsviczian" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/14922478?s=64&amp;v=4" alt="@mtolmacs" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/77840495?s=64&amp;v=4" alt="@excalibot" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/47294779?s=64&amp;v=4" alt="@ryan-di" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/20387666?s=64&amp;v=4" alt="@Mrazator" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/145676?s=64&amp;v=4" alt="@tomayac" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/23306911?s=64&amp;v=4" alt="@Fausto95" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/605742?s=64&amp;v=4" alt="@kbariotis" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                        </ul>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Reward;