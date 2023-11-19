import {
  topPageType,
  middlePageType,
  middlePage2Type,
  reviewsType,
  aboutUsType,

} from '../../../common/types/home/index';
import { Footer } from '../../../common/types/footer';

export type HomeViewProps = {
  navbar?: any,
  index:{ topPage?: topPageType,
    middlePage?: middlePageType,
    middlePage2?: middlePage2Type,
    aboutUsComponent?: aboutUsType,
    review?:reviewsType } | any,
  footer?:Footer | any

};
