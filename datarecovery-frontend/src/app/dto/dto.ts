
export class ReviewDTO {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export class OrderInfoDTO{
  activeCount: Number;
  awaitedCount: Number;
  archivedCount: Number;
}
