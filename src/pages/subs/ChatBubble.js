import React from 'react';

function ChatBubble(props) {
  return (
    <div className={`bubble rel`}>
      <div className={`message`}>
        <div className={`ballon rel`}>
          <h2 className={`name s13 bold`}>Dvortsov Andrey</h2>
          <p className={`text s13`}>Some text from a message.</p>
          <h2 className={`stamp c777 s11 abs`}>03:53 PM</h2>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
