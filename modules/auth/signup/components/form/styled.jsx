import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ContainerForm = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 28px;
    font-weight: 600;
    margin: 2rem 1rem;
    color: #3e5067;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media ${BREAKPOINTS_DEVICES.laptop} {
    padding: 1.5rem;
    p {
      font-size: 32px;
    }
    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
`;
