import { MethodsContainer } from "./styled";

const ContainerPaymentsMethods = ({ title, icons }) => {
  return (
    <MethodsContainer>
      <p>{title}</p>
      <div className="svg-container">
        {icons.map((icon, index) => {
          return <span key={index}>{icon}</span>;
        })}
      </div>
    </MethodsContainer>
  );
};

export default ContainerPaymentsMethods;
