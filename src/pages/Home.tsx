import type { FC } from "react";
import Article from "./components/article";
import Dreams from "./components/Dreams";
import Recommend from "./components/recommend";
import bg from "@/assets/bg.jpg"
import Timeline from "./components/Timeline";
import { Outlet } from "react-router-dom";
import SplitText from "@/components/bits/SplitText"

const Home: FC = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="select-none">
            <Outlet />
            {/* 背景 */}
            <div className="mt-[-50px] h-[100vh] md:mt-0 md:h-[41.8vw]">
                <div className="fixed h-[100vh] w-full md:h-[41.8vw]">
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-200"
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div>
                    {/* 文字描述层 */}
                    <div className="absolute top-8 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%]">
                        <SplitText
                            text="布罗莫火山，印度尼西亚"
                            className="text-xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <SplitText
                            text="Bromo, Area Gunung Bromo, Podokoyo, Kabupaten de Pasuruan, Java oriental, Indoné"
                            className="text-xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                </div>
            </div>
            {/* 文章 */}
            <div className="relative z-10 w-full bg-main p-5 flex justify-between gap-4 pb-10 pl-18 pr-18">
                <div className="flex-1 basis-1/3">
                    <Article />
                </div>
                <div className="flex-1 basis-1/3">
                    <Dreams />
                </div>
                <div className="flex-1 basis-1/3">
                    <Recommend />
                </div>
            </div>
            {/* 时间线 */}
            <div className="relative z-10 w-full bg-Timeline pb-10 pt-10 pl-18 pr-18 mb-5">
                <Timeline />
            </div>
        </div>
    );
};

export default Home;
