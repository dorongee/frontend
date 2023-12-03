export type SelectType = {
  value: number;
  label: string;
};

export interface UserProfile {
  nickname: string;
  user_data_id: number;
  completed_villages: number[];

  files: {
    file_id: number;
    file_name: string;
    url: string;
    imgur_id: string;
  };
}

export interface UserItem {
  item_id: number;
  item_name: string;
}

export interface Village {
  name: string;
  id: number;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
  quiz: string;
  answer: string;
  distance: number;
  itemName: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}
export type ImageResponse = {
  posture: string;
  url: string;
};

export type Gender = 'male' | 'female';

export type Mission = {
  user_mission_id: number;
  mission_details: string;
  is_complete: boolean;
};

export type Quiz = {
  quiz: {
    quiz_id: number;
    question: string;
    answer: string;
    village_id: number;
  };
  is_correct: boolean | null;
};
