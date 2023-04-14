import styled from "styled-components";

const Total = styled.div`
  display: flex;
  margin: 2.5rem auto;

  p {
    font-size: 24px;
    margin-left: auto;
  }
`;

const TotalComponent = ({ total }) => {
  return (
    <Total>
      <p>Total: ${total} </p>
    </Total>
  );
};

export default TotalComponent;
