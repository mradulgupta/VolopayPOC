type Core = {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
};

type Images = {
  orignal: Core;
  fixed_height: Core;
  fixed_height_downsampled: Core;
  fixed_height_small: Core;
  fixed_width: Core;
  fixed_width_downsampled: Core;
  fixed_width_small: Core;
};

type GIF = {
  type: string;
  id: string;
  url: string;
  username: string;
  source: string;
  title: string;
  images: Images;
};
type TrendingResponse = {
  data: GIF[];
};

type RequestParams = {
  query: string;
  off: number;
};

export type {TrendingResponse, RequestParams, GIF};
