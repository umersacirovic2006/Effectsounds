import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./_assets/globals.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Dialog from "./_components/_helpers/Dialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Effectsounds",
    description: "Effectsounds, Elevate your projects to the next level",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    async function onClose() {
        "use server";
    }

    async function onOk() {
        "use server";
        console.log("Ok was clicked");
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Dialog title="Create an account" onClose={onClose} onOk={onOk}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </Dialog>
                {children}
                <Footer />
            </body>
        </html>
    );
}
