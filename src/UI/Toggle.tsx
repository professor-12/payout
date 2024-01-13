"use client";
import React, { useState } from "react";

const Toggle = ({ method }: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const handleInput = () => {
        method && method();
        setIsOpen((prev) => !prev);
    };
    return (
        <button
            onClick={handleInput}
            className={`${
                isOpen ? "bg-blue-500 justify-end" : "justify-start"
            }  bg-[#D9D9D9] p-[.19rem] flex rounded-full w-[2.39rem] `}
        >
            <div className="bg-white h-4 w-4 rounded-full"></div>
        </button>
    );
};

export default Toggle;
