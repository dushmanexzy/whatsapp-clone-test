import React from 'react';
import ChatBubble from "./ChatBubble";
import {connect} from "react-redux";

function ChatMessages(props) {
  const {chat} = props;
  return (
    <div className={`chat rel flex col`}>
      {
        chat.map((item, ind) => (
          <ChatBubble key={item.ID} meta={item} dir={ind % 2 === 0 ? 1 : 0}/>
        ))
      }
      <ChatBubble/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state.Chat
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setState: (loaded) => dispatch({type: "CHAT_STATE", state: {loaded: loaded}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
