export type SelectType = {
  value: number;
  label: string;
};

export interface UserProfile {
  files: string[];
  nickname: string;
  user_data_id: number;
}

export interface UserItem {
  item_id: number;
  item_name: string;
}
