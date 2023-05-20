import React from 'react';
import {Link} from "react-router-dom";

function ChatHead(props) {
  return (
    <div className={`chathead flex`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img src={`https://i.pravatar.cc/50`} alt="user avatar"/>
        </Link>
        <div className={`meta`}>
          <h2 className={`name s14`}>Dvortsov Andrey</h2>
          <h2 className={`status s13 c777`}>Last online 3 minutes ago.</h2>
        </div>
      </div>

      <div className={`actions rel flex aic`}>
        <button className={`icon-attach_file s24`}/>
        <button className={`icon-more_vert s24`}/>
      </div>
    </div>
  );
}

export default ChatHead;
