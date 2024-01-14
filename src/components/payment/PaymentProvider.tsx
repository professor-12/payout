"use client";
import Toggle from "@/UI/Toggle";
import { useStorex } from "@/store/store";
import Image from "next/image";

const Payment = () => {
    const data = useStorex() as any;
    const handleClick = (identifier: any) => {
        data.setOpenModal("setup");
        data.setSetUpProduct(identifier);
    };
    return (
        <>
            <div className="space-y-2">
                {data?.paymentProviders.map((item: any) => (
                    <div key={item.title} className="flex justify-between p-1">
                        <div className="flex items-center space-x-3">
                            <div className="border h-[3.7rem] flex items-center p-2 rounded">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={45}
                                    height={45}
                                />
                            </div>
                            <h1 className="font-semibold text-[.75rem]">
                                {item.title}
                            </h1>
                        </div>

                        {!item.setup ? (
                            <div className="flex items-center">
                                <button
                                    onClick={() => {
                                        handleClick(item.title);
                                    }}
                                    className="border p-1 px-3 rounded text-blue-600 text-sm border-blue-600 font-medium"
                                >
                                    Setup
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <button
                                    onClick={() => {}}
                                    className="border p-1 px-3 rounded text-gray-600 text-sm  font-medium"
                                >
                                    Detail
                                </button>
                            </div>
                        )}
                    </div>
                ))}

                <div className="flex justify-between p-1">
                    <div className="flex items-center space-x-3">
                        <div className="border py-3 p-2 shadow-sm rounded">
                            <Image
                                src={"/Group 917.png"}
                                alt=""
                                width={45}
                                height={45}
                            />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[.75rem]">
                                Cash on delivery
                            </h1>
                            <p className="text-[.7rem]">
                                Receive payments in cash upon delivery.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Toggle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
