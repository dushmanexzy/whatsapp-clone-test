import {Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import {Messenger, Signin, Splash} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";

import './css/App.scss';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  );
}

function AppWrapper() {
  const loaded = useSelector(state => state.app.loaded);
  const session = useSelector(state => state.app.session);
  const [isLoaded, setIsLoaded] = useState(loaded);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
      {isLoaded ?
        <Routes>
          {/** Signin */}
          <Route
            exact
            path="/"
            element={session ? <Messenger/> : <Signin/>}
          />
        </Routes> :
        <Splash/>
      }
    </BrowserRouter>
  )
}

export default App;
