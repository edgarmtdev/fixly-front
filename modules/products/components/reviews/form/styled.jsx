import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const ButtonAddReview = styled.button`
  width: 6rem;
  background-color: #cd8a20;
  text-align: center;
  border-radius: 2px;
  font-weight: 600;
  padding: 8px;
  color: #fff;
  font-size: 10px;
  margin-left: auto;
  &:hover {
    background-color: #ffc364;
  }
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    font-size: 14px;
    width: 10rem;
  }
`;
