import React from "react";
import { twMerge } from "tailwind-merge";

const Stack = ({
  id,
  direction = "column",
  spacing = 0,
  divider,
  align,
  justify,
  wrap = false,
  flex = false,
  useGap = true,
  sx,
  className,
  children,
}) => {
  // ✅ Tailwind-safe mappings
  const directionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const baseClasses = twMerge(
    "flex",
    directionClasses[direction],
    align && alignClasses[align],
    justify && justifyClasses[justify],
    wrap && "flex-wrap",
    useGap && spacing && `gap-${spacing}`,
    !useGap && spacing && direction.includes("row") && `space-x-${spacing}`,
    !useGap && spacing && direction.includes("column") && `space-y-${spacing}`,
    className
  );

  const childElements = React.Children.toArray(children);

  const withDividers = divider
    ? childElements.reduce((acc, child, idx) => {
        acc.push(child);
        if (idx < childElements.length - 1) {
          acc.push(
            <div key={`divider-${idx}`} className="flex items-center justify-center">
              {divider}
            </div>
          );
        }
        return acc;
      }, [])
    : childElements;

  const renderedChildren = withDividers.map((child, idx) => {
    if (!flex || !React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      key: child.key ?? `stack-item-${idx}`,
      className: twMerge("flex-1", child.props?.className),
    });
  });

  return (
    <div id={id} className={baseClasses} style={{ ...sx }}>
      {renderedChildren}
    </div>
  );
};

export default Stack;
