import type { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-white text-gray-300 py-6 px-4 sticky bottom-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* 左侧版权 */}
                <div className="text-sm">&copy; {new Date().getFullYear()} zxl.</div>

                {/* 右侧社交图标（示例：用简单文字替代图标） */}
                <div className="flex space-x-4 text-xl">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">🐦</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">🐙</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">🔗</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;