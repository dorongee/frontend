interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isAvailable: boolean;
}

function Button({ isAvailable, children, className, onClick }: ButtonProps) {
  const bgTextColor = isAvailable
    ? 'bg-dorong-primary-main'
    : 'bg-dorong-gray-0 pointer-events-none';
  return (
    <button
      className={`flex items-center justify-center w-full h-full text-dorong-white rounded-md ${bgTextColor} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
