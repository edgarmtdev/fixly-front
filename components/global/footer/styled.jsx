import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";

export const Container = styled.footer`
  background-color: #3e5067;
`;

export const FooterContainer = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .lists {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  @media ${BREAKPOINTS_DEVICES.tablet} {
    .lists {
      margin-top: 0rem;
      width: 40%;
    }
    padding: 5rem;
    display: flex;
  }
`;

export const Reserved = styled.div`
  display: flex;
  border-top: 1px solid #c2c2c2;
  max-width: 1700px;
  padding: 1rem;
  margin: 0 auto;
  color: #c2c2c2;
  font-size: 12px;
  font-weight: 400;
  width: 100%;

  div {
    display: flex;
    gap: 1.5rem;
    margin-left: auto;
    font-size: 22px;
    svg {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
