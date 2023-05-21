import React from 'react';
import {ChatHead, ChatMessages, ChatSendBox} from "./components/index";

export function ChatBox(props) {
  return (
    <div className={`chatbox flex rel col`}>
      {/** Chat Header */}
      <ChatHead {...props} />

      {/** Conversation Box */}
      <ChatMessages {...props} />

      {/** Send Box */}
      <ChatSendBox {...props} />
    </div>
  );
}
