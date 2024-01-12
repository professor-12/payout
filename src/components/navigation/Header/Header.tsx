import Search from "@/components/Search";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex  bg-white border-slate-200  top-0 right-0 left-0  p-3 px-5 border-b border-2 shadow-b  items-center justify-between">
            <div className="font-bold text-xl flex   flex-col lg:flex-row  space-x-3">
                <span>Payments</span>
                <div className="flex">
                    <span className="space-x-2 font-medium text-[#4D4D4D] text-[.65rem] flex items-center">
                        <span className="lg:text-lg">
                            <IoIosInformationCircleOutline />
                        </span>
                        <span>How it works</span>
                    </span>
                </div>
            </div>
            <Search />
            <div className="flex items-center space-x-4">
                <div className="flex space-x-1 text-zinc-500 text-sm items-center">
                    <MdOutlineLiveHelp className="text-lg" />{" "}
                    <span className=" text-slate-600 ">Need help?</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="bg-[#4D4D4D]/20 flex items-center justify-center h-10 w-10 rounded-full">
                        <Image
                            src={"/Group 39261.svg"}
                            width={18}
                            height={18}
                            alt=""
                        />
                    </div>
                    <div className="bg-[#4D4D4D]/20 flex items-center justify-center h-10 w-10 rounded-full">
                        <IoMenuSharp className="w-full" size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
