import classNames from 'classnames';
import dropdownStyle1 from '../css/dropdown.light.metronics.module.scss';
import confirmPopupStyle1 from '../css/confirmpopup.light.metronics.module.scss';
import passwordStyle1 from '../css/password.light.metronics.module.scss';
import paginatorStyle1 from '../css/paginator.light.metronics.module.scss';
import calendarStyle1 from '../css/calendar.light.metronics.module.scss';
import dialogStyle1 from '../css/dialog.light.metronics.module.scss';
import menuStyle1 from '../css/menu.light.metronics.module.scss';
import messageStyle1 from '../css/message.light.metronics.module.scss';
import carouselStyle1 from '../css/carousel.light.metronics.module.scss';
import chronoStyle1 from '../css/chrono.light.metronics.module.scss';

const INPUT_TEXT = {
  lightWithAccent: 'focus:!ring-0 flex flex-1 w-full text-kt-text-dark hover:!border-kt-primary focus:!border-kt-primary active:!border-kt-primary',
  lightMetronics: 'focus:!ring-0 flex flex-1 w-full text-kt-text-dark border-none bg-kt-gray-100 hover:!bg-kt-bg4 focus:!bg-kt-bg4 active:!bg-kt-bg4',
};

const DROPDOWN = {
  container: {
    lightMetronics: classNames(dropdownStyle1.dropdown),
  },
  lightWithAccent: 'focus:! flex flex-1 w-full text-kt-text-dark hover:!border-kt-primary focus:!border-kt-primary active:!border-kt-primary',
  lightMetronics: 'focus:!ring-0 flex flex-1 w-full text-kt-text-dark border-none bg-kt-gray-100 hover:!bg-kt-bg4 focus:!bg-kt-bg4 active:!bg-kt-bg4',
};

const BUTTON = {
  primary: 'text-sm !font-normal px-4 md:px-6 focus:ring-0 !border-none !text-white !bg-kt-primary hover:!bg-kt-primary-dark',
  secondary: 'text-sm !font-normal px-4 md:px-6 focus:ring-0 !border-none !text-kt-gray-700 !bg-white hover:!bg-color-7 hover:!text-kt-primary',
  tertiary: 'text-sm !font-normal focus:ring-0 !border-none !text-kt-gray-700 !bg-color-5 hover:!bg-color-7 hover:!text-kt-primary',
  danger: 'text-sm !font-normal px-4 md:px-6 focus:ring-0 !border-none !bg-kt-danger !text-kt-danger-inverse hover:!bg-kt-danger-dark',
};

const BREADCRUMB_BUTTON = {
  primary: 'text-xs !font-normal px-2 py-2 md:px-3 md:py-2 focus:ring-0 !border-none !text-white !bg-primary/90 hover:!bg-primary',
  secondary: 'text-xs !font-normal px-2 py-2 md:px-3 md:py-2 focus:ring-0 !border-none !text-gray-700 !bg-white hover:!bg-color-7 hover:!text-primary',
  tertiary: 'text-xs !font-normal px-2 py-2 md:px-3 md:py-2 focus:ring-0 !border-none !text-gray-700 !bg-color-5 hover:!bg-color-7 hover:!text-primary',
};

const LABEL = {
  primary: 'text-kt-text-dark',
  secondary: 'text-kt-gray-800',
  tertiary: 'text-kt-gray-600',
  detail: 'text-kt-gray-500',
  error: 'text-sm text-kt-danger',
  success: 'text-sm text-color-18',
};

const CONFIRM_POPUP = {
  lightMetronics: classNames(confirmPopupStyle1.confirm_popup),
};

const PASSWORD = {
  lightMetronics: classNames(passwordStyle1.password),
};

const INLINE_MESSAGE = {
  warn: classNames('flex w-full flex-row justify-center items-start px-4 py-6 !bg-kt-warning-light !border-dashed !border-[1px] !border-kt-warning', messageStyle1.warn),
  info: classNames('flex w-full flex-row justify-center items-start px-4 py-6 !bg-kt-info-light !border-dashed !border-[1px] !border-kt-info', messageStyle1.info),
};

const REQUIRED = "after:content-['*'] after:text-kt-danger after:ml-1 mt-5";

const TABLE_LAYOUT = {
  TABLE: {
    lightMetronics: classNames('table-auto w-full'),
  },
  ROW: {
    lightMetronics: classNames('border-dashed border-t-0 border-l-0 border-r-0 border-b-[1px] py-3 border-kt-gray-200'),
  },
  HEADING: {
    lightMetronics: classNames('text-kt-gray-500 font-medium text-xs text-left py-5 pr-3 uppercase whitespace-nowrap'),
  },
  CELL: {
    lightMetronics: classNames('text-left !py-5 pr-3'),
  },
};

const PAGINATOR = {
  lightMetronics: paginatorStyle1.paginator,
};

const DATE = {
  lightMetronics: calendarStyle1.calendar,
  lightMetronicsSearch: calendarStyle1.calendarSearch,
};

const DIALOG = {
  dialog: 'w-11/12 md:w-1/2',
  closeable: {
    lightMetronics: classNames(dialogStyle1.closeable, 'focus:ring-0 !border-none'),
  },
  nonCloseable: {
    lightMetronics: classNames(dialogStyle1.nonCloseable, 'focus:ring-0 !border-none'),
  },
};

const MENU = {
  CONTAINER: {
    lightMetronics: classNames(menuStyle1.menu, 'w-fit py-3.5'),
  },
  ITEM: {
    lightMetronics: 'text-sm mx-2 hover:bg-color-7 rounded ',
  },
};

const CAROUSEL = {
  lightMetronics: carouselStyle1.carousel,
};

const CHART = {
  ASPECT_RATIO: 0.6,
  SCALE_X_GRID_COLOR: 'transparent',
  SCALE_X_TICK_COLOR: '#A2A5B6',
  SCALE_Y_GRID_COLOR: '#F7F8FA',
  SCALE_Y_TICK_COLOR: '#A2A5B6',
  TENSION: 0.4,
};

const CHRONO = {
  lightMetronics: {
    horizontal: {
      card: chronoStyle1.horizontal__card,
      cardMedia: chronoStyle1.horizontal__cardMedia,
      cardSubTitle: chronoStyle1.horizontal__cardSubTitle,
      cardText: chronoStyle1.horizontal__cardText,
      cardTitle: chronoStyle1.horizontal__cardTitle,
      controls: chronoStyle1.horizontal__controls,
      title: chronoStyle1.horizontal__title,
    },
  },
};

export const STYLES = {
  INPUT_TEXT,
  DROPDOWN,
  BUTTON,
  BREADCRUMB_BUTTON,
  LABEL,
  CONFIRM_POPUP,
  PASSWORD,
  INLINE_MESSAGE,
  REQUIRED,
  TABLE_LAYOUT,
  PAGINATOR,
  DATE,
  DIALOG,
  MENU,
  CAROUSEL,
  CHART,
  CHRONO,
};
