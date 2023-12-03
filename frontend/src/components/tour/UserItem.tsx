import Image from 'next/image';
import { VILLAGE_INFO } from '../../constants';

interface UserItemListProps {
  item?: number;
}
function UserItemList({ item }: UserItemListProps) {
  return (
    <div className="w-[60px] h-[80px] cursor-grab">
      <div className="w-[60px] h-[60px] rounded-[4px] bg-[#FBF4FF]">
        {item && (
          <Image
            src={item ? `/images/item-${item}.png` : ''}
            alt="item"
            width={60}
            height={60}
            className="rounded-[4px]"
          />
        )}
      </div>
      {item && (
        <label className="text-dorong-primary-dark text-[12px] font-medium leading-[14.16px]">
          {VILLAGE_INFO[item].itemName}
        </label>
      )}
    </div>
  );
}

export default UserItemList;
