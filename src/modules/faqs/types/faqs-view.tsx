import {
  HeroType,
  NavType,
  QuestionsPage,
  Footer,

} from '../../../common/types/hero';

export type HomeViewProps = {
  isHero?: HeroType | any,
  isNav?: NavType | any,
  isQuestionsPage?: QuestionsPage | any
  isFooter?: Footer | any

};
