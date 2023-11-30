interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isAvailable: boolean;
}

function Button({ isAvailable, children, className, onClick }: ButtonProps) {
  const bgTextColor = isAvailable
    ? 'bg-dorong-primary-main'
    : 'bg-dorong-gray-0';
  return (
    <button
      className={`flex items-center justify-center w-full h-full rounded-md ${bgTextColor} text-dorong-white ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
