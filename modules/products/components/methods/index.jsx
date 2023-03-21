import React from "react";
import { GridPayments, Title } from "./styled";
import ContainerPaymentsMethods from "./container";
import PAYMENT_METHODS from "./models/methods";

const PaymentsMethods = () => {
  const [methods] = React.useState(PAYMENT_METHODS);
  return (
    <div>
      <Title>Payments methods</Title>
      <GridPayments>
        {methods.map((method, index) => {
          return (
            <ContainerPaymentsMethods
              title={method.title}
              icons={method.icons}
              key={index}
            />
          );
        })}
      </GridPayments>
    </div>
  );
};

export default PaymentsMethods;
