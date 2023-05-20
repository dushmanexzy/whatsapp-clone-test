import { Provider } from 'react-redux';
import appStore from './redux/Store';
import ZuzApp from "./ZuzApp";

function App() {
  return (
    <Provider store={appStore}>
      <ZuzApp />
    </Provider>
  );
}

export default App;
