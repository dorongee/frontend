interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isAvailable: boolean;
}

function Button({ isAvailable, children }: ButtonProps) {
  const bgTextColor = isAvailable
    ? 'bg-dorong-primary-main'
    : 'bg-dorong-gray-0';
  return (
    <button
      className={`flex items-center justify-center w-full h-12 rounded-md ${bgTextColor} text-dorong-white`}
    >
      {children}
    </button>
  );
}

export default Button;
