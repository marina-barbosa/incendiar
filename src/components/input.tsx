import type React from "react";
import type { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: IconType;
  error?: string;
}

export const Input = ({
  label,
  icon: Icon,
  error,
  className = "",
  ...props
}: InputProps) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={inputId}
          className={`
            w-full px-4 py-3 bg-gray-800 rounded-lg
            ${Icon ? "pl-10" : ""}
            border border-gray-700
            focus:ring-2 focus:ring-orange-500 focus:border-transparent
            outline-none transition-all
            placeholder:text-gray-500
            ${error ? "border-red-500" : "hover:border-gray-600"}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
