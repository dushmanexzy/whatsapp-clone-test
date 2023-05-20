import React from 'react';
import ChatBubble from "./ChatBubble";

function ChatMessages(props) {
  return (
    <div className={`chat rel flex col`}>
      {['','','','','','','','','','','','','','','',''].map((node, ind) => (
        <ChatBubble key={ind} dir={ind % 2 === 0 ? 1 : 0} />
      ))}
      <ChatBubble />
    </div>
  );
}

export default ChatMessages;
