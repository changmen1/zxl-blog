import type { FC } from "react";
import Article from "./components/article";
import Dreams from "./components/Dreams";
import Recommend from "./components/recommend";

const Home: FC = () => {
    return (
        <div className="select-none">
            <div className="mt-[-50px] h-[100vh] md:mt-0 md:h-[41.8vw]">
                <div className="fixed h-[100vh] w-full md:h-[41.8vw]">
                    {/* TODO 背景说明 Bromo, Area Gunung Bromo, Podokoyo, Kabupaten de Pasuruan, Java oriental, Indoné */}
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-200"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        }}
                    ></div>
                    {/* 文字描述层 */}
                    <div className="absolute top-8 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%]">
                        <h2 className="text-xl md:text-2xl font-bold mb-1">布罗莫火山，印度尼西亚</h2>
                        <p className="text-sm md:text-base">
                            Bromo, Area Gunung Bromo, Podokoyo, Kabupaten de Pasuruan, Java oriental, Indoné
                        </p>
                    </div>
                    {/* 作者层 */}
                    <button onClick={(() => console.log(alert("你好")))} className="bg-black/20 shadow-lg absolute bottom-130 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%] text-center">
                        <p className="text-sm md:text-base">
                            点击查看最新文章
                        </p>
                        <p className="text-sm md:text-base">
                            Click to view the latest articles
                        </p>
                    </button>
                </div>
            </div>
            <div className="relative z-10 w-full bg-main p-5 flex justify-between">
                <Article />
                <Dreams />
                <Recommend />
            </div>
        </div>
    );
};

export default Home;
