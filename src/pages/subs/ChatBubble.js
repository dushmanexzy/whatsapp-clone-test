import React from 'react';

function ChatBubble(props) {
  const {dir, meta} = props;

  console.log(meta)

  // const {ID, uid, text, media} = meta;

  return (
    <div className={`bubble flex rel ${dir === 1 ? 'mine' : ''}`}>
      <div className={`ballon rel`}>
        <h2 className={`name s13 bold`}>Dvortsov Andrey</h2>
        <p className={`text s13`}>TEXT</p>
        <span className={`stamp c777 s11 abs`}>03:53 PM</span>
      </div>
    </div>
  );
}

export default ChatBubble;
