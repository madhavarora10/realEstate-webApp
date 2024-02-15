import {
  propertyView,
  Footer,
  Navbar,
} from '../../../common/types/index';

import { PropertyType } from '../../../common/types/property-type';

export type PropertyViewProps = {

  response:{
    propertyView?: propertyView
    navbar?:Navbar | any
    footer?:Footer | any,
  },
  doc:PropertyType

};
