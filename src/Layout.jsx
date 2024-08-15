import { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children, theme, setTheme }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [children]);

    return (
        <main className="bg-background dark:bg-background-dark">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="min-h-screen" role="main">
                {children}
            </div>
            <Footer />
        </main>
    );
}