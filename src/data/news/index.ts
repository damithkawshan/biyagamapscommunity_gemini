// Export all news items
import { news1 } from './news_1';
import { news2 } from './news_2';
import { news3 } from './news_3';
import { news4 } from './news_4';

export const allNews = [news1, news2, news3, news4];

export type NewsItem = {
  date: string;
  heading: {
    en: string;
    si: string;
    tm: string;
  };
  summary: {
    en: string;
    si: string;
    tm: string;
  };
  content: {
    en: string;
    si: string;
    tm: string;
  };
  image: string;
};
