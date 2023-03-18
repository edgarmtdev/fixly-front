import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px auto;
  background-color: white;
  height: 600px;
  border-radius: 5px;
  box-shadow: 0px 5px 20px #0000003f;
  padding: 2.5rem 5rem;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #37374a;
  margin-bottom: 5rem;
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
