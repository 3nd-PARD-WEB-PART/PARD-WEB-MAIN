import styled from "styled-components";

function Week2_SC2() {
  return (
    <div>
      <Button>Default Button</Button>
      <DangerButton>Danger Button</DangerButton>
    </div>
  );
}

const Button = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0077cc;
  border-radius: 3px;
`;

const DangerButton = styled(Button)`
  background-color: #ff0000;
  border-color: #ff0000;
  &:hover {
    background: blue;
  }
`;

export default Week2_SC2;
