import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// Tailwind variant mappings
const variantMap = {
  h1: 'text-5xl sm:text-6xl font-bold',
  h2: 'text-4xl sm:text-5xl font-semibold',
  h3: 'text-3xl sm:text-4xl font-semibold',
  h4: 'text-2xl sm:text-3xl font-medium',
  h5: 'text-xl sm:text-2xl font-medium',
  h6: 'text-lg sm:text-xl font-medium',
  subtitle1: 'text-base sm:text-lg font-normal',
  subtitle2: 'text-sm sm:text-base font-medium',
  body1: 'text-base sm:text-lg',
  body2: 'text-sm sm:text-base',
  caption: 'text-xs sm:text-sm',
  button: 'text-sm font-medium uppercase',
  overline: 'text-xs uppercase tracking-widest',
};

// Tailwind color mappings
const colorMap = {
  initial: 'text-black',
  inherit: 'text-white',
  primary: 'text-blue-600',
  secondary: 'text-purple-600',
  error: 'text-red-600',
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600',
};

const alignMap = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
  inherit: '',
};

const displayMap = {
  initial: '',
  block: 'block',
  inline: 'inline',
};

const Typography = forwardRef(
  (
    {
      variant = 'body1',
      component,
      align = 'inherit',
      color = 'initial',
      display = 'initial',
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      className = '',
      sx,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    let Tag = 'span';
    if (component) {
      Tag = component;
    } else if (paragraph) {
      Tag = 'p';
    } else if (
      variant === 'h1' ||
      variant === 'h2' ||
      variant === 'h3' ||
      variant === 'h4' ||
      variant === 'h5' ||
      variant === 'h6'
    ) {
      Tag = variant;
    }

    return React.createElement(
      Tag,
      {
        className: twMerge(
          variantMap[variant],
          colorMap[color],
          alignMap[align],
          displayMap[display],
          gutterBottom && 'mb-2',
          paragraph && 'mb-4',
          noWrap && 'truncate',
          className
        ),
        style: { ...style, ...sx },
        ref,
        ...rest,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
