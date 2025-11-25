import Header from '../ui/Header';
import Footer from '../ui/Footer';

export default function Layout({ settings, children }) {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            <Header settings={settings} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer settings={settings} />
        </div>
    );
}
