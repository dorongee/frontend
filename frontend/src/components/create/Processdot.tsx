interface DotProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}
export default function Dot({ isActive }: DotProps) {
  const color = isActive ? 'bg-[#9E36CF]' : 'bg-[#D9D9D9]';
  return <div className={`${color} w-[12px] h-[12px] rounded-full`}></div>;
}
