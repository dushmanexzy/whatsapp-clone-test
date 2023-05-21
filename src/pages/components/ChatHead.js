import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function ChatHead() {
  const user = useSelector(state => state.chat.user);

  const {ID, dp, name, status} = user;

  return (
    <div className={`chathead flex`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img src={dp} alt="user avatar"/>
        </Link>
        <div className={`meta`}>
          <h2 className={`name s14`}>{name}</h2>
          <h2 className={`status s13 c777`}>{status}</h2>
        </div>
      </div>

      <div className={`actions rel flex aic`}>
        <button className={`icon-attach_file s24`}/>
        <button className={`icon-more_vert s24`}/>
      </div>
    </div>
  );
}
