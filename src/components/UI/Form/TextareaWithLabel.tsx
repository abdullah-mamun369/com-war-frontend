// components/TextareaWithLabel.tsx
import React from "react";

interface TextareaWithLabelProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({
  label,
  id,
  className = "",
  ...props
}) => {
  return (
    <div className={`grid w-full items-center gap-1.5 ${className} bg-none`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 shadow-md bg-transparent`}
        {...props}
      />
    </div>
  );
};

export default TextareaWithLabel;
