import React from 'react';

function ChatBubble(props) {
  const {dir} = props;

  return (
    <div className={`bubble flex rel ${dir === 1 ? 'mine' : ''}`}>
      <div className={`ballon rel`}>
        <h2 className={`name s13 bold`}>Dvortsov Andrey</h2>
        <p className={`text s13`}>Some text from a message.</p>
        <span className={`stamp c777 s11 abs`}>03:53 PM</span>
      </div>
    </div>
  );
}

export default ChatBubble;
