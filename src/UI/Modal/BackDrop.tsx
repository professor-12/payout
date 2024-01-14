"use client";
import { useStorex } from "@/store/store";
const BackDrop = (props: any) => {
    const handleClick = () => {
        data.setOpenModal("none");
        data.setSetUpProduct("");
    };
    const data = useStorex() as any;
    return (
        <div
            onClick={handleClick}
            className="fixed z-40 inset-0 bg-black opacity-30"
        />
    );
};

export default BackDrop;
