"use client";
import React, { useContext, createContext, useState } from "react";

const initilaValue = {};

const context = createContext(initilaValue);

export const useStorex = () => {
    return useContext(context);
};
type Modal = "setup" | "paymentmethod" | "none";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [paymentProviders, setPaymentProviders] = useState([
        { title: "Razorpay", img: "/Group 39290.jpg", setup: false },
        { title: "Cashfree Payments", img: "/Group.png", setup: false },
        {
            title: "PhonePe Payment Gateway",
            img: "/Group 39287.png",
            setup: false,
        },
        {
            title: "Paytm Payment Gateway",
            img: "/Paytm svg.png",
            setup: true,
        },
    ]);
    const [paymentMethod, setPaymentMethods] = useState([
        {
            title: "Visa",
            img: "/visa-logo.svg",
        },
        {
            title: "Mastercard",
            img: "/Group (1).svg",
        },
        {
            title: "Maestro",
            img: "/Maestro_2016 1.svg",
        },
        {
            title: "Rupay",
            img: "/RuPay 1.svg",
        },
        {
            title: "American Express",
            img: "/Vector (5).scg",
        },
        {
            title: "Diner Club",
            img: "/Group.svg",
        },
        {
            title: "Paytm",
            img: "/Paytm svg.png",
        },
        {
            title: "Airtel Money",
            img: "/7b32514134e62ce3 1.svg",
        },
    ]);

    const [openModal, setOpenModal] = useState<Modal>("none");
    const [setUpProduct, setSetUpProduct] = useState("");
    return (
        <context.Provider
            value={{
                paymentProviders,
                setPaymentProviders,
                paymentMethod,
                setOpenModal,
                openModal,
                setUpProduct,
                setSetUpProduct,
                setPaymentMethods,
            }}
        >
            {children}
        </context.Provider>
    );
};

export default Provider;
