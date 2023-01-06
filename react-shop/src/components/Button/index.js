import MakeButton from "./style";

function Button(props) {
  return <MakeButton {...props}> {props.children}</MakeButton>;
}

export default Button;
