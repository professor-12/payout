import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { RxCaretDown} from "react-icons/rx"
const inter = Inter({ subsets: ["latin"] });
const Profile = () => {
    return (
        <div className="flex space-x-4 px-2 text-white">
            <div className="w-fit  rounded-lg overflow-hidden">
                <Image
                    src={"/Image.png"}
                    alt="ProfileImg"
                    width={35}
                    height={35}
                />
            </div>
            <div
                className={`${inter.className} flex items-center justify-between flex-1 space-x-3`}
            >
                <div className="text-[15px]  flex flex-col justify-between">
                    <div className="name">Nishyan</div>
                    <p className="underline text-[#FFFF] text-[.6rem] tracking-wide font-thin">
                        Visit Store
                    </p>
                </div>
                <div className="text-base"><RxCaretDown className="text-2xl"/></div>
            </div>
        </div>
    );
};

export default Profile;
