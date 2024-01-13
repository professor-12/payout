"use client";
import React, { useContext, createContext, useState } from "react";

const initilaValue = {};

const context = createContext(initilaValue);

export const useStorex = () => {
    console.log("first");
    return useContext(context);
};
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

    const [openSetUp, setOpenSetup] = useState(false);
    const [openPaymentMethod, setPaymentMethod] = useState(false);
    return (
        <context.Provider
            value={{
                paymentProviders,
                setPaymentProviders,
                setOpenSetup,
                setPaymentMethod,
                openSetUp,
                openPaymentMethod,
            }}
        >
            {children}
        </context.Provider>
    );
};

export default Provider;
