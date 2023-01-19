import { forwardRef } from "react";

const DynamicBgSection = ({ bgColor, children, style }, ref) => {
  return (
    <div ref={ref} data-color={bgColor} style={style}>
      {children}
    </div>
  );
};

export default forwardRef(DynamicBgSection);
