import { ButtonHTMLAttributes } from "react";
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}
const CustomButton: React.FC<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
  return (
    <button className="bg-[#222429] hover:bg-black text-white font-bold py-2 px-4 rounded flex items-center gap-2" {...rest}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;