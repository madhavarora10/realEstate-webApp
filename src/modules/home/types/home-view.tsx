import {
  topPageType,
  middlePage2Type,
  reviewsType,
  aboutUsType,
  NewsletterType,

} from '../../../common/types/home/index';
import { Footer } from '../../../common/types/footer';

export type HomeViewProps = {
  navbar?: any,
  index:{ topPage?: topPageType,
    Newsletter?: NewsletterType,
    middlePage2?: middlePage2Type,
    aboutUsComponent?: aboutUsType,
    review?:reviewsType } | any,
  footer?:Footer | any

};
