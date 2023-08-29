import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-height: 600px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #0000003f;
  div {
    padding: 1rem;
    img {
      width: auto;
    }
  }

  @media ${BREAKPOINTS_DEVICES.mobileL} {
    div {
      img {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }
    }
  }

  @media ${BREAKPOINTS_DEVICES.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    div {
      img {
        width: auto;
      }
    }
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    padding: 2rem;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    padding: 2rem;
  }
`;

export const Price = styled.p`
  width: auto;
  font-weight: 500;
  font-size: 20px;
  margin: 1rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    margin: 2.5rem 1rem;
    font-size: 24px;
  }
`;

export const Details = styled.div`
  color: #3e5067;
  font-size: 12px;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    margin: 2.5rem 0;
    font-size: 14px;
  }
`;
