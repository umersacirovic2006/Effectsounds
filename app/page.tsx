import Dialog from "./_components/_helpers/Dialog";
import HomePage from "./_components/home";

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
            <Dialog title1="Create an account" title2="Login" onClose={useClose} onOk={onOk} />
        </main>
    );
}
