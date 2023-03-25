import styled from "styled-components";

export const CardModule = styled.div`
  margin: 48px auto;
  background-color: white;
  min-height: 600px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #0000003f;
  padding: 2rem;
`;

export const Title = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-weight: 600;
  color: #3e5067;
  p {
    font-size: 30px;
  }
`;

export const BuyButton = styled.button`
  margin-left: auto;
  margin-top: auto;
  width: 30%;
  background-color: #cd8a20;
  text-align: center;
  padding: 12px;
  border-radius: 2px;
  font-weight: 6000;
  color: #fff;
  &:hover {
    background-color: #ffc364;
  }
`;

export const NotProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
