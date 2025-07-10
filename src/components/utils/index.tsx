import { useEffect, useState, type FC } from "react";


const Utils: FC = () => {
    const [visible, setVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100); // 超过 100px 时显示按钮
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <>
            {/* 回到顶部 */}
            {
                visible ?
                    <div className='fixed bottom-[40px] right-[25px] z-10 cursor-pointer text-center'>
                        <div onClick={scrollToTop} className='w-[60px] h-[60px] flex flex-col justify-center text-[#000] rounded-[12px] border border-[#ccc] bg-[rgba(175,212,98,0.7)] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border'>
                            <span>
                                🚀
                            </span>
                            <span className='text-[15px] text-[#000]'>
                                TOP
                            </span>
                        </div>
                    </div> : null
            }
            {/* 小主 */}
            <div className='fixed bottom-[110px] right-[25px] z-10 cursor-pointer block'>
                <div className='bg-local-banner w-[60px] h-[60px] flex flex-col justify-center text-[#000] rounded-[12px] border border-[#ccc] bg-[rgba(175,212,98,0.7)] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border'>
                </div>
            </div>
        </>
    )
}

export default Utils