import { BUTTON } from '../../services/constants';

const getButtonClassName: any = (item: any) => {
  if (item?.style === BUTTON.BLUE_FILL) {
    return 'bg-color-5865F2 !text-white hover:bg-white text-color-5865F2 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded';
  }
  if (item?.style === BUTTON.EMPTY) {
    return 'bg-transparent hover:!bg-blue-500 text-blue-700 font-semibold hover text-white py-2 px-4 border-1 border-white hover:border-transparent rounded';
  }
  if (item?.style === BUTTON.WHITE_FILL) {
    return 'bg-white !text-color-5865F2 hover:bg-blue-500 hover:text-blue-700 font-semibold hover:!text-white py-2 px-4 border-1 border-white hover:border-transparent rounded';
  }

  if (item?.style === BUTTON.BLUE_EMPTY) {
    return 'bg-white !text-color-5865F2 hover:bg-blue-500 hover:text-blue-700 font-semibold hover:!text-white py-2 px-4 border-1 border-color-5865F2 hover:border-transparent rounded';
  }

  return '';
};

export { getButtonClassName };
