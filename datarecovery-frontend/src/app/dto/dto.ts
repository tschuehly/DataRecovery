import { Order } from '../model/model';

export class ReviewDTO {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export class OrderTrackingStateInfoDTO {
  trackingState: string;
  count: number;
  constructor(trackingState, count) {
    this.trackingState = trackingState;
    this.count = count;
  }
}

export class KeywordRankDTO {
  id: Number;
  keyword: String;
  url: String;
  rank: Number;
  requestTime: Date;
}
