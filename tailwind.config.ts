import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#D3D4D9",
                    secondary: "#0F1015",
                    accent: "#14141C",
                    neutral: "#C2B526",
                    "base-100": "#D3D4D9",
                    info: "#0000ff",
                    success: "#00ff00",
                    warning: "#ec0000",
                    error: "#ffff00",
                },
            },
        ],
    },
};
export default config;
