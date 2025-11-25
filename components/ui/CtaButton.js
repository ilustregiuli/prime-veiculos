import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CtaButton({ children, variant = "primary", onClick, href, className }) {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center cursor-pointer";
    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-lg",
        outline: "border-2 border-current hover:bg-red-600 hover:border-red-600 hover:text-white text-neutral-900 dark:text-white",
        ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white"
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);

    if (href) {
        return <Link href={href} className={combinedClassName}>{children}</Link>;
    }

    return <button onClick={onClick} className={combinedClassName}>{children}</button>;
}
