import { FiCheck } from "react-icons/fi";
import CtaButton from "./CtaButton";

export default function VehicleCard({ name, price, details, features, cta, featured, image }) {
    return (
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${featured
                ? "bg-white dark:bg-neutral-900 border-2 border-red-500 shadow-xl scale-105 z-10"
                : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg"
            }`}>
            {featured && (
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 absolute top-4 right-4 rounded-full uppercase tracking-wider z-20">
                    Destaque
                </div>
            )}

            <div className="h-48 bg-neutral-200 dark:bg-neutral-800 w-full relative overflow-hidden">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                ) : (
                    <div className="flex items-center justify-center h-full text-neutral-400">Sem Imagem</div>
                )}
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{details}</p>
                <div className="text-2xl font-bold text-red-600 mb-6">{price}</div>

                <ul className="space-y-2 mb-8 flex-grow">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                            <FiCheck className="text-red-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <CtaButton variant={featured ? "primary" : "outline"} className="w-full justify-center mt-auto">
                    {cta}
                </CtaButton>
            </div>
        </div>
    );
}
