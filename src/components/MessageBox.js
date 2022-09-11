import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectMessage } from "../store/appState/selectors";
import { clearMessage } from "../store/appState/slice";

export const MessageBox = () => {
  const dispatch = useDispatch();

  const message = useSelector(selectMessage);

  const displayMessage = message !== null;

  if (!displayMessage) return null;

  return (
    <MessageContainer message={message}>
      <Text message={message}>{message.text}</Text>
      <Text onClick={() => dispatch(clearMessage())} message={message}>
        x
      </Text>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.message.variant === "success" ? "#C2DED1" : "#F4BFBF"};
  height: 50px;
  border-bottom: 1px solid
    ${(props) => (props.message.variant === "success" ? "#6D8B74" : "#F32424")};
`;

const Text = styled.p`
  color: ${(props) =>
    props.message.variant === "success" ? "#6D8B74" : "black"};
  font-weight: bold;
  margin-top: 0px;
  padding: 15px;
`;
