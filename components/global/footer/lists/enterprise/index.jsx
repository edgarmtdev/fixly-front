import React from "react";
import { Title, List } from "../styled";

const Enterprise = () => {
  return (
    <div>
      <Title>Enterprise</Title>
      <List className="text-white font-light flex flex-col gap-5">
        <li>About us</li>
        <li>History</li>
      </List>
    </div>
  );
};

export default Enterprise;
