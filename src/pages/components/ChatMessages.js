import React from 'react';
import {ChatBubble} from "./index";
import {useSelector} from "react-redux";

export function ChatMessages() {
  const chat = useSelector(state => state.chat.chat);
  const user = useSelector(state => state.chat.user);

  return (
    <div className={`chat rel flex col`}>
      {
        chat.map((item, ind) => (
          <ChatBubble
            key={item.ID}
            user={user}
            meta={item}
            dir={ind % 2 === 0 ? 1 : 0}
          />
        ))
      }
    </div>
  );
}
