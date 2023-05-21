import React from 'react';
import {Link} from "react-router-dom";

function UserBox() {
  return (
    <div className={`userbox flex`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img src={`https://i.pravatar.cc/50`} alt="user avatar"/>
        </Link>
      </div>

      <div className={`actions rel flex aic`}>
        <button className={`icon-chat s24`}/>
        <button className={`icon-more_vert s24`}/>
      </div>
    </div>
  );
}

export default UserBox;
