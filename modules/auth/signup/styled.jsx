import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 90%;
  min-height: 600px;
  margin: 3rem 1.25rem;
  background-color: #f6f6f6;
  padding: 0.5rem;
  border-radius: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${BREAKPOINTS_DEVICES.tablet} {
    width: 80%;
  }

  @media ${BREAKPOINTS_DEVICES.laptop} {
    max-width: 1024px;
    height: 500px;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const ErrorMessage = styled.span`
  padding: 0.5rem;
`;
