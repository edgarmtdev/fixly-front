import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../../global/breakpoints";

export const OptionsContainer = styled.section`
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 1.75rem;
    margin-left: auto;
  }
`;

export const ButtonAuth = styled.button`
  width: 7rem;
  text-align: center;
  padding: 7px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  transition: 1s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
    transition: 500ms;
  }
`;
