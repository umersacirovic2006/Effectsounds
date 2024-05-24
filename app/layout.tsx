import type { Metadata } from "next";
import { Inter, Lato, Syne } from "next/font/google";
import "./globals.css";
import "./_assets/globals.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const lato = Lato({ subsets: ["latin"], variable: "--lato", weight: ['100', '300', '400', '700', '900'] });
const syne = Syne({ subsets: ["latin"], variable: "--syne" });

export const metadata: Metadata = {
    title: "Effectsounds",
    description: "Effectsounds, Elevate your projects to the next level",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${lato.variable} ${syne.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
