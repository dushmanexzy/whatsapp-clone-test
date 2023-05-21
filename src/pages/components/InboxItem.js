import React from 'react';
import {Link} from "react-router-dom";

function InboxItem() {
  return (
    <div className={`conversation flex rel aic`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`} to={''}>
          <img src={`https://i.pravatar.cc/50?t=${new Date().getTime()}`} alt="user avatar"/>
        </Link>
      </div>

      <div className={`meta rel flex aic`}>
        <div className={`info rel flex col`}>
          <h2 className={`name s14 bold wordwrap`}>Andrey Dvortsov</h2>
          <h2 className={`last-msg s13 c777 wordwrap`}>Year! I think i know you.</h2>
        </div>

        <div className={`extra rel flex col aic`}>
          <h2 className={`stamp s12 c777`}>11:04 PM</h2>
          <div className={`badge rel s12 cfff`}>99</div>
        </div>
      </div>
    </div>
  );
}

export default InboxItem;
