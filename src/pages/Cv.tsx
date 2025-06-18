import Aurora from "@/components/bits/Aurora";
import type { FC } from "react";

const Cv: FC = () => {
    return (
        <>
            <div className="pt-5">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
                这里是小主的简历 还在努力编写中~~~~~~~~~~~~~~~~~~~~~~~~
            </div>
        </>
    )
}

export default Cv;