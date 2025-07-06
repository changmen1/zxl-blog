import Aurora from "@/components/bits/Aurora";
import useHisStore from "@/store";
import { useEffect, useState, type FC } from "react";

const Cv: FC = () => {
    const [colorStops, setColorStops] = useState<string[]>([]);
    const theme = useHisStore((state) => state.theme)

    const [htmlContent, setHtmlContent] = useState('');


    useEffect(() => {
        // TODO 加载ASCII文件
        fetch('/src/pages/ASCII.txt')
            .then((res) => res.text())
            .then((text) => {
                setHtmlContent(text);
            });
    }, []);

    // TODO 这里需要监听切换主题的时候来重新动态获取主题变量
    useEffect(() => {
        const root = getComputedStyle(document.documentElement);
        const color1 = root.getPropertyValue("--animatedBg-1").trim();
        const color2 = root.getPropertyValue("--animatedBg-2").trim();
        const color3 = root.getPropertyValue("--animatedBg-3").trim();
        setColorStops([color1, color2, color3]);
    }, [theme]);
    return (
        <>
            <div className="pt-5" style={{}}>
                <Aurora
                    colorStops={colorStops}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
                这里是小主的简历 还在努力编写中~~~~~~~~~~~~~~~~~~~~~~~~
                <div className="flex m-auto w-[1000px]">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-[230px]" />
                    <div className="flex-1 pl-20 pr-20">
                        <div className="w-[600px]">
                            <div className="leading-10">
                                <div className="indent-8">非常喜欢翁凯老师的这段话，学计算机，一定要有一个非常强大的心理状态，计算机的所有东西都是人做出来的，别人能想出来的，我也一定能想出来，在计算机里头没有任何黑魔法，所有的东西，只不过是我现在还不知道，总有一天，我会把所有的细节，所有的内部的东西全都搞明白的。</div>
                                <div>个人履历</div>
                            </div>
                            <hr className="bg-black h-[2px]" />
                            <div className="leading-10">
                                <div className="flex">
                                    <div className="mr-10">2024-01</div>
                                    <div>宁波戴维医疗器械股份有限公司 / 前端开发工程师</div>
                                </div>
                                <hr className="bg-black h-[2px]" />
                                <div className="flex">
                                    <div className="mr-10">2022-10</div>
                                    <div>兰州新昊源电子信息科技有限公司 / 前端开发工程师</div>
                                </div>
                                <hr className="bg-black h-[2px]" />
                                <div className="flex">
                                    <div className="mr-10">2021-01</div>
                                    <div>上海逻讯信息科技有限公司-兰州分布[校园兼职] / 全栈开发工程师</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv;