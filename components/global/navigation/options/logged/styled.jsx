import styled from "styled-components";

export const OptionsContainer = styled.section`
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 3rem;
    margin-left: auto;
  }
`;
