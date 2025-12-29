export type Theme = 'light' | 'dark';

export type IconName = 
  | 'user' 
  | 'bell' 
  | 'plus' 
  | 'chat' 
  | 'home' 
  | 'arrowRight' 
  | 'sun' 
  | 'moon' 
  | 'chevronLeft' 
  | 'chevronRight' 
  | 'shoppingBag';

export interface VideoData {
  id: number;
  author: string;
  avatarSeed: string;
  date: string;
  thumbnailSeed: string;
  title: string;
  description: string;
  duration: string;
}

export interface ShortVideoData {
  id: number;
  seed: string;
  title: string;
}