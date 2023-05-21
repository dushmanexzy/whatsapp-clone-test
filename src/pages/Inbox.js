import React from 'react';
import SearchBox from "./components/SearchBox";
import UserBox from "./components/UserBox";
import InboxItem from "./components/InboxItem";

export function Inbox() {
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
