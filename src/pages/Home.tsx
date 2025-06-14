import type { FC } from "react";
import Article from "./components/article";
import Dreams from "./components/Dreams";
import Recommend from "./components/recommend";
import bg from "@/assets/bg.jpg"

const Home: FC = () => {
    return (
        <div className="select-none">
            <div className="mt-[-50px] h-[100vh] md:mt-0 md:h-[41.8vw]">
                <div className="fixed h-[100vh] w-full md:h-[41.8vw]">
                    {/* TODO 背景说明 Bromo, Area Gunung Bromo, Podokoyo, Kabupaten de Pasuruan, Java oriental, Indoné */}
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-200"
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div>
                    {/* 文字描述层 */}
                    <div className="absolute top-8 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%]">
                        <h2 className="text-xl md:text-2xl font-bold mb-1">布罗莫火山，印度尼西亚</h2>
                        <p className="text-sm md:text-base">
                            Bromo, Area Gunung Bromo, Podokoyo, Kabupaten de Pasuruan, Java oriental, Indoné
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10 w-full bg-main p-5 flex justify-between gap-4 mb-10">
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
        </div>
    );
};

export default Home;
