import type { FC } from "react";
import Article from "./components/article";
import Dreams from "./components/Dreams";
import Recommend from "./components/recommend";
// import bg from "@/assets/bg/gugong2.jpg"
import bg from "@/assets/mp4/周星驰大话西游.mp4"
import { dhxy2 } from "@/assets/Quotes";
import { dhxy2USA } from "@/assets/Quotes";
import Timeline from "./components/Timeline";
import { Outlet } from "react-router-dom";
import SplitText from "@/components/bits/SplitText"
import WaveHeader from "@/components/demo/WaveHeader";

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
                    {/* 图片背景 */}
                    {/* <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-200"
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div> */}
                    {/* 视频背景 */}
                    <div className="relative w-full h-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={bg}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                    {/* 文字描述层 */}
                    <div className="absolute top-8 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%]">
                        <SplitText
                            text={dhxy2}
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
                        <br />
                        <SplitText
                            text={dhxy2USA}
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
                <WaveHeader />
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
            <div className="relative z-10 w-full bg-Timeline pb-10 pt-10 pl-18 pr-18">
                <Timeline />
            </div>
        </div>
    );
};

export default Home;
