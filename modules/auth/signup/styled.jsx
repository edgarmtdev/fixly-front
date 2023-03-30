import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Container = styled.div`
  margin: 6rem 0;
  width: 90%;
  background-color: #f6f6f6;
  border-radius: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  form {
    height: 100%;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    width: 80%;
    min-height: 600px;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    width: 80%;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    max-width: 1024px;
    height: 500px;
    margin-left: 5rem;
    margin-right: 5rem;
    margin: 10% 0;
  }
`;

export const ErrorMessage = styled.span`
  padding: 0.5rem;
`;
