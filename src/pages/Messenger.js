import React, {Fragment} from 'react';

import {Inbox, ChatBox} from "./index";

export function Messenger(props) {
  return (
    <Fragment>
      <div className={`green-belt`}/>
      <div className={`messenger fixed flex`}>
        <Inbox/>
        <ChatBox/>
      </div>
    </Fragment>
  );
}
