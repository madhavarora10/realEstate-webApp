import {
  propertyView,
  Footer,
  NavType,
} from '../../../common/types/property-page/index';
import { PropertyType } from '../../../common/types/property-type';

export type PropertyViewProps = {

  response:{
    propertyView?: propertyView
    navbar?:NavType | any
    footer?:Footer | any,
  },
  doc:PropertyType

};
