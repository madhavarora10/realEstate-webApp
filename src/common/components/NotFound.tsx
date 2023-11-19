import classNames from 'classnames';
import React from 'react';
import { IMAGES, STYLES } from '../constants';

type NotFoundProps = {
  title?: string,
  description?: string
};

const NotFound: React.FC<NotFoundProps> = (props: NotFoundProps) => {
  const {
    title,
    description,
  } = props;

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <img
        className="max-w-full max-h-[400px]"
        alt="not-found"
        src={IMAGES.ILLUS.SEARCH}
      />
      <div
        className={classNames(STYLES.LABEL.primary, 'text-2xl font-semibold mt-4')}
      >
        {title}
      </div>
      <div
        className={classNames(STYLES.LABEL.detail, 'mt-4 text-base whitespace-pre-line text-center')}
      >
        {description}
      </div>

    </div>
  );
};

NotFound.defaultProps = {
  title: 'No items found.',
  description: '',

};

export { NotFound };
