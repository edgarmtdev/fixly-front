import styled from "styled-components";

export const DropdownContainer = styled.div`
  top: 4.5rem;
  right: 5%;
  position: fixed;
  z-index: 10;
  padding: 1.5rem 0;
  width: 400px;
  background-color: #fff;
  box-shadow: 0px 5px 20px #0000003f;
  border-radius: 4px;

  .line {
    border-bottom-width: 1px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  span {
    background-color: #e6ecef;
    padding: 0.75rem;
    border-radius: 9999px;
  }
  p {
    font-size: 12px;
  }

  &:hover {
    background-color: #e6ecef;
  }
`;
