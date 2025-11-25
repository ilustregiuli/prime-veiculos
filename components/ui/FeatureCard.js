import * as Icons from "react-icons/fi";

export default function FeatureCard({ icon, title, description }) {
    const IconComponent = Icons[icon] || Icons.FiStar;

    return (
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                <IconComponent />
            </div>
            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
        </div>
    );
}
