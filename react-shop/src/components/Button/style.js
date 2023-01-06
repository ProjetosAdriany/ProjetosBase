import styled from "styled-components";

const MakeButton = styled.button`
  background: var(--button-color);
  width: ${(props) => props.width + "%"};
  border-radius: 50px;
  font-size: ${(props) => props.size + "px"};
  padding: 15px;
  color: #fff;
  border: none;
`;
export default MakeButton;
