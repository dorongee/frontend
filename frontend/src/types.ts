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
  village_id: number;
  village_name: string;
  village_description: string;
  latitude: string;
  longitude: string;
  radius: string;
  distance: number;
}

export interface Position {
  latitude: number;
  longitude: number;
}
export type PixelUrls = {
  normal: string;
  cheering: string;
  in_despair: string;
};

export type Gender = 'male' | 'female';

export type Mission = {
  user_mission_id: number;
  mission_details: string;
  is_complete: boolean;
};
