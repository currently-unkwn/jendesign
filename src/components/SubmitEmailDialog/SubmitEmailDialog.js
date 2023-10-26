import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";

import * as Dialog from "@radix-ui/react-dialog";
import SubmitEmail from "../SubmitEmail/SubmitEmail";
import CloseButton from "../CloseButton/CloseButton";

import { COLORS, QUERIES } from "../../constants";

const SubmitEmailDialog = ({ isOpen, onDismiss }) => {
  const location = useLocation();

  useEffect(() => {
    onDismiss();
  }, [location]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Wrapper>
          <Backdrop />
          <Content>
            <SubmitEmail />
            <Dismiss>
              <CloseButton />
            </Dismiss>
          </Content>
        </Wrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -190%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-50%, -190%);
  }
`;

const smallSlideIn = keyframes`
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled(Dialog.DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  /* display: flex;
  justify-content: center; */

  background-color: transparent;

  overflow-y: hidden;

  will-change: transform;

  &[data-state="open"] {
    animation: ${fadeIn} 600ms;
    animation-delay: 0ms;
  }

  &[data-state="closed"] {
    animation: ${fadeOut} 500ms;
    animation-delay: 100ms;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: hsl(${COLORS.tertiary});
  opacity: 0.8;
`;

const Content = styled(Dialog.Content)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: calc(600 / 16 * 1rem);
  padding: 40px;
  border-radius: 2px;
  color: hsl(${COLORS.secondary});
  background-color: hsl(${COLORS.white});
  transform: translate(-50%, -50%);

  will-change: transform;

  &[data-state="open"] {
    animation: ${slideIn} 400ms var(--ease-out);
    animation-fill-mode: backwards;
    animation-delay: 200ms;
  }

  &[data-state="closed"] {
    animation: ${slideOut} 250ms var(--ease-in);
    animation-delay: 0ms;
  }
`;

const Dismiss = styled(Dialog.Close)`
  --offset: 16px;

  position: absolute;
  top: var(--offset);
  right: var(--offset);

  background: transparent;
  border: none;
  cursor: pointer;
  color: hsl(${COLORS.secondary});

  animation: ${fadeIn} 200ms backwards;
  animation-delay: 600ms;

  @media ${QUERIES.smallTabletAndUp} {
    top: 0;
    color: hsl(${COLORS.white});
    transform: translateY(calc(-100% - var(--offset)));
  }
`;

export default SubmitEmailDialog;
