import React from "react";
import styled from "styled-components";

function Week2_SC3() {
  return (
    <div>
      <Button color="green">Green Button</Button>
      <Button>Blue Button</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: ${(props) => props.color || "blue"};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

export default Week2_SC3;
