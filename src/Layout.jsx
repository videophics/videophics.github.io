import { useEffect } from "react";
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

export default function Layout({ children, theme, setTheme }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [children]);

    return (
        <main className="bg-white dark:bg-body-dark">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="min-h-screen" role="main">
                {children}
            </div>
            <Footer />
        </main>
    );
}