import { SelectType } from './types';

export const AGE_OPTIONS: SelectType[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
  { value: 24, label: '24' },
  { value: 25, label: '25' },
  { value: 26, label: '26' },
  { value: 27, label: '27' },
  { value: 28, label: '28' },
  { value: 29, label: '29' },
  { value: 30, label: '30' },
  { value: 31, label: '31' },
  { value: 32, label: '32' },
  { value: 33, label: '33' },
  { value: 34, label: '34' },
  { value: 35, label: '35' },
  { value: 36, label: '36' },
  { value: 37, label: '37' },
  { value: 38, label: '38' },
  { value: 39, label: '39' },
  { value: 40, label: '40' },
  { value: 41, label: '41' },
  { value: 42, label: '42' },
  { value: 43, label: '43' },
  { value: 44, label: '44' },
  { value: 45, label: '45' },
  { value: 46, label: '46' },
  { value: 47, label: '47' },
  { value: 48, label: '48' },
  { value: 49, label: '49' },
  { value: 50, label: '50' },
  { value: 51, label: '51' },
  { value: 52, label: '52' },
  { value: 53, label: '53' },
  { value: 54, label: '54' },
  { value: 55, label: '55' },
  { value: 56, label: '56' },
  { value: 57, label: '57' },
  { value: 58, label: '58' },
  { value: 59, label: '59' },
  { value: 60, label: '60' },
  { value: 61, label: '61' },
  { value: 62, label: '62' },
  { value: 63, label: '63' },
  { value: 64, label: '64' },
  { value: 65, label: '65' },
  { value: 66, label: '66' },
  { value: 67, label: '67' },
  { value: 68, label: '68' },
  { value: 69, label: '69' },
  { value: 70, label: '70' },
  { value: 71, label: '71' },
  { value: 72, label: '72' },
  { value: 73, label: '73' },
  { value: 74, label: '74' },
  { value: 75, label: '75' },
  { value: 76, label: '76' },
  { value: 77, label: '77' },
  { value: 78, label: '78' },
  { value: 79, label: '79' },
  { value: 80, label: '80' },
  { value: 81, label: '81' },
  { value: 82, label: '82' },
  { value: 83, label: '83' },
  { value: 84, label: '84' },
  { value: 85, label: '85' },
  { value: 86, label: '86' },
  { value: 87, label: '87' },
  { value: 88, label: '88' },
  { value: 89, label: '89' },
  { value: 90, label: '90' },
  { value: 91, label: '91' },
  { value: 92, label: '92' },
  { value: 93, label: '93' },
  { value: 94, label: '94' },
  { value: 95, label: '95' },
  { value: 96, label: '96' },
  { value: 97, label: '97' },
  { value: 98, label: '98' },
  { value: 99, label: '99' },
];

export const CHEERING_IMG_KEY = 'cheeringImg';
export const DESPAIR_IMG_KEY = 'despairImg';
export const NORMAL_IMG_KEY = 'normalImg';
export const USER_ID_KEY = 'userId';

export const MAX_IMAGE_BYTE = 5242880;

export const SERVER_ADDRESS = '/api';

export const VILLAGE_INFO = [
  {
    name: '하효리 마을',
    id: 1,
    description:
      '하효리 마을은 제주에서 연중 기온이 가장 따뜻하며, 비옥한 땅과 풍부한 물로 인해 살기 좋은 곳으로 알려져 있습니다. 아름다운 해안 절경과 함께 마을 내에는 조용하고 평화로운 공터와 녹지가 자리하고 있어 주민들에게 안락한 환경을 제공합니다. 특히 귤나무가 곳곳에서 자라면서, 신선하고 상큼한 향기가 마을을 가득 채우고 있습니다. 하효마을은 자연과 조화로운 삶을 추구하는 이들에게 이상적인 마을로, 고유의 매력을 지닌 곳으로 손색이 없습니다.',
    latitude: 33.2523893,
    longitude: 126.6205896,
    radius: 1.2,
    quiz: '하효마을에서는 쇠소깍 축제가 열린다.',
    answer: 'O',
    distance: 0,
    itemName: '쇠소깍',
  },
  {
    name: '한남리 마을',
    id: 2,
    description:
      '한남리 마을은 한라산 남쪽에 자리하여 제주의 남쪽에 위치한 마을로 알려져 있습니다. 귤밭으로 이루어진 면적 대부분에서 건물들은 희소하게 분포되어 있으며, 전체 마을은 우거진 숲으로 둘러싸여 자연의 아름다움을 누릴 수 있는 특징을 가지고 있습니다.',
    latitude: 33.3249337,
    longitude: 126.6689156,
    radius: 2.5,
    quiz: '한남리마을에는 건물들이 많다.',
    answer: 'X',
    distance: 0,
    itemName: '고이오름',
  },
  {
    name: '신흥리 마을',
    id: 3,
    description:
      '신흥리 마을은 제주에서 유명한 동백으로 알려진 곳으로, 오랜 전통을 가지고 있어 동백 씨앗을 활용해 기름을 추출하여 식용 및 미용 등 다양한 용도로 활용해 왔습니다. 마을을 가로지르는 한편의 산책길에는 300년이 넘는 역사를 자랑하는 토종 동백나무가 자리하고 있어 마을의 아름다움을 더욱 돋보이게 하고 있습니다.',
    latitude: 33.5443711,
    longitude: 126.645376,
    radius: 1.1,
    quiz: '신흥리마을은 동백으로 유명하다.',
    answer: 'O',
    distance: 0,
    itemName: '성게',
  },
  {
    name: '세화리 마을',
    id: 4,
    description:
      '세화리 마을은 제주 동쪽에 위치하고 있으며, 에메랄드빛 바다가 눈에 띄는 곳으로 알려져 있습니다. 마을은 다랑쉬오름의 아름다운 풍경과 함께 조용한 편백 나무 숲 산책, 그리고 매력적인 세화 해변으로 유명합니다. 특히 해녀 탈의장 앞에서는 전통 해녀 삼춘들을 만날 수 있어 마을의 독특한 매력을 체험할 수 있는 장소로 손꼽힙니다.',
    latitude: 33.5206535,
    longitude: 126.8547591,
    radius: 1.1,
    quiz: '세화리마을에서는 해녀 삼춘들을 만날 수 있다.',
    answer: 'O',
    distance: 0,
    itemName: '허브',
  },
  {
    name: '수산리 마을',
    id: 5,
    description:
      '수산리 마을은 제주 북쪽에 위치한 마을로, 물매오름을 천천히 누비며 자연을 즐길 수 있는 곳으로 알려져 있습니다. 이 마을은 자연의 아름다움을 즐기기에 최적의 장소로, 특히 물매오름은 그 독특한 지형과 풍경으로 관광객들에게 힐링과 즐거움을 제공하고 있습니다.',
    latitude: 33.470987,
    longitude: 126.3876014,
    radius: 1.2,
    quiz: '수산리마을의 특산품은 망고이다.',
    answer: 'X',
    distance: 0,
    itemName: '초당옥수수',
  },
  {
    name: '의귀리 마을',
    id: 6,
    description:
      '의귀리 마을은 넓은 목초지를 자랑하며 예로부터 말을 키우기에 이적한 환경을 제공하고 있습니다. 이 마을에서는 말을 타며 느긋하게 편백 숲을 거닐 수 있는데, 그 경험은 평화로운 자연 속에서의 휴식과 즐거움을 제공합니다.',
    latitude: 33.310076,
    longitude: 126.7208965,
    radius: 2.4,
    quiz: '의귀리마을에는 수선봉 그네가 있다.',
    answer: 'X',
    distance: 0,
    itemName: '말',
  },
  {
    name: '호근동 마을',
    id: 7,
    description:
      '호근동 마을은 제주 남쪽에 위치하며, 서귀포 구시가지와 신시가지 사이에 위치한 치유의 숲을 자랑합니다. 마을은 한라산의 자락을 감싸고 있어 바닷가에서 바라보는 백록담과 가까운 거리에 있는 계곡이 독특한 자연 경관을 제공합니다.',
    latitude: 33.270433,
    longitude: 126.5456072,
    radius: 2.8,
    quiz: '호근동마을은 백록담과 가깝다.',
    answer: 'O',
    distance: 0,
    itemName: '감귤',
  },
  {
    name: '가시리 마을',
    id: 8,
    description:
      '가시리 마을은 이름 그대로 시간을 더한다는 뜻을 담고 있으며, 이 마을은 드넓은 초원과 목초지, 억새와 유채꽃 군락지, 그리고 오름과 표선 바당의 아름다운 풍경을 자랑합니다. 마을 전체가 자연의 아름다움으로 가득하며, 특히 다양한 식물과 지형이 만들어내는 다채로운 풍경이 이곳을 독특하게 만들고 있습니다.',
    latitude: 33.3828211,
    longitude: 126.7313785,
    radius: 3.3,
    quiz: '가시리마을은 유채꽃으로 유명하다.',
    answer: 'O',
    distance: 0,
    itemName: '메밀',
  },
  {
    name: '신창리 마을',
    id: 9,
    description:
      '신창리 마을은 제주 서쪽에 위치한 곳으로, 한적하면서도 아름다운 자연과 다양한 액티비티가 모여있는 특별한 곳입니다. 마을을 꾸미는 아름다운 노을과 함께 늘어선 풍차는 신창의 해안도로를 아름답게 장식하고 있습니다. 특히 풍차와 등대를 연결하는 싱게물공원의 다리는 이미 많은 이들에게 사랑받는 인생샷 명소로 자리 잡고 있습니다. 이곳은 지루할 틈 없는 활동과 아름다운 풍경이 어우러져 여행객들에게 특별한 경험을 제공하는 곳으로 알려져 있습니다.',
    latitude: 33.3454172,
    longitude: 126.1810665,
    radius: 0.7344,
    quiz: '신창에는 해안도로가 있다.',
    answer: 'O',
    distance: 0,
    itemName: '감귤',
  },
  {
    name: '교래삼다수 마을',
    id: 10,
    description:
      '교래삼다수 마을은 한라산쪽 중산간에 위치한 마을로, 목가적인 전원풍경이 특징이며 가족 단위의 관광객들에게 많이 찾아지고 있습니다. 이 마을은 국가지정 천연기념물로 알려진 산굼부리로 유명하며, 목장지대와 오름 등 넓은 임야지대가 펼쳐져 있습니다. 울창한 수림과 계곡, 오름 등이 어우러진 아름다운 경관을 자랑하며, 거주지와 근접한 유휴농지를 활용한 다양한 체험프로그램이 제공되고 있습니다. 이로써 교래삼다수 마을은 자연 속에서 휴식과 체험을 동시에 즐길 수 있는 곳으로 손색이 없습니다.',
    latitude: 33.4371621,
    longitude: 126.6707147,
    radius: 1.4,
    quiz: '교래삼다수마을에는 계곡이 없다.',
    answer: 'X',
    distance: 0,
    itemName: '수련',
  },
  {
    name: '김녕리 마을',
    id: 11,
    description:
      '김녕리 마을은 해안가에 자리한 독특한 마을로, 제주도에서 드물게 하천이 없어 마을에 다리가 없는 특이한 지형을 자랑합니다. 그러나 김녕 주변에는 다양한 동굴이 분포되어 있고, 마을 여러 곳에서 용천수를 찾아볼 수 있습니다. 이로 인해 김녕리는 독특한 지형과 자연환경을 통해 많은 관광객들에게 매력적인 곳으로 손꼽히고 있습니다.',
    latitude: 33.5489326,
    longitude: 126.7557395,
    radius: 2.2,
    quiz: '김녕마을에는 해안가가 없다.',
    answer: 'X',
    distance: 0,
    itemName: '더덕',
  },
  {
    name: '무릉리 마을',
    id: 12,
    description:
      '무릉리 마을은 제주도 서남쪽에 위치한 전형적인 농촌마을로, 비옥한 토양의 광활한 평야와 아름다운 곶자왈이 동네를 아름답게 감싸고 있는 곳입니다. 이 마을은 자연의 풍요로움과 평화로운 농촌 풍경을 특징으로 하고 있어 지역의 자연 환경과 농업 문화를 경험하고 싶어하는 이들에게 인기가 있습니다.',
    latitude: 33.2719978,
    longitude: 126.2222369,
    radius: 1.6,
    quiz: '무릉리마을은 농촌 마을이다.',
    answer: 'O',
    distance: 0,
    itemName: '등대',
  },
  {
    name: '저지리 마을',
    id: 13,
    description:
      '저지리 마을은 제주 서쪽에 위치하며, 올레길 14-1 코스를 품고 있는 독특한 마을입니다. 이 마을은 봄, 여름, 가을, 겨울 각 계절마다 다른 매력을 선사하는 아름다운 곶자왈과 함께, 힐링을 위한 다양한 체험이 가능한 생각하는 정원, 그리고 예술인마을로 알려진 이색적인 공간까지 다양한 즐길거리를 제공합니다. 올레길을 따라 걷는 것이 제격인 이 마을은 독특한 자연환경과 예술적인 분위기가 어우러져 방문객들에게 특별한 경험을 선사하는 곳으로 알려져 있습니다.',
    latitude: 33.3272198,
    longitude: 126.2535523,
    radius: 1.5,
    quiz: '저지리마을의 특산품은 황토마늘이다.',
    answer: 'O',
    distance: 0,
    itemName: '감자',
  },
];
export const MISSION_LIST = [
  '쇠소깍 축제 참여하기',
  '고이오름 등반하기',
  '동백나무 숲 산책하기',
  '한라봉 향초 만들기',
  '로컬 갈치조림 맛보기',
];
