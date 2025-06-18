import Aurora from "@/components/bits/Aurora";
import Error from "@/components/bits/Error";
import type { FC } from "react";

const NotFound: FC = () => {
    return (
        <div className="pt-5">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="flex items-center justify-center">
                <Error
                    baseIntensity={0.2}
                >
                    404啦请联系小主
                </Error>
            </div>
        </div>
    )
}

export default NotFound;