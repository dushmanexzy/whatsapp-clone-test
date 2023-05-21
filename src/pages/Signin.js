import React from 'react';
import Logo from '../images/logo.svg';
import {getStateInstance} from "../methods/getStateInstance";

export function Signin(props) {
  const onSubmitHandle = React.useCallback(() => {
    const instance = document.getElementById('instance').value;
    const token = document.getElementById('token').value;

    if (instance && token) {
      getStateInstance(instance, token)
    }
  }, [])

  return (
    <div className={`auth abs`}>
      <img className={`logo`} src={Logo} alt='App Logo'/>
      <h2 className={`s20 font title bold`}>SignIn to WhatsApp</h2>
      <p className={`s16 font slogan`}>Enter your data from GREEN-API</p>

      <div className={`form flex col`}>
        <input id={`instance`} type="text" placeholder={`Input your id instance`} />
        <input id={`token`} type="password" placeholder={`Input your Token`} />

        <button
          className={`s16 bold`}
          onClick={onSubmitHandle}
        >
          Send
        </button>
      </div>
    </div>
  );
}
