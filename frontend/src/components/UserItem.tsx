import Image from 'next/image';
import Button from './Button';

function UserItemList() {
  return (
    <div className="w-[60px] h-[80px] cursor-grab">
      <div className="w-[60px] h-[60px] rounded-[4px] bg-[#FBF4FF]"></div>
      <label>아이템</label>
    </div>
  );
}

export default UserItemList;
