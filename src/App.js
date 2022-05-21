import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Counter } from "./feature/counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App"><Counter /></div>
    </Provider>
  );
}

export default App;
