import React from "react";
import { twMerge } from "tailwind-merge";

const Box = ({
  component,
  className,
  sx,
  m,
  p,
  display,
  flex,
  grid,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  children,
  ...rest
}) => {
  const Component = component || "div";

  const style = {
    margin: m,
    padding: p,
    display,
    flex,
    grid,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    ...sx,
  };

  return (
    <Component className={twMerge(className)} style={style} {...rest}>
      {children}
    </Component>
  );
};

export default Box;
