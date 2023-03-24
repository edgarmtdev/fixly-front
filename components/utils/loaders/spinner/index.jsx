import React from "react";
import styled, { keyframes } from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
export const CardLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-height: 600px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #0000003f;
  padding: 2rem;
  margin-bottom: 3rem;
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;

const SpinnerLoader = () => {
  return (
    <CardLoading>
      <CgSpinnerTwoAlt size={50} color={"#3E5067"} />
    </CardLoading>
  );
};

export default SpinnerLoader;
