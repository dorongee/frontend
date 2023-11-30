export type SelectType = {
  value: number;
  label: string;
};

export type RegisterUserProfileResponse = {
  user_data_id: number;
  nickname: string;
  age: number;
  gender: Gender;
  created_at: string;
  updated_at: string;
  files: {
    file_id: number;
    file_name: string;
    url: string;
    imgur_id: string;
  };
};

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
