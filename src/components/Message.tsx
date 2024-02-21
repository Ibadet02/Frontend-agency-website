import React from "react";
import { StyledMessage } from "../styles/components/Message.styled";
import { MessageProps } from "./props";

const Message: React.FC<MessageProps> = ({ text, isVisible }) => {
  return (
    <StyledMessage className={`message ${isVisible ? 'visible' : 'hidden'}`}>
      <p>
        <span>{text}</span>
        <img src="" alt="" />
      </p>
    </StyledMessage>
  );
};

export default Message;
