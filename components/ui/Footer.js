import Link from 'next/link';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer({ settings }) {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 py-12 border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2">
                        <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 block">
                            {settings.business.brandName}
                        </Link>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
                            {settings.business.brandTagline}
                        </p>
                        <div className="flex gap-4">
                            {settings.business.social.instagram && (
                                <a href={settings.business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-red-600 transition-colors">
                                    <FiInstagram size={24} />
                                </a>
                            )}
                            {settings.business.social.linkedin && (
                                <a href={settings.business.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-red-600 transition-colors">
                                    <FiLinkedin size={24} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-red-600">Sobre</Link></li>
                            <li><Link href="#features" className="text-neutral-600 dark:text-neutral-400 hover:text-red-600">Diferenciais</Link></li>
                            <li><Link href="#vehicles" className="text-neutral-600 dark:text-neutral-400 hover:text-red-600">Estoque</Link></li>
                            <li><Link href="#testimonials" className="text-neutral-600 dark:text-neutral-400 hover:text-red-600">Depoimentos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Contato</h4>
                        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>{settings.business.brandEmail}</li>
                            <li>{settings.business.brandPhone}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-500">
                    {settings.theme.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
