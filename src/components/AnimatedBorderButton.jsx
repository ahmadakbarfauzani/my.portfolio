import { Download } from "lucide-react"
export const AnimatedBorderButton = ({ children }) => {
    return (
        <button 
           className="relative bg-transparent border border-border
            text-foreground hover:border-primary/50 transition-all
            duration-1000 focus:outline-none focus-visible:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed group
            px-8 py-3 text-lg font-medium rounded-full overflow-visible
            animated-border"
        >
            {/* Animated SVG Border */}
            <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 48"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
            >
            <path
            d="M 24,1 L 176,1 A 23,23 0 0 1 199,24 L 199,24 A 23,23 0 0 1 176,47 L 24,47 A 23,23 0 0 1 1,24 L 1,24 A 23,23 0 0 1 24,1"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="600"
            strokeDashoffset="600"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-border-path"
            />
         </svg>
         <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-primary transition-colors duration-500">
            {children}
         </span>
         </button>
    );
};
