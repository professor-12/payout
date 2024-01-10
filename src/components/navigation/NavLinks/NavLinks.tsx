import Card from "@/UI/Card";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { PiChartBarLight } from "react-icons/pi";
import { SlCursor } from "react-icons/sl";
import { CiDiscount1 } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import Image from "next/image";
interface Links {
    title: string;
    path: string;
}
const NavLinks = () => {
    const Links: Links[] = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Orders",
            path: "/orders",
        },
        {
            title: "Products",
            path: "/products",
        },
        {
            title: "Delivery",
            path: "/delivery",
        },
        {
            title: "Marketing",
            path: "/marketing",
        },
        {
            title: "Analytics",
            path: "/analytics",
        },
        {
            title: "Payments",
            path: "/payments",
        },
        {
            title: "Tools",
            path: "/tools",
        },
        {
            title: "Discount",
            path: "/discounts",
        },
        {
            title: "Audience",
            path: "/audience",
        },
        {
            title: "Appearance",
            path: "/appearance",
        },
        {
            title: "Plugins",
            path: "/plugins",
        },
    ];

    const Appearance = (
        <Image src={"/Appearance.svg"} alt="" width={16} height={16} />
    );
    const Audience = (
        <Image src={"/Audience.svg"} alt="" width={16} height={16} />
    );
    const Vecto = <Image src={"/vecto.svg"} alt="" width={16} height={16} />;
    const Vect = <Image src={"/Naav.svg"} alt="" width={16} height={16} />;
    const Speaker = (
        <Image src={"/Speaker.svg"} alt="" width={16} height={16} />
    );
    const Logos = [
        <GoHome />,
        <LuClipboardList />,
        <PiSquaresFour />,
        <FiTruck />,
        Speaker,
        <PiChartBarLight />,
        <MdPayments />,
        <SlCursor />,
        Vect,
        Audience,
        Appearance,
        Vecto,
    ];
    return (
        <div className="flex flex-col w-full text-sm space-y-[0.2rem]">
            {Links.map((index, number) => (
                <Card
                    key={index.path}
                    className={
                        "hover:bg-primaryLightBlue w-[80%] mx-auto transition-colors"
                    }
                >
                    <span className="text-lg">{Logos[number]}</span>
                    <span className="text-[.75rem]">{index.title}</span>
                </Card>
            ))}
        </div>
    );
};

export default NavLinks;
