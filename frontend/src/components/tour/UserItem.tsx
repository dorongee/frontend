import Image from 'next/image';
import { UserItem } from '../../types';

interface UserItemListProps {
  item?: UserItem;
}
function UserItemList({ item }: UserItemListProps) {
  return (
    <div className="w-[60px] h-[80px] cursor-grab">
      <div className="w-[60px] h-[60px] rounded-[4px] bg-[#FBF4FF]">
        {item && (
          <Image
            src={item ? `/images/item-${item.item_id}.png` : ''}
            alt="item"
            width={60}
            height={60}
            className="rounded-[4px]"
          />
        )}
      </div>
      {item && (
        <label className="text-dorong-primary-dark text-[12px] font-medium leading-[14.16px]">
          {item.item_name}
        </label>
      )}
    </div>
  );
}

export default UserItemList;
