import { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [children]);

    return (
        <main className="bg-background">
            <Navbar />
            <div className="min-h-screen" role="main">
                {children}
            </div>
            <Footer />
        </main>
    );
}