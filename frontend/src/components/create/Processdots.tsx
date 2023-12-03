import Dot from './Processdot';

interface Props {
  currentNumber: number;
}

export default function Processdots({ currentNumber }: Props) {
  return (
    <div className=" w-[64px] h-[12px] flex gap-3">
      {[0, 1, 2].map((i) => (
        <Dot isActive={i === currentNumber} key={i} />
      ))}
    </div>
  );
}
