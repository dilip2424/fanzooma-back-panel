import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  id: number;
  email: string;
  name: string;
  phone: string;
  profile_picture: string;
  status: string;
  type: string;
}

  // _id: string;
  // channel_id: string;
  // channel_description: string;
  // channel_icon: string;
  // channel_start_date: string;
  // channel_title: string;
  // contract_end_date: string;
  // contract_start_date: string;
  // creatorData: string;
  // drm_royality_share: string;
  // earning_reduction: string;
  // icon_type: string;
  // revenue_start_date: string;
  // status: string;
  // views: string;
  // youtube_earning: string;
  // youtube_videos: string;