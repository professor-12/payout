import Toggle from "@/UI/Toggle";
import Image from "next/image";

const Payment = () => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between p-1">
                <div className="flex items-center space-x-3">
                    <div className="border h-[3.7rem] flex items-center p-2 shadow rounded">
                        <Image
                            src={"/Group 39290.jpg"}
                            alt=""
                            width={45}
                            height={45}
                        />
                    </div>
                    <h1 className="font-semibold text-[.75rem]">Razorpay</h1>
                </div>
                <div className="flex items-center">
                    <button className="border p-1 px-3 rounded text-blue-600 text-sm border-blue-600 font-medium">
                        Setup
                    </button>
                </div>
            </div>
            <div className="flex justify-between p-1">
                <div className="flex items-center space-x-3">
                    <div className="border h-[3.7rem] flex items-center p-2 shadow-sm rounded">
                        <Image
                            src={"/Group.png"}
                            alt=""
                            width={45}
                            height={45}
                        />
                    </div>
                    <h1 className="font-semibold text-[.75rem]">
                        Cashfree Payments
                    </h1>
                </div>
                <div className="flex items-center">
                    <button className="border p-1 px-3 rounded text-blue-600 text-sm border-blue-600 font-medium">
                        Setup
                    </button>
                </div>
            </div>
            <div className="flex justify-between p-1">
                <div className="flex items-center space-x-3">
                    <div className="border flex items-center h-[3.7rem] p-2 shadow-sm rounded">
                        <Image
                            src={"/Group 39287.png"}
                            alt=""
                            width={45}
                            height={45}
                        />
                    </div>
                    <h1 className="font-semibold text-[.75rem]">
                        PhonePe Payment Gateway
                    </h1>
                </div>
                <div className="flex items-center">
                    <button className="border p-1 px-3 rounded text-blue-600 text-sm border-blue-600 font-medium">
                        Setup
                    </button>
                </div>
            </div>
            <div className="flex justify-between p-1">
                <div className="flex items-center space-x-3">
                    <div className="border flex items-center h-[3.7rem] p-2 shadow-sm rounded">
                        <Image
                            src={"/Paytm svg.png"}
                            alt=""
                            width={45}
                            height={45}
                        />
                    </div>
                    <h1 className="font-semibold text-[.75rem]">
                        Paytm Payment Gateway
                    </h1>
                </div>
                <div className="flex items-center">
                    <button className="border p-1 px-3 rounded text-blue-600 text-sm border-blue-600 font-medium">
                        Setup
                    </button>
                </div>
            </div>
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
                    <Toggle/>
                </div>
            </div>
        </div>
    );
};

export default Payment;


