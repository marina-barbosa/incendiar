interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  hasError,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-900">{label}</label>
      <input
        className="bg-zinc-100 border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-zinc-900"
        {...props}
      />
      {hasError && <p className="mt-1 text-sm text-red-600">{hasError}</p>}
    </div>
  );
};

export default CustomInput;
