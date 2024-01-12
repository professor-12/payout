import React, { FC } from "react";
import Image from "next/image";
import Profile from "../Profile/profile";
import NavLinks from "./NavLinks/NavLinks";
import CreditBalance from "../CreditBalance";
const SideBar: React.FC = () => {
    return (
        <>
            <div className="bg-secondary absolute md:relative top-0 bottom-0 hidden text-[.6rem]  md:flex flex-col z-30 sm:w-[40%] lg:w-[18%] p-3 justify-between min-h-screen">
                <div className=" flex flex-col space-y-6">
                    <Profile />
                    <NavLinks />
                </div>
                <CreditBalance />
            </div>
        </>
    );
};

export default SideBar;
