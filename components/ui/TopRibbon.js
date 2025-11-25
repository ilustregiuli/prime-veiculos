import { useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function TopRibbon({ settings }) {
    const [visible, setVisible] = useState(true);

    if (!visible || !settings.enabled) return null;

    return (
        <div className="bg-neutral-900 text-white px-4 py-2 text-sm font-medium relative z-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center text-center pr-8">
                <span>{settings.message}</span>
            </div>
            {settings.closeable && (
                <button
                    onClick={() => setVisible(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                    <FiX size={16} />
                </button>
            )}
        </div>
    );
}
