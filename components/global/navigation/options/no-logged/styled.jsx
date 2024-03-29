import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const OptionsContainer = styled.section`
  display: none;
  span {
    cursor: pointer;
    &:hover {
      scale: 1.1;
      opacity: 0.7;
    }
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 1.5rem;
    margin-left: auto;
  }
`;

export const ButtonAuth = styled.button`
  width: 6rem;
  text-align: center;
  padding: 7px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  transition: 1s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
    transition: 500ms;
  }
`;
