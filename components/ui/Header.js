import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import CtaButton from './CtaButton';

export default function Header({ settings }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Diferenciais', href: '#features' },
        { name: 'Estoque', href: '#vehicles' },
        { name: 'Depoimentos', href: '#testimonials' },
    ];

    return (
        <header className={`sticky top-0 z-40 transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800 ${scrolled ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-sm py-3' : 'bg-white dark:bg-neutral-950 py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <img src={settings.business.brandLogo} alt="Logo" className="h-8 w-auto" />
                    {settings.business.brandName}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.href} className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    {settings.theme.header.showThemeToggle && mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
                        >
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>
                    )}
                    <CtaButton href="#cta" variant="primary" className="py-2 px-4 text-sm">
                        Fale Conosco
                    </CtaButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-neutral-900 dark:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 p-4 shadow-lg flex flex-col gap-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-neutral-900 dark:text-white py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        {settings.theme.header.showThemeToggle && mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                            >
                                {theme === 'dark' ? <><FiSun /> Modo Claro</> : <><FiMoon /> Modo Escuro</>}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
