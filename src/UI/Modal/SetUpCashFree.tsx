"use client"
import { Inter } from "next/font/google";
import BackDrop from "./BackDrop";
import Image from "next/image";
import Form from "@/components/Form/form";

const inter = Inter({ subsets: ["latin"] });

const SetUpCashFree = () => {
    return (
        <>            
            <BackDrop />
            <div
                className={`${inter.className} fixed  z-50 xl:w-[40%] top-20 lg:-[45%] md:w-[60%] mx-auto lg:left-[35%] md:left-[25%] bg-white p-8 rounded-xl xl:left-[30%]`}
            >
                <div className="space-y-5">
                    <div className="space-y-3">
                        <h1 className="text-lg font-medium">
                            Set up Cashfree Payments
                        </h1>
                        <div>
                            <p className="text-slate-600 text-sm">
                                Please enter your Cashfree API keys. You can
                                find your API keys on
                            </p>
                            <p className="underline font-semibold text-blue-600 text-sm">
                                Cashfree API Key Dashboard
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#E7F0F7] mt-4 p-2 flex justify-center w-full rounded-lg">
                        <Image
                            src={"/Info.svg"}
                            className="mr-2"
                            alt="InfoSvg" 
                            width={20}
                            height={20}
                        />
                        <p className="">
                            Don’t have an Cashfree account?{" "}
                            <span className="underline font-medium text-slate-700">
                                Create now
                            </span>
                        </p>
                    </div>
                </div>
                <Form />
            </div>
        </>
)
};

export default SetUpCashFree;
