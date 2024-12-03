import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50";
    let variantClasses = "";
    let sizeClasses = "";

    switch (variant) {
      case "primary":
        variantClasses =
          "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700";
        break;
      case "secondary":
        variantClasses = "bg-zinc-900 text-white hover:bg-zinc-800";
        break;
      case "outline":
        variantClasses =
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900";
        break;
      default:
        break;
    }

    switch (size) {
      case "sm":
        sizeClasses = "h-8 px-3 text-sm";
        break;
      case "md":
        sizeClasses = "h-10 px-4";
        break;
      case "lg":
        sizeClasses = "h-12 px-6 text-lg";
        break;
      default:
        break;
    }

    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

    return (
      <button ref={ref} className={combinedClasses} {...props} />
    );
  }
);

Button.displayName = "Button";

export default Button;
