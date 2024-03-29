import styled, { keyframes } from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const ButtonComponent = styled.div`
  margin: auto 1rem 2rem 1rem;
  button {
    background-color: #4fbb8b;
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    display: grid;
    place-items: center;
    margin-left: auto;
    width: 100%;
    svg {
      animation: ${spin} 1s linear infinite;
    }
    &:hover {
      background-color: #4fbb8ae1;
      scale: 1.01;
      transition: 200ms;
    }
    @media ${BREAKPOINTS_DEVICES.tabletL} {
      width: ${(props) => (props.size ? "100%" : "100%")};
    }
  }
`;
