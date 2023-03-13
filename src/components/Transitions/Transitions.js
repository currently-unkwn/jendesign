import styled from "styled-components/macro";
import { motion } from "framer-motion";

const Transitions = ({ children }) => {
  return (
    <Wrapper
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{ height: "100%" }}
      // initial={{ x: 300, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: 300, opacity: 0 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 260,
      //   damping: 20,
      // }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)``;

export default Transitions;
