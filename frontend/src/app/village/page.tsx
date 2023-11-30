import VillageContainer from '../../components/village/VillageContainer';

const MOCK_ITEMS = [
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
  { name: '한라봉', image: '/images/item-0.png' },
];

const village = [
  { name: '마을' },
  { name: '마을' },
  { name: '마을' },
  { name: '마을' },
];

export default function VillagePage() {
  return <VillageContainer items={MOCK_ITEMS} villages={village} />;
}
