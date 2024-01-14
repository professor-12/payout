import Image from "next/image";
import React from "react";
import BackDrop from "./BackDrop";
import { useStorex } from "@/store/store";
import Toggle from "../Toggle";
import SetupButton from "../Button/SetupButton";

const PaymentMethod = () => {
    const handleFinishSetUp = () => {
    }
    const data = useStorex() as any;
    return (
        <>
            <BackDrop onClick={data?.setPaymentMethod} />
            <div
                className={`absolute overflow-hidden space-y-7 w-[80%] z-50 xl:w-[30%] top-10 lg:-[35%] md:w-[50%] mx-auto lg:left-[35%] md:left-[30%] left-[10%] bg-white p-8 rounded-xl xl:left-[35%]`}
            >
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">Choose payment methods</h1>
                    <span>x</span>
                </div>
                <div className="space-y-3 relative mb-12 max-h-[30rem]  overflow-auto">
                    {data.paymentMethod.map((item: any) => {
                        return (
                            <div
                                key={item.img}
                                className="flex justify-between items-center"
                            >
                                <div className="flex space-x-4  items-center">
                                    <div className="h-[3.7rem] flex items-center p-2 bg-[#F2F2F2] rounded">
                                        <Image
                                            src={item.img}
                                            alt={""}
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                    <h1 className="font-semibold text-sm">
                                        {item.title}
                                    </h1>
                                </div>
                                <div>
                                    <Toggle />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute bottom-0 space-y-4  bg-white p-4 w-full flex items-center flex-col">
                    <SetupButton/>
                    <p className="underline text-xs mr-[4rem]">
                        Edit Cashfree details
                    </p>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
