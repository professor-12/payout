import React from "react";
import { useStorex } from "@/store/store";
const SetupButton = () => {
    const data = useStorex() as any;
    const handleFinishSetUp = () => {
        const title = data?.setUpProduct;
        data.setPaymentProviders((prev: any) => {
            console.log("I'm a genius!! 😀");
            const items = prev.find((items: any) => items.title == title);
            items.setup = true;
            return prev;
        });
        data.setOpenModal("none")
    };
    return (
        <>
            <button
                onClick={() => {
                    handleFinishSetUp();
                }}
                className="bg-blue-600 mr-[4rem] rounded text-white text-sm p-2 px-4"
            >
                Finish Setup
            </button>
        </>
    );
};

export default SetupButton;

export const Paragraph = () => {
    const data = useStorex() as any;
    return (
        <p
            className="underline text-xs mr-[4rem] cursor-pointer"
            onClick={() => {
                data.setOpenModal("setup");
            }}
        >
            Edit Cashfree details
        </p>
    );
};
