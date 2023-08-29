import styled from "styled-components/macro";

import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() =>
          document.documentElement.scrollTo({
            top: 0,
            left: 0,
          })
        }
      >
        <Wrapper
          key={location.pathname}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{ height: "100%" }}
        >
          {children}
        </Wrapper>
      </AnimatePresence>
    </>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
`;

export default AnimatedLayout;
