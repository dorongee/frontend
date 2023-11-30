import { type } from 'os';
import Button from '../Button';

function StartButton({ type }: { type: 'start' | 'complete' | 'check' }) {
  const className = {
    start: 'bg-dorong-primary-main text-dorong-white',
    complete: 'bg-dorong-gray-5 text-dorong-white',
    check:
      'bg-dorong-white text-dorong-gray-5 border-dorong-primary-lightlight border-[2px]',
  };
  const text = {
    start: '시작하기',
    complete: '완료',
    check: '둘러보기',
  };

  return (
    <div className="w-[76px] py-[16px]">
      <Button
        isAvailable={type !== 'complete'}
        className={`flex items-center justify-center p-[8px] ${className[type]} bg-dorong-primary-main`}
      >
        {text[type]}
      </Button>
    </div>
  );
}

export default StartButton;
