import type { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="fixed bottom-0 right-0 left-0 z-20 bg-customGray  h-10 border-t shadow-sm">
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between text-sm">
                <span>&copy; {new Date().getFullYear()} zxl.</span>
                <div className="flex items-center space-x-4 text-xl">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">🐙</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;