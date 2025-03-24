interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "error" | "warning";
  disabled?: boolean;
}

const colorClasses = {
  primary:
    "bg-gradient-to-tl from-primary to-secondary text-white hover:from-primary hover:to-secondary",
  secondary:
    "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary hover:to-secondary",
  success: "bg-green-600 text-white hover:bg-green-500",
  error: "bg-red-600 text-white hover:bg-red-500",
  warning: "bg-yellow-600 text-white hover:bg-yellow-500",
};

const outlinedClasses = {
  primary:
    "border border-primary text-primary hover:bg-gradient-to-tl hover:from-primary hover:to-secondary hover:text-white",
  secondary:
    "border border-secondary text-secondary hover:bg-gradient-to-tl hover:from-primary hover:to-secondary hover:text-white",
  success:
    "border border-green-600 text-green-600 hover:bg-green-100 hover:border-green-600 hover:text-green-600",
  error:
    "border border-red-600 text-red-600 hover:bg-red-100 hover:border-red-600 hover:text-red-600",
  warning:
    "border border-yellow-600 text-yellow-600 hover:bg-yellow-100 hover:border-yellow-600 hover:text-yellow-600",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out";
  const disabledStyles = "opacity-50 cursor-not-allowed";
  const shadowEffect = "shadow-md hover:shadow-lg hover:scale-105";

  let variantStyles = "";

  switch (variant) {
    case "contained":
      variantStyles = `${
        colorClasses[color] || colorClasses.primary
      } ${shadowEffect}`;
      break;
    case "outlined":
      variantStyles = `${
        outlinedClasses[color] || outlinedClasses.primary
      } ${shadowEffect}`;
      break;
    case "text":
      variantStyles = `text-${color}-600 hover:bg-${color}-100`;
      break;
    default:
      variantStyles = `${colorClasses.primary} ${shadowEffect}`;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${
        disabled ? disabledStyles : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
