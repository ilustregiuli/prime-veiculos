import { FiStar } from "react-icons/fi";

export default function TestimonialCard({ name, role, rating, text }) {
    return (
        <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
                ))}
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 italic">"{text}"</p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <div className="font-bold text-neutral-900 dark:text-white">{name}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{role}</div>
                </div>
            </div>
        </div>
    );
}
