import { cn } from "@/lib/utils";

export default function PageSection({
    id,
    title,
    subtitle,
    className,
    bgColor = "bg-white dark:bg-neutral-950",
    vPadding = "py-16 md:py-24",
    hPadding = "px-4 md:px-8",
    children
}) {
    return (
        <section id={id} className={cn(bgColor, vPadding, className)}>
            <div className={cn("max-w-7xl mx-auto", hPadding)}>
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">{title}</h2>}
                        {subtitle && <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
