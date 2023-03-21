import React from "react";
import { GridPayments, Title } from "./styled";
import { SiVisa, SiAmericanexpress } from "react-icons/si";

const PaymentsMethods = () => {
  return (
    <div>
      <Title>Payments methods</Title>
      <GridPayments>
        <div>
          <p>Debit card</p>
          <div>
            <SiVisa />
            <SiAmericanexpress />
          </div>
        </div>
        <div>
          <p>Credit card</p>
          <div>
            <SiVisa />
            <SiAmericanexpress />
          </div>
        </div>
        <div>
          <p>Stores</p>
          <SiAmericanexpress />
        </div>
      </GridPayments>
    </div>
  );
};

export default PaymentsMethods;
