import './_assets/globals.scss'
import HomePage from './_components/home';


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HomePage />
        </main>
    );
}