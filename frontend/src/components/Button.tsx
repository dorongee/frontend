interface ButtonProps {
  isAvailable: boolean;
}

function Button({ isAvailable }: ButtonProps) {
  const bgTextColor = !isAvailable
    ? 'bg-dorong-primary-main'
    : 'bg-dorong-gray-0';
  return (
    <button
      className={`flex items-center justify-center w-full h-12 rounded-md ${bgTextColor} text-dorong-white`}
    >
      버튼 입니다.
    </button>
  );
}

export default Button;
