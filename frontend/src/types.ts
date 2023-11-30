export type SelectType = {
  value: number;
  label: string;
};

export interface UserProfile {
  files: string[];
  nickname: string;
  user_data_id: number;
  completed_villages: number[];
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
