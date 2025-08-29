import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({
  raised,
  header,
  media,
  content,
  actions,
  className,
  headerClassName,
  contentClassName,
  actionsClassName,
  mediaClassName,
  headerSx,
  contentSx,
  actionsSx,
  mediaSx,
  ...props
}) => (
  <div
    className={twMerge(
      'rounded-2xl overflow-hidden shadow-sm border border-gray-200',
      raised && 'shadow-lg',
      className
    )}
    {...props}
  >
    {header && (
      <div
        className={twMerge('p-4 border-b border-gray-200', headerClassName)}
        style={headerSx}
      >
        {header}
      </div>
    )}
    {media && (
      <div
        className={twMerge('w-full', mediaClassName)}
        style={mediaSx}
      >
        {media}
      </div>
    )}
    {content && (
      <div
        className={twMerge(contentClassName)}
        style={contentSx}
      >
        {content}
      </div>
    )}
    {actions && (
      <div
        className={twMerge('p-2 border-t border-gray-200 flex items-center space-x-2', actionsClassName)}
        style={actionsSx}
      >
        {actions}
      </div>
    )}
  </div>
);

export default Card;
