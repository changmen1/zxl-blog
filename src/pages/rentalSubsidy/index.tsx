import type { FC } from "react";
import RentalAgreement from "./RentalAgreement";


const RentalSubsidy: FC = () => {
    return (
        <>
            <div className="pt-5">
                <div className="bg-gray-100 min-h-screen py-10 px-4">
                    <h1>
                        大学生就业补贴租房合同--支持电子签名--导出打印
                        {/* https://agilgur5.github.io/react-signature-canvas/ */}
                    </h1>
                    <RentalAgreement />
                </div>
            </div>
        </>
    )
}

export default RentalSubsidy;