import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  p.title {
    font-size: 28px;
    font-weight: 600;
    margin: 2rem 1rem;
    color: #3e5067;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    padding: 1.5rem;
    p.title {
      font-size: 32px;
    }
  }
`;
