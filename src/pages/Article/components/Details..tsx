/*
 * Author: zxl
 * Created on Thu Jul 10 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import type { FC } from "react";
import bg from "@/assets/ArticleDeatils/bg.png"
import Reward from "@/pages/components/reward";


const ArticleDeatils: FC = () => {
    return (
        <div className="pt-30 bg-[#e9e9e9]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundAttachment: 'scroll'
            }}
        >
            <div className="w-[960px] block ml-auto mr-auto pb-5">
                <div className="w-[960px]">
                    {/* -------------固定广告位---------------- */}
                    <div className="mb-5">
                        <ul className="w-full">
                            <li className="shadow-md shadow-[rgba(153,153,153,0.7)]">
                                <a href="https://github.com/changmen1">
                                    {/* 广告图片 */}
                                    <img src="https://im1.book.com.tw/image/getImage?i=https://addons.books.com.tw/G/ADbanner/marketing/2025/07/bank/01_950x70_2507_0701-0706.png&amp;v=686264e3k&amp;w=&amp;h="></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <ul>
                            <li className="shadow-md shadow-[rgba(153,153,153,0.7)]">
                                <a href="https://github.com/changmen1">
                                    {/* 广告图片 */}
                                    <img src="https://im2.book.com.tw/image/getImage?i=https://addons.books.com.tw/G/ADbanner/2025/07/ebk99/ebook99_950300-0703.jpg&amp;v=68651109k&amp;w=&amp;h=" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* font-thin      // 100 - 极细
                    font-extralight // 200 - 超轻
                    font-light     // 300 - 轻 */}
                    {/* TODO 后期加入图标 */}
                    {/* TODO -------------相关推荐---------------- */}
                    <div className="mb-5 bg-white pt-1.5 font-extralight">
                        <h3 className="bg-[#747bc2] mt-[-10px] ml-2.5 mr-2.5 p-1 text-white font-bold">活动说明</h3>
                        <ul className="w-full pt-1.5 pl-2.5 pr-2.5 pb-2.5">
                            <li className="pl-6 relative p-2.5 border-b-1">
                                <i className="absolute top-2.5 left-0">🚀</i>
                                <a className="text-gray-800 hover:underline hover:decoration-black hover:underline-offset-4 transition-all" href="https://activity.books.com.tw/crosscat/show/A00000062854?loc=P_E241008000000381_title_002#E240315000000089" >
                                    周三加碼：7/9 電子書｜有聲書 結帳滿$699再95折
                                </a>
                            </li>
                            <li className="pl-6 relative p-2.5 border-b-1">
                                <i className="absolute top-2.5 left-0">🚀</i>
                                <a className="text-gray-800 hover:underline hover:decoration-black hover:underline-offset-4 transition-all" href="https://activity.books.com.tw/crosscat/show/A00000062854?loc=P_E241008000000381_title_002#E240315000000089" >
                                    周三加碼：7/9 電子書｜有聲書 結帳滿$699再95折
                                </a>
                            </li>
                            <li className="pl-6 relative p-2.5 border-b-1">
                                <i className="absolute top-2.5 left-0">🚀</i>
                                <a className="text-gray-800 hover:underline hover:decoration-black hover:underline-offset-4 transition-all" href="https://activity.books.com.tw/crosscat/show/A00000062854?loc=P_E241008000000381_title_002#E240315000000089" >
                                    周三加碼：7/9 電子書｜有聲書 結帳滿$699再95折
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* TODO -------------文章内容----------------  */}
                    <div className="mb-5 bg-white text-black pt-1.5 font-extralight">
                        <h3 className="bg-[#747bc2] mt-[-10px] ml-2.5 mr-2.5 p-1 text-white font-bold">★今日特價e書★</h3>
                        <div className="p-[15px]">
                            <div className="w-[280px] table-cell">
                                左侧
                            </div>
                            <div className="w-[650] table-cell">
                                <center>
                                    <a className="text-[#d00412]"> 📈圖解一流工作者的生產力技巧📈</a>
                                </center>
                                <br />
                                🎯從經典的理論：GTD、番茄鐘、心流、原子習慣、PDCA、時間管理矩陣。
                                <br />
                                🎯從經典的理論：GTD、番茄鐘、心流、原子習慣、PDCA、時間管理矩陣。
                                <br />
                                🎯從經典的理論：GTD、番茄鐘、心流、原子習慣、PDCA、時間管理矩陣。
                                <br />
                                🎯從經典的理論：GTD、番茄鐘、心流、原子習慣、PDCA、時間管理矩陣。
                                <br />
                                <br />
                                本書特色：
                                <br />
                                解答這些方法論如何有效實作？適合什麼問題情境？核心技巧為何？具體應用案例？以及實踐高效工作法過程中你一定會產生的疑問QA。
                                <br />
                                <br />
                                <center>
                                    <a className="text-[#d00412]"> 電腦玩物站長、趙胤丞老師實踐經驗，翻轉習以為常的做法！</a>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 bg-white pt-1.5 font-extralight">
                        <h3 className="bg-[#747bc2] mt-[-10px] ml-2.5 mr-2.5 p-1 text-white font-bold">赏</h3>
                        <Reward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDeatils;