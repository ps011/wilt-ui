interface Wilt {
  _id: string;
  visuals: any[];
  tags: string[];
  compact: string;
  lengthy: string;
  category: string;
  userId: string;
  username: string;
  date: Date;
  __v: number;
}

export interface User {
  _id: string;
  profile_image: string | ArrayBuffer;
  plan: string;
  active: boolean;
  followers: string[];
  following: string[];
  type: string;
  saved_wilts: string[];
  name: string;
  email: string;
  username: string;
  password: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  about: string;
  headline: string;
  blocked: any[];
  wilts: Wilt[];
}
