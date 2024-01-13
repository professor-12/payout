import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/navigation/SideBar";
import Provider from "@/store/store";

const popins = Poppins({
    subsets: ["latin-ext"],
    weight: ["200", "300"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
   
    return(
        <html lang="en">
            <body className={`${popins.className} flex`}>
                <div id="modal"></div>
                <div id="modal-overlay"></div>
                <Provider>
                    <SideBar />
                    <main className="flex-1">
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}
