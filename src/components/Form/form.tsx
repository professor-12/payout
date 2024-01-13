"use client";
import { useStorex } from "@/store/store";
import { useState } from "react";

interface Form {
    title: string;
    id: string | number;
    placeholder?: string;
}

const inputfield: Array<Form> = [
    { title: "API ID", id: "e1", placeholder: "Enter merchant id" },
    { title: "Secret Key", id: "e2", placeholder: "Enter public key" },
];

const Form = () => {
    const data = useStorex() as any
    const [userInputData, setUserInputData] = useState<any>(
        inputfield.map((items) => {
            return { title: items.title, value: "" };
        })
    );

    const handleUserInput = (identifier: string, value: any) => {
        setUserInputData((prev: Form[]) => {
            const indexValue = prev.find((index) => index.title == identifier);
            return [...prev];
        });
    };

    const handleUserSubmission = () => {
        data.setOpenSetup(false)
        data.setPaymentMethod(true)
    }

    return (
        <form className="space-y-3">
            {inputfield.map((field, index) => (
                <div
                    className="flex  flex-col space-y-3 p-2 pt-4"
                    key={field.id}
                >
                    <label htmlFor="">
                        {field.title} <span className="text-red-500">*</span>
                    </label>

                    <div className="border border-[#E3E3E3] rounded-md overflow-hidden">
                        <input
                            className="p-2 focus:outline-none placeholder:text-sm placeholder: w-full"
                            type="text"
                            placeholder={field.placeholder}
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <button
                    onClick={handleUserSubmission}
                    type="button"
                    className="p-3 px-5 bg-blue-400/90 text-white rounded-md"
                >
                    Continue
                </button>
            </div>
        </form>
    );
};

export default Form;
