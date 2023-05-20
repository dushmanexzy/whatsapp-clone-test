import React from 'react';
import {connect} from "react-redux";
import SearchBox from "./subs/SearchBox";
import UserBox from "./subs/UserBox";
import InboxItem from "./subs/InboxItem";

function Inbox(props) {
  return (
    <div className={`inbox rel flex col`}>
      {/** Header | UserBox */}
      <UserBox/>

      {/** SearchBox */}
      <SearchBox/>

      {/** Conversation */}
      <div className={`conv-list rel`}>
        {['', '', '', '', '', '', '', '', '', '', ''].map((node, ind) => (
          <InboxItem key={ind}/>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loaded: state.App.loaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setState: (loaded) => dispatch({type: "APP_STATE", state: {loaded: loaded}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
