import Error from "@/components/bits/Error";
import type { FC } from "react";


const NotFound: FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <Error
                baseIntensity={0.2}
            >
                404啦请联系小主
            </Error>
        </div>
    )
}

export default NotFound;