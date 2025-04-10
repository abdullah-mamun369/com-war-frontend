import React from "react";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  id,
  className = "",
  ...props
}) => {
  return (
    <div className={`grid w-full w-2xl items-center gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 shadow-md bg-transparent`}
        {...props}
      />
    </div>
  );
};

export default InputWithLabel;
