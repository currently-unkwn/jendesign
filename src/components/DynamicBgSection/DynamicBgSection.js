import { forwardRef } from "react";

const DynamicBgSection = ({ bgColor, children }, ref) => {
  return (
    <div ref={ref} data-color={bgColor}>
      {children}
    </div>
  );
};

export default forwardRef(DynamicBgSection);
