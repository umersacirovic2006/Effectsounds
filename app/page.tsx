import { Suspense } from "react";
import Dialog from "./_components/_helpers/Dialog";
import HomePage from "./_components/home";
import SignUpDialog from "./_components/_helpers/SignUpDialog";

export default function Home() {
    async function useClose() {
        "use server";
        console.log("Ok was clicked");
    }

    async function onOk() {
        "use server";
        console.log("Ok was clicked");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HomePage />
            <Suspense>
                <Dialog
                    onClose={useClose}
                    onOk={onOk}
                />
                <SignUpDialog
                    onClose={useClose}
                    onOk={onOk}
                />
            </Suspense>
        </main>
    );
}
